/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import '@/plugins/axios'

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Routes
import router from './router'

// Vuex
// import store from './store/store'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.use(router)
app.mount('#app')
