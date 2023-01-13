<template>
    <div>
    
    <div class="thingreen template">

   

    <div class="container">    <div> Masterzone </div></div>
  
    </div >

    <div class="container m-2">
       <button 
    class="buttonLinker"
    @click="showAdder=!showAdder">ADD</button>
    <button 
    class="buttonLinker"
    @click="showDel=!showDel">UP</button>
    <button 
    class="buttonLinker"
    @click="showAdder=!showAdder">MOD</button>
    <button 
    class="buttonLinker" style="background-color: red;color:white"
    @click="showAdder=!showAdder">DEL</button>



    </div>

     <div class="thingreen template mt-4 row" 
    v-if="showAdder">
    <div class="row">    
    <div class="container">    ADD to Catalogue    
    <button class="btn  btn-sm btn-success" @click="  addArtwork()">ADD</button></div>
</div>
<div class="row thingreen m-4 w-25 d-flex flex-wrap">   <div class="container">
   
   <p>paint <input type="radio" id="newId"/></p>
   <p>draw <input type="radio" id="newId"/></p>
   <p>music <input type="radio" id="newId"/></p>
   <p>anim <input type="radio" id="newId"/></p>
   
   
   
   
   </div> </div>
    

    <div class="col-4 ">
    <br />
   id: <input id="newId"/>
   <br />
   name: <input id="newName"/>
 
   

   <br />

    </div>
    <div class="col-4">
        <br />
   w: <input type="number" id="newId"/>
   <br />
   h: <input type="number"  id="newName"/>
   <br />
   tech: <input id="newId"/>
   <br /></div>
    </div>

    <hr />

    <div class="thingreen template mt-4" 
    v-if="showDel">
    
    
    Masterzone
    <input id="newId"/>
    <button @click="  addArtwork()">DEL</button>
    
    </div>
    
    
    
    </div>

 

  
</template>

<script>

import { Artwork } from '../stores/ArtworkClass';


    export default {
        name:'MasterZone',
        data(){
            return{
                artwork:{},showAdder:true,showDel:true
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
input{
    margin:5px;
    display: flex;

width:150px;


}

.buttonLinker{
    background-color: rgb(44, 24, 45);
    border:dashed 1px rgb(255, 0, 106);
    justify-items: center;
 flex-wrap: no-wrap;
 width:100px;
    margin:2em;
    border-radius: 2em;
    box-shadow: 1px 1px 10px hotpink;
    color:hotpink;
}
</style>