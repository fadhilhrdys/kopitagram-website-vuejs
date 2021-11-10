import Vue from "vue";
import App from "./App.vue";
// import animate on scroll
import AOS from "aos";
import "aos/dist/aos.css";
import * as VueGoogleMaps from 'vue2-google-maps';
import router from "./router";

Vue.config.productionTip = false;
AOS.init();
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBqhbyOfJA7KjYwr2PfF_E9XPMXoKFqqhw',
  }
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
