<template class="jungle">
    <div>

<div class="row border bg-success border-danger p-1 rounded m-2">Logtest



<div class="container">

<div class="row">

<div class="col-2 border">

1234</div>
<div class="col">{{ data }}</div>
</div>
</div>
<button @click="getDB()">GET swapi DATA</button>
<button @click="getDB2()">GET FIREbase DATA</button>
</div>
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
            axios.get('https://xaxaxdata-default-rtdb.europe-west1.firebasedatabase.app/t1.firebasedatabase.app/catalogue.json')
            .then(res=>{console.log(res.data);
            });
            
         }
     }
  

    



        
        
    }
</script>

<style lang="scss" scoped>

</style>