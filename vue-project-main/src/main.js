import { createApp } from 'vue'; // Importa a função 'createApp' do Vue para criar a instância da aplicação
import App from './App.vue'; // Importa o componente raiz da aplicação (App.vue)
import router from './router'; // Importa o arquivo de configuração do Vue Router (responsável pela navegação)
import store from './store'; // Importa o Vuex store (responsável pelo gerenciamento do estado global da aplicação)

createApp(App) // Cria a instância da aplicação a partir do componente raiz 'App.vue'
  .use(router) // Registra o Vue Router na instância da aplicação
  .use(store) // Registra o Vuex store na instância da aplicação
  .mount('#app'); // Monta a aplicação na tag HTML com o id 'app'
