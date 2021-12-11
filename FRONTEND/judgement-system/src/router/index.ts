import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/home/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'admin/',
        name: 'Admin',
        children: [
          {
            path: 'setting',
            name: 'Admin Setting',
            component: () => import('@/views/ADMIN/Setting.vue'),
          },
        ],
      },
      {
        path: 'judge/',
        name: 'Judges',
        children: [
          {
            path: 'point',
            name: 'Judges Point',
            component: () => import('@/views/JUDGES/Point.vue'),
          },
        ],
      },
      {
        path: 'user/',
        name: 'User',
        children: [
          {
            path: 'registration',
            name: 'User Registration',
            component: () => import('@/views/USER/Registration.vue'),
          },
          {
            path: 'dashboard',
            name: 'User Dashboard',
            component: () => import('@/views/USER/Dashboard.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/',
    name: 'App',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/App.vue'),
  },
  {
    path: '/schedule',
    name: 'Schedule',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/Schedule.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
