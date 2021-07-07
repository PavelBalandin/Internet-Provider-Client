import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        meta: {layout: 'empty'},
        component: () => import('../views/Login.vue')
    },
    {
        path: '/',
        name: 'home',
        meta: {layout: 'main'},
        component: () => import('../views/Home.vue')
    },
    {
        path: '/tariffs',
        name: 'tariffs',
        meta: {layout: 'main'},
        component: () => import('../views/Tariffs.vue')
    },
    {
        path: '/services',
        name: 'services',
        meta: {layout: 'main'},
        component: () => import('../views/Services.vue')
    },
    {
        path: '/user',
        name: 'user',
        meta: {layout: 'main'},
        component: () => import('../views/user/User.vue'),
        children: [
            {
                path: 'order',
                name: 'order',
                meta: {layout: 'main'},
                component: () => import('../views/user/Order.vue')
            },
            {
                path: 'tariffs',
                name: 'user-tariffs',
                meta: {layout: 'main'},
                component: () => import('../views/user/Tariffs.vue')
            },
            {
                path: 'payments',
                name: 'payments',
                meta: {layout: 'main'},
                component: () => import('../views/user/payment/Payments.vue')
            }
        ]
    },
    {
        path: '/admin',
        name: 'admin',
        meta: {layout: 'main'},
        component: () => import('../views/admin/Admin.vue'),
        children: [
            {
                path: 'registration',
                name: 'registration',
                meta: {layout: 'main'},
                component: () => import('../views/admin/RegistrationUser.vue')
            },
            {
                path: 'update',
                name: 'update',
                meta: {layout: 'main'},
                component: () => import('../views/admin/UpdateUser.vue')
            },
            {
                path: 'edit',
                name: 'edit',
                meta: {layout: 'main'},
                component: () => import('../views/admin/EditTariffs')
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
