import { createStore } from 'vuex'; // Importa a função 'createStore' do Vuex para criar uma store

// Criação e exportação da store Vuex
export default createStore({
  // Definição do estado inicial da store
  state: {
    teams: [], // Um array vazio que irá armazenar os times. Cada time será um objeto que pode conter informações como nome, técnico, jogadores, etc.
  },

  // Definição das mutations para alterar o estado
  mutations: {
    // Mutação para adicionar um time à lista de times
    ADD_TEAM(state, team) {
      state.teams.push(team); // Adiciona um novo time ao array 'teams'
    },

    // Mutação para adicionar um jogador a um time específico
    ADD_PLAYER(state, { teamIndex, player }) {
      state.teams[teamIndex].players.push(player); // Adiciona o jogador ao time específico, localizando-o pelo índice (teamIndex)
    },

    // Mutação para excluir um time da lista
    DELETE_TEAM(state, index) {
      state.teams.splice(index, 1); // Remove o time na posição 'index' da lista de times
    },
  },

  // Definição dos getters para acessar o estado da store
  getters: {
    // Getter para acessar a lista de times
    getTeams(state) {
      return state.teams; // Retorna o array 'teams' do estado
    },
  },
});
