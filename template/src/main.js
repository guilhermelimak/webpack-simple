import Vue from 'vue';
import VueRouter from 'vue-router';

import { configRouter }from './router-config';
import { sync } from 'vuex-router-sync';
import store from './store';

import App from './App.vue';

Vue.use(VueRouter);

export const router = new VueRouter();
configRouter(router);

sync(store, router);

router.start(App, 'body');
