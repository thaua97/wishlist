import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import styles from './styles/index.scss';

import Heart from 'vue-material-design-icons/Heart.vue';
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue';
import Phone from 'vue-material-design-icons/Phone.vue';
import MapMarker from 'vue-material-design-icons/MapMarker.vue';

Vue.config.productionTip = false

Vue.component('heart', Heart);
Vue.component('heart-outline', HeartOutline);
Vue.component('phone-icon', Phone);
Vue.component('map-marker', MapMarker);

new Vue({
  styles,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
