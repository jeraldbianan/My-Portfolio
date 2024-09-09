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
        meta: {
          title: 'Home Page - Jerald Bianan',
          description: 'My Website Homepage, showcasing projects and more.',
        },
      },
      {
        path: '/projects',
        name: 'Projects',
        component: () => import('pages/ProjectsPage.vue'),
        meta: {
          title: 'Projects - Jerald Bianan',
          description:
            'Browse through my list of projects to see what I am working on.',
        },
      },
      {
        path: '/projects/:id',
        name: 'Project',
        component: () => import('pages/ProjectsPage/ProjectPage.vue'),
        meta: {
          title: 'Project Details - Jerald Bianan',
          description: 'Detailed information about the selected project.',
        },
      },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
    meta: {
      title: 'Page Not Found - Jerald Bianan',
      description: 'This page does not exist.',
    },
  },
];

export default routes;
