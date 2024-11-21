<template>
  <!-- Formulário para adicionar um novo jogador -->
  <form @submit.prevent="submitPlayer">
    <!-- Campo para o nome do jogador -->
    <input v-model="playerName" placeholder="Nome do Jogador" required />

    <!-- Campo para a posição do jogador -->
    <input v-model="playerPosition" placeholder="Posição" required />

    <!-- Campo para o número da camisa do jogador, sendo um campo numérico -->
    <input v-model="playerNumber" type="number" placeholder="Número da Camisa" required />

    <!-- Botão de envio para adicionar o jogador -->
    <button type="submit">Adicionar Jogador</button>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
  setup(_, { emit }) {
    // Definindo as variáveis reativas para armazenar os dados do jogador
    const playerName = ref('');
    const playerPosition = ref('');
    const playerNumber = ref('');

    // Função para lidar com o envio do formulário
    const submitPlayer = () => {
      // Emite o evento 'add-player' com os dados do jogador
      emit('add-player', {
        name: playerName.value,
        position: playerPosition.value,
        number: playerNumber.value
      });

      // Limpa os campos do formulário após o envio
      playerName.value = '';
      playerPosition.value = '';
      playerNumber.value = '';
    };

    // Retorna os dados e funções para o template
    return { playerName, playerPosition, playerNumber, submitPlayer };
  },
};

</script>
