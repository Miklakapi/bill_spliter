import { createApp } from "vue";
import 'bootstrap/dist/css/bootstrap.css';

import App from "./App.vue";
import AddButton from './components/AddButton.vue';

const app = createApp(App);

app.component('addButton', AddButton);

app.mount('#app');