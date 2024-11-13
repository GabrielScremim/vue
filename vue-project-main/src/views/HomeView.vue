<template>
  <div>
    <h1>Bem-vindo ao Sistema de Times de Basquete</h1>
    <h2>Times Cadastrados:</h2>
    <ul>
      <li v-for="(team, index) in teams" :key="index">
        {{ team.name }} (Técnico: {{ team.coach }})
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const teams = computed(() => store.getters.getTeams);

    return { teams };
  },
};
</script>
