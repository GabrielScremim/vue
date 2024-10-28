<template>
    <div class="basketball-container">
      <h2>Cadastro de Jogadores de Basquete</h2>
      <form @submit.prevent="addPlayer" class="player-form">
        <div class="form-group">
          <label for="name">Nome do Jogador:</label>
          <input type="text" v-model="newPlayer.name" id="name" required />
        </div>
  
        <div class="form-group">
          <label for="number">Número da Camisa:</label>
          <input type="number" v-model="newPlayer.number" id="number" required />
        </div>
  
        <div class="form-group">
          <label for="team">Time:</label>
          <input type="text" v-model="newPlayer.team" id="team" required />
        </div>
  
        <button type="submit" class="submit-btn">Cadastrar Jogador</button>
      </form>
  
      <ul class="player-list">
        <li v-for="(player, index) in players" :key="index" class="player-item">
          <span>{{ player.name }} - Camisa {{ player.number }} - Time: {{ player.team }}</span>
          <button @click="deletePlayer(index)" class="delete-btn">Deletar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newPlayer: {
          name: "",
          number: "",
          team: ""
        },
        players: []
      };
    },
    methods: {
      addPlayer() {
        if (this.newPlayer.name && this.newPlayer.number && this.newPlayer.team) {
          this.players.push({ ...this.newPlayer });
          this.newPlayer.name = "";
          this.newPlayer.number = "";
          this.newPlayer.team = "";
        }
      },
      deletePlayer(index) {
        this.players.splice(index, 1);
      }
    }
  };
  </script>
  
  <style scoped>
  .basketball-container {
    max-width: 500px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f0f4f8;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  h2 {
    color: #333;
    margin-bottom: 20px;
    font-family: 'Arial', sans-serif;
  }
  
  .player-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    font-family: 'Arial', sans-serif;
    color: #444;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  input:focus {
    outline: none;
    border-color: #0056b3;
    box-shadow: 0 0 8px rgba(0, 86, 179, 0.2);
  }
  
  .submit-btn {
    background-color: #0056b3;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: 'Arial', sans-serif;
  }
  
  .submit-btn:hover {
    background-color: #004494;
  }
  
  .player-list {
    list-style: none;
    padding: 0;
    margin-top: 20px;
  }
  
  .player-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
  
  .player-item span {
    font-family: 'Arial', sans-serif;
    color: #333;
  }
  
  .delete-btn {
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .delete-btn:hover {
    background-color: #c0392b;
  }
  </style>
  