import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want, 
// but it's best to use the name of the store and surround it with `use` 
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application



export const useAlertsStore = defineStore('alertStore', {
  // other options...
})

//------------------------------------------

export const useCounterStore = defineStore('counter', {


  //data

  state: () => ({ count: 0, name: 'Eduardo', ShowCart:true }),

  //computed
  getters: {
    doubleCount: (state) => state.count * 2,

  },


  //methods
  actions: {
    increment() {
      this.count++
    },
    alerter(){

    }
  },
})

//------------------------------------------
//In Setup Stores:

//ref()s become state properties
//computed()s become getters
//function()s become actions

/*
export const useCounterStore2 = defineStore('counter2', () => {
  const count2 = ref(0)
  const name = ref('Pepeluís')
  const doubleCount = computed(() => count2.value * 2)
  function increment() {
    count2.value++
  }

  return { count2, name, doubleCount, increment }
})
*/
//------------------------------------------






//------------------------------------------
