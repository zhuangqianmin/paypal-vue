import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () =>
        import('@/views/home/myShop.vue')
    },
    {
      path: '/app',
      component: () =>
        import('@/views/home/myShopApp.vue')
    },
    {
      path: '/paypal/success',
      component: () =>
        import('@/views/home/paySuccess.vue')
    },
    {
      path: '/paypal/cancel',
      component: () =>
        import('@/views/home/payError.vue')
    }
  ]
});
