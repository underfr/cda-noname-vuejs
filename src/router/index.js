import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', alias: '/home', name: 'Home', component: () => import('../views/Home.vue') },
        { path: '/about', name: 'About', component: () => import('../views/About.vue') },
        { path: '/contact', name: 'Contact', component: () => import('../views/Contact.vue') },
        { path: '/methods', name: 'Methods', component: () => import('../views/exercices/Methods.vue') },
        { path: '/binds', name: 'Binds', component: () => import('../views/exercices/User.vue') },
        { path: '/count', name: 'Count', component: () => import('../views/exercices/Count.vue') },
        { path: '/input', name: 'Input', component: () => import('../views/exercices/Input.vue') },
    ],
});

export default router;