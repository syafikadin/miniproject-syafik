import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    indexNumber: [],
    indexCust: []
  },
  getters: {
  },
  mutations: {
    setIndexNumber(state, payload){
      state.indexNumber = payload
    },
    setIndexCust(state,payload){
      state.indexCust = payload
    }
  },
  actions: {
    changeIndexNumber(store, payload){
      store.commit("setIndexNumber", payload)
    },
    changeIndexCust(store, payload){
      store.commit("setIndexCust", payload)
    }
  },
  modules: {
  }
})
