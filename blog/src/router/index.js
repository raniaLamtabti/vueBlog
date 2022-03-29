import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    meta: {
        title: "Home"
    },
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router