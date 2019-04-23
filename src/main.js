import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

new Vue({
  router, 
  render: h => h(App)
}).$mount('#app')


import Vuelidate from "vuelidate";

import FormComponent from './components/FormComponent';

Vue.use(Vuelidate);

new Vue({
    
    render: h => h(FormComponent)
});
