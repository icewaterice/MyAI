import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import WaveUI from  'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import router from './router/router'
import Axios from './requests/axios'


const app = createApp(App)

app.use(router)
app.use(WaveUI, { /* Some Wave UI options */ })
app.use(Axios)
app.mount('#app')
