<template >
    <div class="concrete p-4">

<div class="row border bg-success border-danger p-1 rounded m-2">
 
Logtest



<div class="container m-4">

<div class="row">

<div class="col-2 border rounded p-2 d-flexbox text-center">
   <img src="../assets/skull_badge.gif" style="height:50px;width:auto;align:center"/>
   <hr />
   <div class="thingreen bg-light">APIs </div>
</div>
<div class="col">{{ data }}</div>
</div>
</div>
<button @click="getDB()">GET swapi DATA</button>
<button @click="getDB2()">GET FIREbase DATA</button>
</div>
<div class="container m-4 p-4">
<h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae accusamus corporis facere ex, beatae natus, quaerat culpa excepturi fuga, blanditiis et in sit quidem incidunt inventore debitis obcaecati laboriosam optio!
</h3>
eee</div>
    </div>
</template>

<script>

import axios from 'axios'
    export default {
        name:'LogTest',
        data(){
            return{
LIST:[], data:{}
            }},
     methods:{
         getDB(){
            axios.get('https://swapi.dev/api/planets/')
            .then(res=>{console.log(res.data.results);
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
    text-shadow: 1px 0.5em 5px rgba(2, 28, 1, 0.516);
}
</style>