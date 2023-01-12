import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {


    state: () => ({ pssw: 0, name: 'Eduardo'}),

    //computed
    getters: {
      doubleCount: (state) => state.pssw * 2,
  
  
    },
  
  
    //methods
    actions: {
      increment() {
        this.pssw++
      },
   
    },
  })
  
  