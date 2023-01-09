import { createStore } from 'vuex'

export default createStore({
  state: {
    FullCat:[]
  },
  getters: {
  },
  mutations: {
    fillCat(state,Fill){
      state.FullCat = Fill
    }
  },
  actions: {

  },
  modules: {
  }
})
