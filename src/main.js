import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueYoutube from "vue-youtube";
import { Plugin } from 'vue-responsive-video-background-player';
import VideoBackground from 'vue-responsive-video-background-player';
import Embed from 'v-video-embed'
 
Vue.component('video-background', VideoBackground);
Vue.use(Plugin);
Vue.use(VueYoutube);
Vue.use(Embed);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  Plugin,
  render: h => h(App)
}).$mount('#app')
