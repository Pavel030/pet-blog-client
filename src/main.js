import '@/assets/main.sass'
import router from "@/router";
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia()).use(router).mount('#app')