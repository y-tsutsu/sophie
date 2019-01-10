import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    updateUser (state, value) {
      state.user = value
    },
    resetUser (state) {
      state.user = null
    }
  },
  actions: {

  }
})
