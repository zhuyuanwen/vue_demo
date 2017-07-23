import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import ElementUI from 'element-ui'
import $ from 'jquery'
import axios from 'axios'
import './styles/utils'
import store from './store/index.js'
Vue.config.productionTip = false;

import domain from './assets/js/domain'
global.domain = domain;

Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({
    // mode: 'history',
    // base: __dirname,
    routes
});

router.beforeEach(({meta, path}, from, next) => {
    let { auth = true } = meta;

    console.log(store.state.login.token);

    let isLogin = Boolean(store.state.login.token); //true用户已登录， false用户未登录
    if (auth && !isLogin && path !== '/login') {
        return next({ name: 'login' })
    }
    if(isLogin && (path === '/login' || path === '/register')){
        return next({ name: 'drafts' })
    }
    next()
});

new Vue({
    router,
    store,
}).$mount('#app');



