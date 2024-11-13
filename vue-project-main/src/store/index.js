import { createStore } from 'vuex';

export default createStore({
  state: {
    teams: [],
  },
  mutations: {
    ADD_TEAM(state, team) {
      state.teams.push(team);
    },
    ADD_PLAYER(state, { teamIndex, player }) {
      state.teams[teamIndex].players.push(player);
    },
    DELETE_TEAM(state, index) {
      state.teams.splice(index, 1);
    },
  },
  getters: {
    getTeams(state) {
      return state.teams;
    },
  },
});
