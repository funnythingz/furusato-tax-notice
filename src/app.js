import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HeaderVue from 'components/Header.vue'
import FooterVue from 'components/Footer.vue'
import HomeVue from 'components/Home.vue'
import AboutVue from 'components/About.vue'

Vue.component('header-view', HeaderVue);
Vue.component('footer-view', FooterVue);

const router = new VueRouter({
    routes: [
        { path: '/', name: 'root', component: HomeVue },
        { path: '/about', name: 'about', component: AboutVue }
    ]
})

const app = new Vue({router: router}).$mount('#app')
