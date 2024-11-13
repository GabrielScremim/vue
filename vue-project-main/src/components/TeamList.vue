<template>
  <div>
    <ul v-for="(team, index) in teams" :key="index">
      <li>
        <h3>{{ team.name }} (Técnico: {{ team.coach }})</h3>
        <ul>
          <li v-for="(player, idx) in team.players" :key="idx">
            {{ player.name }} - {{ player.position }} (#{{ player.number }})
          </li>
        </ul>
        <button @click="deleteTeam(index)">Deletar Time</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['teams'],
  methods: {
    deleteTeam(index) {
      this.$emit('delete-team', index);
    },
  },
};
</script>
