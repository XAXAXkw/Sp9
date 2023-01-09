import { defineStore } from 'pinia'




export const  catalogueStore = defineStore(
    'product', {

        state:()=>({

                products:[1,2,3]


        }),
        actions:{

            addProduct(p){
                this.products.push(p)
            }
        },


        getters:{
            productCount(state){
                return state.products.length
            }
        }

    }


)