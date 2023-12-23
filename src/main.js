/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Routes
import router from './router'

// Vuex
import store from './store/store'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.use(router)
app.use(store)
app.mount('#app')
