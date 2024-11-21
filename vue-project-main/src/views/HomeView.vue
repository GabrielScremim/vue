<template>
  <div>
    <h1>Bem-vindo ao Sistema de Times de Basquete</h1> <!-- Título principal da página -->
    <h2>Times Cadastrados:</h2> <!-- Subtítulo informando que a lista a seguir é de times cadastrados -->
    
    <!-- Lista de times: v-for itera sobre os times e exibe informações de cada um -->
    <ul>
      <li v-for="(team, index) in teams" :key="index"> <!-- Iteração sobre o array 'teams' -->
        {{ team.name }} (Técnico: {{ team.coach }}) <!-- Exibe o nome do time e o nome do técnico -->
      </li>
    </ul>
  </div>
</template>


<script>
import { computed } from 'vue'; // Importa 'computed' do Vue, necessário para criar propriedades reativas
import { useStore } from 'vuex'; // Importa 'useStore' para acessar a store do Vuex

export default {
  setup() {
    const store = useStore(); // Obtém a instância da store Vuex

    // Cria uma propriedade computada que retorna os times a partir da store
    const teams = computed(() => store.getters.getTeams); 

    return { teams }; // Retorna a propriedade 'teams' para ser usada no template
  },
};
</script>

