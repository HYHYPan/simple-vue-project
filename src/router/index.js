import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/pages/Login';
import Dashboard from '@/components/Dashboard';
import Products from '@/components/pages/products';
import CustomerOrders from '@/components/pages/CustomerOrders';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'login',
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    //   meta: { requiresAuth: true },
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children:[
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/',
      name: 'DashboardCustomer',
      component: Dashboard,
      children:[
        {
          path: 'customer_order',
          name: 'CustomerOrders',
          component: CustomerOrders,
        },
      ],
    },
    
  ]
})
