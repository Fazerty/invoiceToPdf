import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faChild, faCircle, faArchive, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(
  faCoffee,
  faChild,
  faCircle,
  faArchive,
  faComment,
  faTwitter,
  faCaretDown,
  faCaretUp
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
