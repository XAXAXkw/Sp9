<template>
    <div>
    <div class="thingreen">
    
    MusicBOX <button class="btn btn-success btn-sm m-1"> get data</button>
    <div class="template thingreen">

    <div class="container border bg-dark border-success ">
    
    
    <div class="flex-direction-row align-items-center">
    <div class="col-12 align-self-left ">   
    <div class="row ">
    <div class="col">
        <h5>AudioFile :<span class="screeno ">{{ musicList.length }}</span>    </h5>
    </div>
    <div class="col">

    <h5>Duration:<span class="screeno ">{{  musicList[0].year }}</span>    </h5>
    </div>
    <div class="col">
      <h5>Style :<span class="screeno ">{{   musicList[0].name   }}</span>    </h5>
    </div>
    <div class="col">
        <h5>Year :<span class="screeno ">{{   musicList[0].id  }}</span>    </h5>   
    </div>    <hr />
    </div>

  
 

    </div>

    <div class="col-8 ">    <div class="container">    


<div class="container">

<div class="col-6">   <audio controls class="playerOne">

  <source src="../assets/desert01.wav" type="audio/wav">
Your browser does not support the audio element.
</audio></div>
<div class="col-2"></div>
<div class="col-4"></div>
</div>

     
    
        </div></div>


    </div></div>


    

    </div>
    
    <ol>
    <li v-for="item in musicList" :key="item">
        <div class="col">
        <h5>AudioFile :<span class="screeno ">{{ item.name}}</span>    </h5>
        <audio controls class="playerOne">

<source :src="fillMusic(item.id)" type="audio/wav">
Your browser does not support the audio element.
</audio>
    </div>
    </li>
    </ol>
    </div>


    </div>
</template>

<script>

//import musicBox from '../stores/musicBox.json'
//let name = 'popo'




    const LIST = [
        { 
            id:0,
            name:"music 1",
        year:"1998",
        src:"../assets/desert01.wav" 
    },
    { id:1,
        name:"music 2",
        year:"1980",
        src:"../assets/desert01.wav" 
    },


    ];




    export default {
    name:'MusicBox',
    data(){
        return{
            musicList:LIST
        }
    },
 methods:{
    fillMusic(p){
  return this.musicList[p].src
  //document.getElementsByClassName('img').src=this.catalogue[store2.count].src;
},
    }
    }
</script>

<style lang="scss" scoped>
.screeno{
    background-color: rgba(153, 205, 50, 0.572);
    box-shadow: 1px 1px 100px rgba(32, 6, 32, 0.664);
    border-radius: 1em;
    margin: 2em;
    font-size: 5px;
    
}
.playerOne{
    background: rgba(153, 205, 50, 0.572);
    box-shadow: 1px 1px 100px rgba(32, 6, 32, 0.664);
    border-radius: 1em;
margin-bottom: 5px;
    font-size: 10px;
    font-family: "Press Start 2P", cursive;
max-height: 25px;

color:green;
}
audio::-webkit-media-controls-play-button{
color:yellowgreen;  
}
audio::-webkit-media-controls-panel {
    background: linear-gradient(
    153deg,
    rgba(19, 65, 29, 0.535) 8%,
    rgba(34, 195, 69, 0.689) 49%,
    rgb(45, 253, 177) 100%);
    color:green;    

}
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
li:hover{
    box-shadow: 1px 1px 50px rgba(153, 205, 50, 0.578);
    background-color: rgba(42, 26, 45, 0.321);
}
</style>