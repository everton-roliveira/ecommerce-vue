import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PageLoading from "@/components/layout/PageLoading";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faFacebook,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCopyright,
  faFacebook,
  faInstagram,
  faPinterest,
  faAngleDoubleLeft,
  faAngleDoubleRight
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.component("PageLoading", PageLoading);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
