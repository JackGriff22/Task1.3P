import { createRouter, createWebHistory } from 'vue-router'
import generalInfo from '../views/GeneralInfoView.vue'
import expertise from '../views/ExpertiseView.vue'
import quiz from '../views/QuizView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'generalInfo',
      component: generalInfo
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutMeView.vue')
    },
    {
      path: '/expertise',
      name: 'expertise',
      component: expertise
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: quiz
    }
  ]
})

export default router
