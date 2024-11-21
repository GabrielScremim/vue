<template>
  <!-- Formulário para cadastrar um novo time -->
  <form @submit.prevent="submitTeam" style="display: flex; gap: 12px">
    <!-- Campo para o nome do time. v-model cria a ligação com a variável 'teamName' -->
    <input v-model="teamName" placeholder="Nome do Time" required />
    
    <!-- Campo para o nome do técnico do time. v-model cria a ligação com a variável 'coachName' -->
    <input v-model="coachName" placeholder="Nome do Técnico" required />
    
    <!-- Botão de envio para cadastrar o time -->
    <button type="submit">Cadastrar Time</button>
  </form>
</template>


<script>
import { ref } from 'vue';

export default {
  setup(_, { emit }) {
    // Definindo variáveis reativas para armazenar o nome do time e o nome do técnico
    const teamName = ref('');
    const coachName = ref('');

    // Função para enviar os dados do time
    const submitTeam = () => {
      // Emite o evento 'add-team' para o componente pai com as informações do time
      emit('add-team', { 
        name: teamName.value,
        coach: coachName.value,
        players: []  // Inicializa o time com uma lista vazia de jogadores
      });

      // Limpa os campos após o envio
      teamName.value = '';  // Limpa o campo de nome do time
      coachName.value = '';  // Limpa o campo de nome do técnico
    };

    // Retorna as variáveis e a função para o template
    return { teamName, coachName, submitTeam };
  },
};

</script>
