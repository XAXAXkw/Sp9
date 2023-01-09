<template>
  <div class="container template ">  <p style="color:rgb(42, 74, 63)">EXISTENCIAL DOUBTS? - CLIMATIC ANGUISH? - SYSTEMIC DEPRESSION?</p>
  <div class="row">
    <div class="Pic col-8"><h1>FAQS</h1></div>
     <div class="col-12  ">         <div class="d-blockbg bg-warning  border border-danger">        <input class="inputDark" placeholder="Why are we here?..."/>
        <button @click="addTodo" class="btn btn-sm text-success m-1 text-danger">ASK ME ANYTHING</button></div>
     <div class="col-10  border border-success w-100 p-2"><h4>...WHATEVER YOU NEED. I'm not joking.</h4> This is SERIOUS.</div>   <h3>GET<br /> ANSWERS<br /> NOW!</h3>
     
<div class="thingreen w-75 w-lg-50 m-auto"><h3>result:</h3>
<div class="row "><hr />
<div class="col border border-success p-2"><p>Your Microplastic Levels</p>
<img src="../assets/tech1icon.gif" style="height:7em"/>327%
</div>
<div class="col">positive</div>
<div class="col bg-success"><h1>Yes</h1>
<div class="container ">container
<div class="row ">row1</div>
<div class="row ">row2</div>
<div class="row ">row1</div>

</div>



</div>
<hr />

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
  padding:0.2em;

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
