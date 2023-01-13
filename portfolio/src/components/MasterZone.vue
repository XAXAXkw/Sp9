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
    <div class="container ">    ADD to Catalogue    
    <button class="btn  btn-sm btn-success" @click="  addArtwork()">ADD</button></div>
</div>
<div class="row   thingreen m-4 w-25 d-flex flex-wrap">   <div class="container">
   
   <div class="row w-100 ">
   <div class="col-2">  </div>
   <div class="col-10"></div>
  </div>
  <p>paint <input type="radio" id="newId"/></p>
   <p>draw <input type="radio" id="newId"/></p>
   <p>music <input type="radio" id="newId"/></p>
   <p>anim <input type="radio" id="newId"/></p>
   
   
   
   
   </div> </div>
    

    <div class="col-4 micrus">
 
   <br />
   name: <input id="newName"/>
 
   

   <br />

    </div>
    <div class="col-4 micrus">
        <br />
   w: <input type="number" id="newW"/>
   <br />
   h: <input type="number"  id="newH"/>
   <br />
   tech: <input id="newTech"/>
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

import { useCatalogueStore } from '../stores/catalogueStore';
const masterStore = useCatalogueStore()

class Artwork {
    constructor(id,name='pepe',price=0,w=0,h=0,tech='mixed media',src){
        this.id = id;
        this.name = name;
        this.price = price;
        this.w = w;
        this.h = h;
        this.tech = tech;
        this.src = src;

    }
    get prop() {
        return this._prop;
    }
     
    set prop(prop) {
        this._prop = prop;
    }



    
}


    export default {
        name:'MasterZone',
        data(){
            return{
                artwork:{},showAdder:true,showDel:true,masterStore
            }
        },
        methods:{
            addArtwork(){
                let newId = masterStore.catalogue.length;
         let newName = document.getElementById('newName').value;
         let newW = document.getElementById('newW').value;
         let newH = document.getElementById('newH').value;
         let newTech = document.getElementById('newTech').value;
                let artwork1 = new Artwork(newId,newName,newW,newH,newTech);
                console.log(artwork1);

                masterStore.catalogue.push(artwork1);
                console.log(masterStore.catalogue);
            }
        }

    }
</script>

<style lang="scss" scoped>
input{
    margin:5px;
    align-self: center;
    max-width:max-content;
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