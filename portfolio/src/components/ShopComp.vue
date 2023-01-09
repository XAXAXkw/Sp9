<template>
    <div>      <CartComp />
        <div class="container d-flex justify-content-evenly p-1">
      <h6>WORKS for SALE :
     <router-link to="/card"><button class="btn btn-success m-1 ">item 1</button></router-link> 
      <button class="btn btn-success m-1">item 2</button>
      <button class="btn btn-success m-1">item 3</button>
      <button class="btn btn-success m-1">item 4</button></h6>
      </div>
      <ShopCard />

  
    </div>
</template>

<script>
import ShopCard from './ShopCard.vue'
import CartComp from './CartComp.vue'


import catalogueStore from '../stores/catalogueStore'
const store = catalogueStore()

    export default {
        name:'ShopComp',
        data(){
            return{
                store
            }
        },
        components:{
            ShopCard,CartComp
        }
    }
</script>

<style lang="scss" scoped>

</style>