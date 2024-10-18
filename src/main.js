/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import moment from 'moment/min/moment-with-locales'
moment.locale('pt-br')
// Components
import App from './App.vue'
import VueFileUploader from '@dafcoe/vue-file-uploader'
import '@dafcoe/vue-file-uploader/style.css'

// Composables
import { createApp } from 'vue'

const app = createApp(App)
app.use(VueFileUploader)
registerPlugins(app)

app.mount('#app')
