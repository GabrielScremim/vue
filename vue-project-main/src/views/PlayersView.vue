<template>
  <div>
    <h1>Cadastro de Jogadores</h1> <!-- Título principal da página -->
    <p>Escolha um time para adicionar jogadores:</p> <!-- Texto explicativo -->
    
    <!-- Lista de times cadastrados -->
    <ul>
      <li v-for="(team, index) in teams" :key="index"> <!-- Itera sobre os times cadastrados -->
        <!-- Exibe o nome de cada time como um botão -->
        <button @click="selectTeam(index)">{{ team.name }}</button> 
      </li>
    </ul>

    <!-- Exibe o formulário para adicionar jogador somente se um time foi selecionado -->
    <PlayerForm v-if="selectedTeam !== null" @add-player="addPlayer" />

    <!-- Exibe a lista de jogadores do time selecionado -->
    <div v-if="selectedTeam !== null">
      <h3>Jogadores do Time {{ teams[selectedTeam].name }}:</h3> <!-- Exibe o nome do time -->
      <ul>
        <li v-for="(player, index) in teams[selectedTeam].players" :key="index"> <!-- Itera sobre os jogadores do time -->
          {{ player.name }} - {{ player.position }} (#{{ player.number }}) <!-- Exibe informações do jogador -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'; // Importa 'computed' e 'ref' do Vue para reatividade
import { useStore } from 'vuex'; // Importa 'useStore' para acessar o Vuex (store global)
import PlayerForm from '../components/PlayerForm.vue'; // Importa o componente PlayerForm

export default {
  components: { PlayerForm }, // Registra o componente PlayerForm no componente atual
  setup() {
    // Criação de variáveis reativas usando Vue 3 Composition API
    const store = useStore(); // Acesso à store Vuex
    const teams = computed(() => store.getters.getTeams); // Computed para acessar a lista de times da store
    const selectedTeam = ref(null); // Variável reativa que armazena o índice do time selecionado

    // Método para selecionar um time
    const selectTeam = (index) => {
      selectedTeam.value = index; // Define o índice do time selecionado
    };

    // Método para adicionar um jogador ao time selecionado
    const addPlayer = (player) => {
      if (selectedTeam.value !== null) {
        // A mutação 'ADD_PLAYER' é chamada apenas se um time for selecionado
        store.commit('ADD_PLAYER', { teamIndex: selectedTeam.value, player });
      }
    };

    // Retorna as variáveis e métodos necessários para o template
    return { teams, selectedTeam, selectTeam, addPlayer };
  },
};
</script>
