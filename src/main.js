import { createApp } from 'vue'
import { createStore } from 'vuex';
import App from './App.vue'
import store from './store';
import { icons } from './components/icons/index.js';
import { ui } from './components/UI/index.js';
import './assets/main.css';
const app = createApp({
    extends: App
})

// Autoload icon components
Object.keys(icons).forEach(icon => app.component(icon, icons[icon]))

// Autoload UI components
Object.keys(ui).forEach(component => app.component(component, ui[component]))

// Create Vuex store
app.use(createStore(store))

// Mount
app.mount('#app')
