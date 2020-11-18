import Vue from 'vue';
import VueRouter from 'vue-router';
import FlowChartTree from '@/views/FlowChartTree.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'FlowChartTree',
    component: FlowChartTree,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
