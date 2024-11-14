<template>
  <div>
    <ul v-for="(team, index) in teams" :key="index">
      <li style="display: flex; width: 330px; justify-content: space-between">
        <h3 style="margin: 0">{{ team.name }} (Técnico: {{ team.coach }})</h3>
        <ul>
          <li v-for="(player, idx) in team.players" :key="idx">
            {{ player.name }} - {{ player.position }} (#{{ player.number }})
          </li>
        </ul>
        <button @click="deleteTeam(index)">Deletar Time</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from 'vuex';
export default {
  setup() {
       const store = useStore();
    const teams = computed(() => store.getters.getTeams);
    return { teams };
  },

  //props: ["teams"],
  methods: {
    deleteTeam(index) {
      this.$emit("delete-team", index);
    },
  },
};
</script>
