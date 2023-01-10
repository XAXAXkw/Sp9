<template >
    <div class="template p-4">



<ul>

<li
v-for="item in store.catalogue"
:key="item"
>


ITEM {{ item }}

</li>
</ul>



    <div class="container thingreen p-2 m-auto"> VALUE: {{  value + 1}}
 <button @click="isVisible=!isVisible">toggle OFFER</button>
<h1 >  {{ store.name }}   |  {{  value }} </h1>
<div class="container bg-danger " v-if="isVisible">

<div class="container bg-danger"><h1></h1>
YOUR MOTHER HATES YOU!</div></div>

<hr />
<h5>{{ greeting }}</h5></div>





<hr />



<h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ab quas officiis architecto aspernatur corrupti dolorem iste incidunt. Eius beatae deserunt quasi natus corporis minus ex a nihil sed ab.</h6>




<div class="container thingreen m-auto mb-4">
<div class="container">
<div class="row"><p>Actual Catalogue Length:</p></div>
<h1 class="redneon">{{store.catalogue.length}}</h1><h4>items</h4></div>




</div>








<div class="thingreen w-75 m-auto">

<p>LISTED:</p>
<ol>

<li
v-for="item in store.catalogue" :key="item.id"

>
{{ item.name }} -Price: <span class="price">{{ item.price }}$</span> 
</li>
</ol>


<hr />

</div>









    </div>
</template>

<script>


import { useCatalogueStore } from '@/stores/catalogueStore.js'


const store = useCatalogueStore();





    export default {
        name:'ExpoSite',
        computed:{
         
        },
        data(){
            return{
                value:2023,greeting:'EXPOSITION X',isVisible:false,store
            }
        }
    }






</script>

<style lang="scss" scoped>
ol{
display: block;
    box-shadow: 1px 1px 50px rgba(153, 205, 50, 0.393);
    border:dashed 0.5px green;
    border-radius: 0.5em;
   
}
     .price{
        background-color: rgb(30, 14, 24);
        color:rgb(255, 68, 0);
   text-shadow:1px 0px 5px hotpink;
   font-size:1vmax;
   padding:1em;

   text-align: right;
     }
li{    display: block;

    text-align: left;
   padding:0.55em;
    font-size: 0.95vmax;
    background-color: rgba(72, 255, 0, 0.321);
    margin: 1vmax;
    margin-left:5%;
     box-shadow: 1px 1px 50px rgba(153, 205, 50, 0.393);
}
</style>