import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowDown);

// 4) Création de l’app Vue + enregistrement global du composant font-awesome
const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
