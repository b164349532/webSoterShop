import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/Register.vue')
  },
  {
    path: '/factory/:id',
    name: 'Factory',
    component: () => import('../views/facroty/Factory.vue')
  },
  {
    path: '/products',
    name: 'ProductList',
    component: () => import('../views/product/ProductList.vue')
  },
  {
    path: '/products/product/:id',
    name: 'Product',
    component: () => import('../views/product/Product.vue')
  },
  {
    path: '/cart/',
    name: 'Cart',
    component: () => import('../views/cart/Cart.vue')
  },
  {
    path: '/orderconfirmation',
    name: 'Orderconfirmation',
    component: () => import('../views/order/OrderConfirmation.vue')
  },
  {
    path: '/build',
    name: 'BuildAddress',
    component: () => import('../views/address/buildAddress.vue')
  },
  {
    path: '/manageAddress',
    name: 'ManageAddress',
    component: () => import('../views/address/manageAddress.vue')
  },
  {
    path: '/update/:id',
    name: 'UpdateAddress',
    component: () => import('../views/address/updateAddress.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/mine/Mine.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.path === '/cart' || to.path === '/mine') {
    if (!token) return next('/login')
  }
  next()
})
export default router
