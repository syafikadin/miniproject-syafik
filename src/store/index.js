import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    indexNumber: []
  },
  getters: {
  },
  mutations: {
    setIndexNumber(state, payload){
      state.indexNumber = payload
    },
  },
  actions: {
    changeIndexNumber(store, payload){
      store.commit("setIndexNumber", payload)
    },
  },
  modules: {
  }
})
