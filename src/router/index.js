import { createRouter, createWebHistory } from 'vue-router'
import StepOneForm from '@/pages/StepOneForm.vue'
import StepTwoForm from '@/pages/StepTwoForm.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/form-step-1',},
    { path: '/form-step-1', component: StepOneForm},
    { path: '/form-step-2', component: StepTwoForm}
    
  ],
})

export default router
