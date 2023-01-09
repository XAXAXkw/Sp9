<template>
  <div class="container template ">  <p style="color:rgb(42, 74, 63)">EXISTENCIAL DOUBTS? - CLIMATIC ANGUISH? - SYSTEMIC DEPRESSION?</p>
  <div class="row">
     <div class="col-12  ">         <div class="d-blockbg bg-warning  border border-danger">        <input class="inputDark" placeholder="Why are we here?..."/>
        <button @click="addTodo" class="btn btn-sm text-success m-1 text-danger">ASK ME ANYTHING</button></div>
     <div class="col-10  border border-success w-100 p-2"><h4>...WHATEVER YOU NEED. I'm not joking.</h4> This is SERIOUS.</div>   <h1>GET<br /> ANSWERS<br /> NOW!</h1>
     
<div class="thingreen w-50 m-auto">cont
<div class="row border">row
<div class="col border">col0
<img src="../assets/tech1icon.gif" style="height:7em"/>
</div>
<div class="col border">col1</div>
<div class="col border">col2
<div class="container ">container
<div class="row ">row1</div>
<div class="row ">row2</div>
</div>
</div>
</div>

</div>
</div>
        



  </div>

   



    <div class="col-12  d-flex justify-content-evenly">
      <div>
        <img class="imgB" src="@/assets/banana.svg" />
        <div class="container thingreen">
        <h4>Why are you bald, {{ store.name }}?</h4>
        </div>

<hr />








      </div>
    </div>

    <hr />
    <div class="LIST">


    
      <ol>
        <li>
          <h4 style="color: white">
            Sleep at least 10hrs.

            <button class="btn btn-sm text-success m-1">V</button>
            <button class="btn btn-sm text-danger m-1">X</button>
          </h4>
        </li>


        <li>
          <h4 style="color: white">
            Sleep 10hrs more.

            <button class="btn btn-sm text-success m-1">V</button>
            <button class="btn btn-sm text-danger m-1">X</button>
          </h4>
        </li>




      </ol>
    </div>
  </div>
  <br/>
  <hr />
</template>

<script>

import { useCounterStore } from '@/stores/alertStore.js'


const todos = [
    {
        id:1,
        text:'do this',
        isFinished: false,
    }
]
const store = useCounterStore();










export default {
    
  name: "ToDo",
  data(){
    return{
        todos,store
    }
  },
  computed:{}

,
  methods:{

  }
}
</script>

<style lang="scss" scoped>

.inputDark {
  margin: 15px;
  height: 30px;
  padding: 5px;
  border-radius: 0.5em;
  font-size: 8px;
  width: 200px;
  background-color: black;
  border: solid 1px yellowgreen;
  color: green;

}

h1{
  text-shadow: 1px 1px 20px aquamarine;
  font-size: 10vmin;
  padding: 2em;
}


p{
    font-size: 0.4em;
}
.LIST {
  margin-left: 20%;
  font-size: 1.5vmax;
  margin-bottom: 500px;
}
ol{
      list-style:decimal;
    
}
li {
  
  display: block;
  width: 50%;
  text-decoration: underline 0.5px;
  border: dashed 1px rgba(0, 100, 0, 0.391);
  padding: 10px;
  margin: 5px;
}
h4{
    font-size: 10px;
    color:green;
}
.imgB{
    margin:2em;
    width:15vmax;
}



</style>
