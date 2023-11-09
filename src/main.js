import {createRouter, createWebHistory} from 'vue-router'
import App from "@/App.vue";

import './assets/main.css'
import 'bootstrap/dist/js/bootstrap.min.js';

import {createApp} from 'vue'

//Routes array example {path: '/', component: ComponentName}
const routes = [
    // {path: '/', component: ComponentName},
    // {path: '/', component: ComponentName},
    // {path: '/', component: ComponentName},
    // {path: '/', component: ComponentName},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
const app = createApp(App)
app.use(router).mount('#app')