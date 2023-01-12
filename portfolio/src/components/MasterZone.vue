<template>
    <div>
    
    <div class="thingreen template">

    Masterzone
  
    </div>
    <div class="thingreen template mt-4">
    
    Masterzone
    <input id="newId"/>
    <button @click="  addArtwork()">ADD</button>
    
    </div>
    
    
    
    </div>

 

  
</template>

<script>

import { Artwork } from '../stores/ArtworkClass';


    export default {
        name:'MasterZone',
        data(){
            return{
                artwork:{}
            }
        },
        methods:{
            addArtwork(){
         
                this.artwork = new Artwork(22,'name',0,10,10,'tech','src');
                console.log(this.artwork)
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>