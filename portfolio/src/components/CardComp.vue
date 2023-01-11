<template>
  <div class="template">
    <div class="grid-bg ba-grid anim p-4">
    <div class="row d-flex m-auto">  <p> ITEM PRICE: {{ store.catalogue[store2.count].price }}$ </p>  </div>

  <div class="inner"></div>
</div>
    <div class="container thingreen m-auto w-75 w-md-50 w-lg-50 d-flexbox">
      <p style="color: rgb(42, 74, 63);">Artwork     {{ store.catalogue[store2.count].id}}</p>

      <div class="row m-2"> <h1>32{{ store2.count }}</h1>
      Title: '{{ store.catalogue[store2.count].name }}'</div>
     
      <hr />
      
      <div class="container ">
      <h6>
     <a  @click="store2.count--"  style="color:green">-|BACK|-</a>|<a @click="store2.count++"  style="color:red">-|NEXT|-</a> 
      </h6>
      </div>
      <img style="height: 25px" src="@/assets/cursor.gif" />

      
      <p>Technique:<span class="redneon">{{ store.catalogue[store2.count].tech }}</span></p>
<div class="container">
<div class="col d-flexbox border border-success rounded rounded-2 p-1 h6">
<div><h6 class="text-success">    Lorem ipsum dolor sit amet,
<br /> consectetur adipisicing elit.</h6>


</div>

    
</div>
     </div>
      <hr />

      <div class="pic "
     
      >

 
        PIC: 327 {{ store2.count }}
        <hr />
        <img :src="fillPic(this.store2.count)" />

 


      </div>
    </div>
    <div class="container m-4 p-4">ivancuadros MMXXIII</div>
  </div>
</template>

<script>

import { useCounterStore } from '@/stores/alertStore.js'
const store2 = useCounterStore();

import { useCatalogueStore } from '@/stores/catalogueStore.js'


const store = useCatalogueStore();




export default {
  name: "CardComp",
  created(){
  
  },
methods:{

    fillPic(p){
      return store.catalogue[p].src
      //document.getElementsByClassName('img').src=this.catalogue[store2.count].src;
    }

  },
  data(){
    return{
        store,store2
    }
  },
};
</script>

<style lang="scss" scoped>
$color: green;



p {
  color: $color;
  font-size: 0.8em;
}
img{
  display: flex;
  max-height: 50vmax;
  max-width: 25em;
  margin: auto;

}
.pic {
  color: rgb(6, 41, 38);
  background: rgb(19, 65, 29);
  background: linear-gradient(
    153deg,
    rgba(19, 65, 29, 1) 8%,
    rgba(34, 195, 70, 1) 49%,
    rgba(45, 253, 175, 1) 100%
  );



  align-self: center;
  margin: auto;
  padding: 10px;
}
h6{
  font-size: 0.8vmax;
  white-space: nowrap;
  overflow: hidden;
        white-space: nowrap;

}
h1{
  text-align: left;
}
</style>
