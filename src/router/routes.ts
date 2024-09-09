import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'HomePage',
        component: () => import('pages/HomePage.vue'),
      },
      {
        path: '/projects',
        name: 'Projects',
        component: () => import('pages/ProjectsPage.vue'),
      },
      {
        path: '/projects/:id',
        name: 'Project',
        component: () => import('pages/ProjectsPage/ProjectPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
