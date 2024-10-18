// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { validToken } from '@/config/token'
const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/LoginScreen.vue'),
    name: 'Login',
    meta: { requiresAuth: false },
  },
  {
    path: '/',
    component: () => import('@/layouts/default/AppMenu.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/HomeScreen.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  let userData = JSON.parse(localStorage.getItem('userData'));
  let user = localStorage.getItem('user');
  let token = localStorage.getItem('token');
  let loggedout = (!userData || !user || !token || !validToken());

  if (!loggedout) {
    // return next({ name: 'Home' });
    next()
  }

  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (loggedout) {
      localStorage.removeItem('userData');
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      return next({ name: 'Login' });
    }
  }

  next();
})

export default router
