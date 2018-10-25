import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import { getCookie } from '../utils/cookie';
import Login from '../components/Login';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard/Dashboard';
import Project from '../components/Project/Project';
import Testreport from '../components/Testreport/Testreport';
import Api from '../components/Api/Api';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Home,
      meta: { guarded: true },
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
          meta: { guarded: true }
        },
        {
          path: 'project',
          name: 'Project',
          component: Project,
          meta: { guarded: true }
        },
        {
          path: 'report',
          name: 'Test Report',
          component: Testreport,
          meta: { guarded: true }
        },
        {
          path: 'api',
          name: 'API',
          component: Api,
          meta: { guarded: true }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {}
    },
    { path: '*', redirect: '/dashboard' }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.guarded && !getCookie()) {
    return next({ name: 'login' });
  }
  return next();
});

export default router;
