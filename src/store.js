import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    isGuidline: false
  },
  mutations: {
    updateUser (state, value) {
      state.user = value
    },
    resetUser (state) {
      state.user = null
    },
    enterGuidline (state) {
      state.isGuidline = true
    },
    leaveGuidline (state) {
      state.isGuidline = false
    }
  },
  actions: {
  }
})
