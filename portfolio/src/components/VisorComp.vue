<template>
    <div>
visor comp {{ this.$route.params.id }} - 

<router-link to="/card">
    <img v-if=visorStatus 
  @click="visorStatus=false"
    src= " this.store.catalogue[0].src " />

 </router-link>


</div>

</template>

<script>

import  useCatalogueStore  from '../stores/catalogueStore';
const store= useCatalogueStore();

    export default {
        name:'VisorComp',
        
        data(){
            return{
visorStatus:true,store
      }
        },
     
    }
</script>

<style lang="scss" >
.wrapped{
    background-color: rgba(9, 19, 15, 0.958);
    min-width: 800px;
    min-height: 1000em !important;
    margin:0;

    position:absolute;
    z-index:1;


}
.topper{
    position:absolute;
    z-index:100;
}


</style>