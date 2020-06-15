import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { formatDistance, subDays } from 'date-fns'
import * as firebase from 'firebase'
var VueScrollTo = require('vue-scrollto');
 
Vue.use(VueScrollTo)
Vue.component(formatDistance)
Vue.component(subDays)

const firebaseConfig = {
  apiKey: "AIzaSyBH0VgZzlSL94cELfyJExSaDT2UtCbDPGA",
  authDomain: "ucla-18144.firebaseapp.com",
  databaseURL: "https://ucla-18144.firebaseio.com",
  projectId: "ucla-18144",
  storageBucket: "ucla-18144.appspot.com",
  messagingSenderId: "916960430922",
  appId: "1:916960430922:web:670719e6c563100c910fb3"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

library.add(faCaretRight)
library.add(faCaretLeft)


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
