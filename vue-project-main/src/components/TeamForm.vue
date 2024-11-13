  <template>
  <form @submit.prevent="submitTeam">
    <input v-model="teamName" placeholder="Nome do Time" required />
    <input v-model="coachName" placeholder="Nome do Técnico" required />
    <button type="submit">Cadastrar Time</button>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
  setup(_, { emit }) {
    const teamName = ref('');
    const coachName = ref('');

    const submitTeam = () => {
      emit('add-team', { name: teamName.value, coach: coachName.value, players: [] });
      teamName.value = '';
      coachName.value = '';
    };

    return { teamName, coachName, submitTeam };
  },
};
</script>
