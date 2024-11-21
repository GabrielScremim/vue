<template>
  <div>
    <h1>Cadastro de Times</h1> <!-- Título da página para indicar que é a seção de cadastro de times -->

    <!-- Componente TeamForm é usado para adicionar novos times -->
    <TeamForm @add-team="addTeam" />

    <!-- Componente TeamList é usado para listar os times e permitir deletar -->
    <TeamList @delete-team="deleteTeam" />
  </div>
</template>

<script>
import TeamForm from '../components/TeamForm.vue'; // Importa o componente TeamForm para adicionar novos times
import TeamList from '../components/TeamList.vue'; // Importa o componente TeamList para listar e excluir times
import { useStore } from 'vuex'; // Importa o hook 'useStore' do Vuex para acessar o estado global

export default {
  components: { TeamForm, TeamList }, // Registra os componentes TeamForm e TeamList dentro deste componente

  setup() {
    const store = useStore(); // Acessa a store do Vuex

    // Método para adicionar um time, dispara a mutação ADD_TEAM
    const addTeam = (team) => {
      store.commit('ADD_TEAM', team); // Chama a mutação 'ADD_TEAM' para adicionar o time à store
    };

    // Método para deletar um time, dispara a mutação DELETE_TEAM
    const deleteTeam = (team) => {
      store.commit('DELETE_TEAM', team); // Chama a mutação 'DELETE_TEAM' para remover o time da store
    };

    // Retorna as funções que serão usadas nos templates para manipular a store
    return { addTeam, deleteTeam };
  },
};
</script>
