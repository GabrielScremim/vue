<template>
  <form @submit.prevent="submitPlayer">
    <input v-model="playerName" placeholder="Nome do Jogador" required />
    <input v-model="playerPosition" placeholder="Posição" required />
    <input v-model="playerNumber" type="number" placeholder="Número da Camisa" required />
    <button type="submit">Adicionar Jogador</button>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
  setup(_, { emit }) {
    const playerName = ref('');
    const playerPosition = ref('');
    const playerNumber = ref('');

    const submitPlayer = () => {
      emit('add-player', { name: playerName.value, position: playerPosition.value, number: playerNumber.value });
      playerName.value = '';
      playerPosition.value = '';
      playerNumber.value = '';
    };

    return { playerName, playerPosition, playerNumber, submitPlayer };
  },
};
</script>
