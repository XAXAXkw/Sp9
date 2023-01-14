<template >
    <div class="concrete p-4">

<div class="row border bg-dark border-danger p-1 rounded m-4">
 
Logtest



<div class="container m-4">

<div class="row">

<div class="col-2 border rounded p-2 d-flexbox text-center">
   <img src="../assets/skull_badge.gif" style="height:50px;width:auto;align:center"/>
   <hr />
   <div class="thingreen bg-light">APIs </div>
</div>
<div class="col-6">






<div class="container bg-success border">
result 1: </div>
<div class="container bg-success border">
result 2: </div>
<div class="container bg-success border">
result : 
<ul>
<li
v-for="item in LIST" :key="item"
>
{{ item.name }}
</li>
</ul>
</div>


</div>
</div>
</div>
<div class="container"><button @click="getDB()">GET swapi DATA</button>
<br />
<button @click="getDB2()">GET FIREbase DATA</button>
<br /></div>

<br />
</div>
<div class="container m-4 p-4">
<h3 id="">test importing class.js:
</h3>
eee</div>
    </div>
</template>

<script>

import axios from 'axios'

import Test from '../stores/TestClass.js'
let newTest = new Test(666,'pepe');
console.log(newTest)
    export default {
        name:'LogTest',
        data(){
            return{
LIST:[], data:{}
            }},
     methods:{
        async getDB(){
            await
            axios.get('https://swapi.dev/api/planets/')
            .then(res=>{this.LIST = res.data.results;
                console.log(this.LIST)
            });
            
         },
         getDB2(){
            axios.get('https://xaxaxdata-default-rtdb.europe-west1.firebasedatabase.app/t1.firebasedatabase.app/')
            .then(res=>{console.log(res.data);
            });
            
         },
         async getDB3(){ await
            axios.get('https://swapi.dev/api/planets/')
            .then( res=>{res.data = this.LIST;
                console.log(this.LIST)
            });
     },}
  

    



        
        
    }
</script>

<style lang="scss" scoped>
.concrete{
    background-image: url('../assets/grey_bkg.png');
    min-height:10vmax;
background-blend-mode: multiply;
    padding:2em;
    z-index:10;
    color:rgb(63, 33, 66);
    text-shadow: 0.2em 0.2em 4px rgba(2, 28, 1, 0.658);
}
</style>