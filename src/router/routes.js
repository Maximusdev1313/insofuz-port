
export const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'order', component: () => import('pages/Order.vue') },
      { path: 'packer', component: () => import('pages/Packer.vue') },
      { path: '/product/:id', component: () => import('pages/ProductDetail.vue') },
      { path: '/user/:id/', name: 'user', component: () => import('pages/WaitRoom.vue') },
      { path: '/category/:id/', component: () => import('pages/ProductsPage.vue') },



    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]


