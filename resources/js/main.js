import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Datepicker from 'vuejs-datepicker';
import { id } from 'vuejs-datepicker/dist/locale';
import Notifications from 'vue-notification';
import Sweetalert from 'vue-sweetalert2';
import Loading from './components/Loading';
import Select2 from './components/Select';
import App from './App';
import router from './router';
import store from './store';

require('./bootstrap');

Vue.use(BootstrapVue);
Vue.use(Notifications);
Vue.use(Sweetalert);

Vue.component('b-loading', Loading);
Vue.component('b-select-2', Select2);
Vue.component('b-datepicker', {
  extends: Datepicker,
  props: {
    bootstrapStyling: {
      type: Boolean,
      default: true
    },
    language: {
      type: Object,
      default: () => id
    }
  }
});

new Vue({
  el: '#app',
  router: router,
  store: store,
  components: { App },
  template: '<App/>'
});
