<template>
  <div>
    <h1>Cadastro de Times</h1>
    <TeamForm @add-team="addTeam" />
    <TeamList @delete-team="deleteTeam"/>
  </div>
</template>

<script>
import TeamForm from '../components/TeamForm.vue';
import TeamList from '../components/TeamList.vue';
import { useStore } from 'vuex';

export default {
  components: { TeamForm, TeamList },
  setup() {
    const store = useStore();
    const addTeam = (team) => {
      store.commit('ADD_TEAM', team);
    };
    const deleteTeam = (team) => {
      store.commit('DELETE_TEAM', team)
    }

    return { addTeam, deleteTeam };
  },
};
</script>
