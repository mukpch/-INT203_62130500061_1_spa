import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Hover from './components/Hover.vue'

const app = createApp(App)
app.component('hover-click',Hover)
app.use(router).mount('#app')
