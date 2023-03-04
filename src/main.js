import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import WaveUI from  'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import router from './router/router'


const app = createApp(App)

app.use(router)
app.mount('#app')
