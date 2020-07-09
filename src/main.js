import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import SimpleVueValidation from 'simple-vue-validator';
import firebase from "firebase";
import lodash from "lodash";

Vue.prototype._ = lodash;

require("firebase/firestore");

const Validator = SimpleVueValidation.Validator;

Vue.use(SimpleVueValidation);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
