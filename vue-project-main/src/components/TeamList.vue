<template>
  <!-- Contêiner que envolve a lista de times -->
  <div>
    <!-- Lista de times: v-for itera sobre os times e exibe cada time -->
    <ul v-for="(team, index) in teams" :key="index">
      <!-- Cada item da lista de times -->
      <li style="display: flex; width: 430px; justify-content: space-between">
        <!-- Exibe o nome do time e o nome do técnico -->
        <h3 style="margin: 0">{{ team.name }} (Técnico: {{ team.coach }})</h3>

        <!-- Lista de jogadores dentro do time -->
        <ul>
          <!-- v-for itera sobre os jogadores do time e exibe o nome, posição e número da camisa -->
          <li v-for="(player, idx) in team.players" :key="idx">
            {{ player.name }} - {{ player.position }} (#{{ player.number }})
          </li>
        </ul>

        <!-- Botão para deletar o time, ao clicar chama a função deleteTeam passando o índice -->
        <button @click="deleteTeam(index)">Deletar Time</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";  // Importa 'computed' do Vue, necessário para trabalhar com propriedades computadas.
import { useStore } from 'vuex';  // Importa a função 'useStore' para acessar a store do Vuex.

export default {
  setup() {
    // Utiliza o Vuex store para acessar o estado global
    const store = useStore();

    // Definindo 'teams' como uma propriedade computada que observa os dados da store
    const teams = computed(() => store.getters.getTeams);

    return { teams };  // Retorna 'teams' para que possa ser utilizado no template.
  },

  // Métodos do componente
  methods: {
    // Função para deletar um time, emite o evento 'delete-team' com o índice do time a ser deletado
    deleteTeam(index) {
      this.$emit("delete-team", index);
    },
  },
};
</script>
