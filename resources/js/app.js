import Vue from 'vue';
import Index from './Index';

import store from './store';
import router from './router';

import VeeValidate from 'vee-validate';
import BootstrapVue from 'bootstrap-vue';

import ApiService from './api/api.service';


Vue.use(VeeValidate);
Vue.use(BootstrapVue);


ApiService.init();


const app = new Vue({
    router,
    store,
    render: h => h(Index)
}).$mount('#app');
