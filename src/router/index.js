import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

import UserTemplateView from '@/views/user/TemplateView.vue'
import UserIndexView from '@/views/user/IndexView.vue'
import UserViewView from '@/views/user/ViewView.vue'

import PostTemplateView from '@/views/user/TemplateView.vue'
import PostIndexView from '@/views/post/IndexView.vue'
import PostCreateView from '@/views/post/CreateView.vue'
import PostViewView from '@/views/post/ViewView.vue'
import PostUpdateView from '@/views/post/UpdateView.vue'

import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeLink',
    component: HomeView,
  },
  {
    path: '/user',
    name: 'UserTemplateLink',
    component: UserTemplateView,
    children: [
      {
        path: 'index',
        name: 'UserIndexLink',
        component: UserIndexView,
      },
      {
        path: 'view/:id',
        name: 'UserViewLink',
        component: UserViewView,
      },
    ],
  },
  {
    path: '/post',
    name: 'PostTemplateLink',
    component: PostTemplateView,
    children: [
      {
        path: 'index',
        name: 'PostIndexLink',
        component: PostIndexView,
      },
      {
        path: 'create',
        name: 'PostCreateLink',
        component: PostCreateView,
      },
      {
        path: 'view/:id',
        name: 'PostViewLink',
        component: PostViewView,
      },
      {
        path: 'update/:id',
        name: 'PostUpdateLink',
        component: PostUpdateView,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundLink',
    component: NotFoundView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
