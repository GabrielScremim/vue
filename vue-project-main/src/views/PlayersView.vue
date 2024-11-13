<template>
  <div>
    <h1>Cadastro de Jogadores</h1>
    <p>Escolha um time para adicionar jogadores:</p>
    <ul>
      <li v-for="(team, index) in teams" :key="index">
        <button @click="selectTeam(index)">{{ team.name }}</button>
      </li>
    </ul>
    <PlayerForm v-if="selectedTeam !== null" @add-player="addPlayer" />
    <div v-if="selectedTeam !== null">
      <h3>Jogadores do Time {{ teams[selectedTeam].name }}:</h3>
      <ul>
        <li v-for="(player, index) in teams[selectedTeam].players" :key="index">
          {{ player.name }} - {{ player.position }} (#{{ player.number }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import PlayerForm from '../components/PlayerForm.vue';

export default {
  components: { PlayerForm },
  setup() {
    const store = useStore();
    const teams = computed(() => store.getters.getTeams);
    const selectedTeam = ref(null);

    const selectTeam = (index) => {
      selectedTeam.value = index;
    };

    const addPlayer = (player) => {
      if (selectedTeam.value !== null) {
        store.commit('ADD_PLAYER', { teamIndex: selectedTeam.value, player });
      }
    };

    return { teams, selectedTeam, selectTeam, addPlayer };
  },
};
</script>
