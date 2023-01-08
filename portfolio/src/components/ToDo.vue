<template>
  <div>
    <h1>INSERT DOUBTS</h1>

    <div class="container d-flex justify-content-evenly">
      <div>
        <img class="imgB" src="@/assets/banana.svg" />
        
        <div class="d-flex">        <input class="inputDark" placeholder="Why are we here?..."/>
        <button @click="sureNot" class="btn btn-sm text-success m-1">ASK ME ANYTHING</button></div>

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
</template>

<script>



const todos = [
    {
        id:1,
        text:'do this',
        isFinished: false,
    }
]


export default {
  name: "ToDo",
  data(){
    return{
        todos
    }
  },
  methods:{
    sureNot(){
        alert('Hi')
    }
  }
};
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
      padding:1em;
}

.LIST {
  margin-left: 20%;
  font-size: 1.5vmax;
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
}
.imgB{
    margin:5em;
    width:15vmax;
}</style>
