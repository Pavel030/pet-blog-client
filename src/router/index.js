import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/post',
        component: () => import('@/components/Posts.vue'),
        children: [
            {
                path: ':id',
                component: () => import('@/components/PostDetail.vue'),
                props: true,
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    strict: true,
    //linkActiveClass: 'h-link-active'
});

export default router;