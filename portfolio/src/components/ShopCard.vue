<template>
    <div>
    <div class=" container" >
<div class="container "
>
<h5 >
<button @click="modalOn=!modalOn">X</button>
cart demo</h5>
<div class="cartModal"
v-if="modalOn"

>

<ul>
<div class="container p-2"

>


</div>

<div class="row">

</div>

<li 
style="background-color:  rgb(47, 18, 50);padding:5px;border-radius:2em;margin-bottom:5px" 
v-for="item in store.cartList"
:key="item"
>
id:{{ item.id }} added | price:<span class="redneon">{{ item.price }}$</span>
</li>
</ul>
<hr />
<span class="redneon">TOTAL: {{ this.total }}$</span>
<br />

<div class="row w-25" style="font-size: x-small;">





<button class="btn btn-success btn-sm m-1">Check Out</button>
<button @click="clearCart()" class="btn btn-danger btn-sm m-1">Clear Cart</button>
</div>

</div>


<div class="row ">|<h1>SHOP</h1>| 


<div class="container wrapper  d-flexbox flex-wrap">

    
    <div 
    class="card thingreen d-flexbox p-2"
    v-for="item in store.catalogue " :key="item"
    >
        <div class="container rounded text-light bg-success d-block border border-success m-auto">
        <div class="row">
      
           <div class="col">
              ITEM# {{ item.id}}
           </div>

           <div class="col">
           <h6 style="background-color:  rgb(47, 18, 50);padding:5px;border-radius:2em" class="redneon">PRICE:{{item.price}}$</h6>
           </div>
        </div>
        </div>

    
    <br />
<h6 style="color:rgb(47, 18, 50)">{{ item.name }}</h6>

    <h6>SIZE:{{ item.w }} X {{ item.h }} cms</h6>    
    <h6>{{ item.tech }}</h6><hr />
    <div class="pixter ">
    <img class="pixterpic" :src="fillPic(item.id)" />
    </div>
    
    
    
    
    
    
    <hr />
    <button class="rounded" @click="addToCart(item)">BUY</button>
    </div>























</div>

</div>




</div>

    <div class="row justify-content-evenly wrapper">
    
    
    
    </div>




























    </div>


    </div>
</template>

<script>
import { useCatalogueStore } from '@/stores/catalogueStore.js'
const store = useCatalogueStore();

import { useCounterStore } from '@/stores/alertStore.js'
const store2 = useCounterStore();


    export default {
        name:'ShopCard',
        data(){
            return{
                store,store2,
                total:0,
                modalOn:true
            }
        },
        computed:{

        },
        methods:{

fillPic(p){
  return store.catalogue[p].src
  //document.getElementsByClassName('img').src=this.catalogue[store2.count].src;
},
addToCart(item){
store.cartList.push(item);
this.total = this.total + item.price
},
clearCart(){
    store.cartList = [];
}

},

    }
</script>

<style lang="scss" scoped>



h1{
 font-size:80px;
    text-shadow: 20px 10px 0px rgba(255, 0, 72, 0.61),
    20px 20px 0px  rgba(140, 30, 152, 0.675),
    20px 0px 0px  rgb(105, 27, 114);
}
.card{
    min-width:25%;
max-height:450px;
    margin:1em;

    color:rgba(128, 128, 128, 0.316);
    box-shadow: 1px 1px 50px aqua;
    z-index:1;

 
}
.cartModal{
    background-color: rgba(36, 7, 29, 0.755);
    padding:1.5em;
    position: fixed;
    z-index: 100;
    margin-left: 50%;
    border-radius: 2em;
    font-size: x-small;
    box-shadow: 1px 1px 50px aqua;
    width:50%;
}

.wrapper{
    display: flex;
       flex-direction: row;
}

@media only screen and (max-width: 850px){
    .wrapper{
        flex-direction: column;
    }
    .card{
        width:75%;
        margin:auto;
        margin-top: 2em;
        z-index:1;
        flex-wrap:no-wrap;
        padding:2em;

    }
  }
  .pixterpic{

      height:12em;
      margin:auto;
      padding:auto;
      flex-wrap: wrap;
      max-width: 100%;
    }
.pixter{ 
    flex-wrap: wrap;

background-color: rgb(0, 0, 0);
border-radius: 2em;
flex-wrap: no-wrap;

width: 100%;

}

.templated{
    background-image: url('../assets/bkg_expo.png');
opacity: 0.2;
  background-position:center ;
  background-repeat: no-repeat;
  display: flow-root;
min-height:100%;
min-width:100%;
margin:0px;

}


.xlogo{
margin:10px;
height:25px;
}
</style>