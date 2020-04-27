import Vue from 'vue';
import VueRouter from 'vue-router';
import Store from '../store';
Vue.use(VueRouter);

import Home from '../components/layouts/Home';
import Admin from '../components/layouts/Admin';
import Login from '../components/layouts/Login';

const routes = [
    {
        component: Home,
        name: 'home',
        path: '/'
    },
    {
        component: Admin,
        name: 'admin',
        path: '/admin',
        beforeEnter: guard
    },
    {
        component: Login,
        name: 'login',
        path: '/login'
    }
];

export default new VueRouter({
    mode: 'history',
    routes
});

function guard(from, to, next) {
    if (Store.getters.is_user_authenticated === true){
      next()
    }  
    else{
      next('/login')
    }  
}