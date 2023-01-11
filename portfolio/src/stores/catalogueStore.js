import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want, 
// but it's best to use the name of the store and surround it with `use` 
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application





//------------------------------------------

export const useCatalogueStore = defineStore('catalogueStore', {


  //data

  state: () => ({ 
    visorSatus:true,
    count: 0,
     name: 'Jan',
      ShowCart:true,
      catalogue:
      [
        
        {id:1,name:'armand',price:1750,w:60,h:45,tech:'painting',src:require("@/assets/paint/isolated.png")},
        {id:2,name:'fransua',price:1500,w:20,h:55,tech:'drawing',src:require("@/assets/paint/landscape327.png")},
        {id:3,name:'morisse',price:7500,w:200,h:145,tech:'psinting',src:'../assets/paint/IMG_7372-1.JPG'}
      ]
    
    }),

  //computed
  getters: {
    doubleCount: (state) => state.count * 2,

  },


  //methods
  actions: {
    increment() {
      this.count++
    },
 
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
