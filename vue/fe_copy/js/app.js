import '../styles/main.scss';
import Vue from "vue";
import app from "../views/index.vue";

const account = new Vue({
    render: createElement => createElement(app)
}).$mount('#app')