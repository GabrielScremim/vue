import { createRouter, createWebHistory } from 'vue-router'; // Importa as funções necessárias para criar o roteador
import HomeView from '../views/HomeView.vue'; // Importa o componente 'HomeView' que será renderizado na rota '/'
import TeamsView from '../views/TeamsView.vue'; // Importa o componente 'TeamsView' que será renderizado na rota '/teams'
import PlayersView from '../views/PlayersView.vue'; // Importa o componente 'PlayersView' que será renderizado na rota '/players'

// Definição das rotas
const routes = [
  { path: '/', name: 'Home', component: HomeView }, // Define a rota para a página inicial. Quando o caminho for '/', o componente 'HomeView' será renderizado.
  { path: '/teams', name: 'Teams', component: TeamsView }, // Define a rota para a página de times. Quando o caminho for '/teams', o componente 'TeamsView' será renderizado.
  { path: '/players', name: 'Players', component: PlayersView }, // Define a rota para a página de jogadores. Quando o caminho for '/players', o componente 'PlayersView' será renderizado.
];

// Cria o roteador com o histórico do navegador e as rotas definidas acima
const router = createRouter({
  history: createWebHistory(), // Define o tipo de histórico como 'HTML5 history mode' (sem hash na URL)
  routes, // Passa as rotas definidas anteriormente
});

export default router; // Exporta o roteador para ser usado no arquivo principal (geralmente 'main.js' ou 'main.ts')
