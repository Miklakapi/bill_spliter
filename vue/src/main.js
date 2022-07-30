import { createApp } from "vue";
import 'bootstrap/dist/css/bootstrap.css';

import App from "./App.vue";
import ButtonElement from './components/ButtonElement.vue';

const app = createApp(App);

app.component('buttonElement', ButtonElement);

app.mount('#app');