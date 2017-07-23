import App from '../App'

export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        redirect: '/login'
      },
      {
        path: '/login',
        name: 'login',
        component: resolve => require(['../page/login'], resolve) //懒加载
      },
      {
        path: '/register',
        name: 'register',
        component: resolve => require(['../page/register'], resolve),
        meta: { auth: false },
      },
      {
        path: '/home',
        name: 'home',
        component: resolve => require(['../page/home'], resolve),
        meta: { auth: false },
      },
      {
        path: '/pageone',
        name: 'pageone',
        component: resolve => require(['../page/pageone'], resolve),
        meta: { auth: false },
      },
      {
        path: '/pagetwo',
        name: 'pagetwo',
        component: resolve => require(['../page/pagetwo'], resolve),
        meta: { auth: false },
      },
      {
        path: '/pagethree',
        name: 'pagethree',
        component: resolve => require(['../page/pagethree'], resolve),
        meta: { auth: false },
      },
      {
        path: '/para/:id',
        name: 'para',
        component: resolve => require(['../page/para'], resolve),
        meta: { auth: false },
      },
      {
        path: '*',
        name: 'NotFound',
        component: resolve => require(['../page/NotFound'], resolve)
      }
    ]
  }
]


