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
    getCat:
    async function( { commit }){
      const data = await fetch('@/assets/FullCat.json');
      this.FullCat = await data.json();
      commit('fillCat',this.FullCat);

    }
  },
  modules: {
  }
})
