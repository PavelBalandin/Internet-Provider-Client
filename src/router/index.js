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
        component: () => import('../views/tariffs/Tariffs.vue')
    },
    {
        path: '/services',
        name: 'services',
        meta: {layout: 'main'},
        component: () => import('../views/service/Services.vue')
    },
    {
        path: '/user',
        name: 'user',
        meta: {layout: 'main', roles: ['ROLE_USER']},
        component: () => import('../views/user/User.vue'),
        children: [
            {
                path: 'order',
                name: 'order',
                meta: {layout: 'main', roles: ['ROLE_USER']},
                component: () => import('../views/user/order/Order.vue')
            },
            {
                path: 'tariffs',
                name: 'user-tariffs',
                meta: {layout: 'main', roles: ['ROLE_USER']},
                component: () => import('../views/user/Tariffs.vue')
            },
            {
                path: 'payments',
                name: 'payments',
                meta: {layout: 'main', roles: ['ROLE_USER']},
                component: () => import('../views/user/payment/Payments.vue')
            }
        ]
    },
    {
        path: '/admin',
        name: 'admin',
        meta: {layout: 'main', roles: ['ROLE_ADMIN']},
        component: () => import('../views/admin/Admin.vue'),
        children: [
            {
                path: 'registration',
                name: 'registration',
                meta: {layout: 'main', roles: ['ROLE_ADMIN']},
                component: () => import('../views/admin/RegistrationUser.vue')
            },
            {
                path: 'update',
                name: 'update',
                meta: {layout: 'main', roles: ['ROLE_ADMIN']},
                component: () => import('../views/admin/UpdateUser.vue')
            },
            {
                path: 'edit',
                name: 'edit',
                meta: {layout: 'main', roles: ['ROLE_ADMIN']},
                component: () => import('../views/admin/EditTariffs')
            },
        ]
    },
    {
        path: '/permission-denied',
        name: 'permission-denied',
        meta: {layout: 'empty'},
        component: () => import('../views/PermissionDenied.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'permission-denied',
        meta: {layout: 'empty'},
        component: () => import('../views/NotFound.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.name === 'login' && JSON.parse(localStorage.getItem('user'))) {
        return next('/permission-denied')
    }

    if (!to.meta.roles) {
        return next();
    }

    if (!JSON.parse(localStorage.getItem('user'))) {
        return next('/login')
    }

    if (!to.meta.roles.includes(JSON.parse(localStorage.getItem('user')).roleList[0].name)) {
        return next('/permission-denied')
    }
    return next();
})

export default router
