import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import Translate from '../page/Translate.vue'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path:'/home',
        component: HelloWorld
    },
    {
        path:'/translate',
        component: Translate
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;