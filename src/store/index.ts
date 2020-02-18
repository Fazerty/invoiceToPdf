import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({

  state: {
    print: false,
    theme: localStorage.getItem('theme') ? localStorage.getItem('theme'): 'theme-light'
  },

  mutations: {
    printOn(state) {
      state.print = true
    },
    printOff(state) {
      state.print = false
    },
    /*
     * Switch the theme between 'theme-dark' and 'theme-light'
     * Store the theme chosen in the browser
     */
    switchTheme(state) {
      state.theme = (state.theme === 'theme-light') ? 'theme-dark' : 'theme-light'
      localStorage.setItem('theme', state.theme)
    }
  },

  getters: {
    print: state => {
      return state.print
    },
    theme: state => {
      return state.theme
    }
  },
  actions: {
  },
  modules: {
  }
})
