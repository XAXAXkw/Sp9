<template>
  <NaviGator
  
   :counted="store2.count"  
   
   @countedHijo="store2.count = $event"/>
  <div class="template">
  
    <div class="grid-bg ba-grid anim p-4">
    <div class="row d-flex m-auto">   </div>

  <div class="inner"></div>
  count: {{  store2.count }}
</div>
    <div class="container thingreen m-auto w-75 w-md-50 w-lg-50 d-flexbox">
      <p style="color: rgb(42, 74, 63);">Artwork     {{ store.catalogue[store2.count].id}}</p>
      <div class="container ">
      <h6>
     <a  @click="store2.count--"  style="color:green">-|BACK|-</a>|<a @click="store2.count++"  style="color:red">-|NEXT|-</a> 
      </h6>
      </div>


      <div class="row m-2 ">
      
      <div class="col-md-5 "><h1>32{{ store2.count }}
       
      </h1> <img style="height: 100px; width:10px;margin-left:2em" src="@/assets/cursor.gif" />
      Title: '{{ store.catalogue[store2.count].name }}'</div>
  

  <div class="col-md-7 ">      <div class="waterpic">   <img  class="xlogo" src="../assets/xaxaxlogo16.png"/></div>   <img class="jump" :src="fillPic(this.store2.count)" /></div>
       </div>
     
      <hr />
      
  


      
      <p>Price:<span class="redneon">{{ store.catalogue[store2.count].price }}$</span></p>
<div class="container">
<div class="col d-flexbox border border-success rounded rounded-2 p-1 h6">
<div>
<div class="row">

<div class="col-8"><h6 class="text-success">    Lorem ipsum dolor sit amet,
<br /> consectetur adipisicing elit.</h6>
<br />
<p> ITEM TYPE: {{ store.catalogue[store2.count].tech }} </p>
</div>
<div class="col-4"> <button class="btn btn-sm btn-success">BUY</button></div>
</div>




</div>

    
</div>
     </div>
      <hr />

      <div class="pic "
     
      >

<div class="waterpic">   <img  class="xlogo" src="../assets/xaxaxlogo16.png"/></div> 
        PIC: 327 {{ store2.count }}
        <hr />LINK
        <router-link :to="{path:'./VisorComp.vue'}" >
        <img 
     
        :src="fillPic(this.store2.count)" />
        <br /></router-link>
        <hr />
        <div >Similar Artwork:<hr />
        
        <img class="mosaiker" :src="store.catalogue[this.store2.count].src"/>


        
        
        
        </div>



        <hr />

 


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


import NaviGator from '../components/NaviGator.vue'



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
        store,store2,
        count:Number,
        gety:Number
    }
  },
  components:{
NaviGator
  }
};
</script>

<style lang="scss" scoped>
$color: green;



p {
  color: $color;
  font-size: 0.8em;
}
img{
max-height:250px;



}
.template{
  z-index:5;
}

.jump{
  box-shadow: 1px 1px 60px rgba(127, 255, 212, 0.582);
border:25px solid black;
}
.pic {

  z-index:100;
  color: rgb(6, 41, 38);
  background: rgb(19, 65, 29);

  background: linear-gradient(
    153deg,
    rgba(19, 65, 29, 1) 8%,
    rgba(34, 195, 70, 1) 49%,
    rgba(45, 253, 175, 1) 100%
  );



  margin: auto;

}
.waterpic{

  z-index:100;


}

.mosaiker{
  display: block;
max-width:15%;
min-height:15%;
background-color: red;
margin:auto;
background-position: 35em;




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
.xlogo{
height:50px;


}
</style>
