<template>
    <div>

    <div class="badge" onclick="v-show=!v-show"><h3>Login</h3></div>

        <div class="badge" onclick="v-show=!v-show" v-show="false">        
        <div class="inputBadge w-50 d-flexbox justify-content-evenly">
        
        USER <br /><input class="input1"/>
        <br />
        <hr />
        PSSWD<br /><input type="password" class="input1"/>
        </div><button class="btn btn-sm btn-success" >ENTER</button>
</div>

    </div>
</template>

<script>
    export default {
        name:'LogBadge'
    }
</script>

<style lang="scss" scoped>
.inputBadge{
    border:dashed green 1px;
    width:250px;
    padding:2em;
    margin:2em;
}

.input1{
    max-width:70px;

}
.inputBadge:hover{
    animation-name: opener;
    animation-duration: 1s;
    animation-fill-mode: forwards;

}
@keyframes inputer {
    0%   {opacity: 0.5; top:200px;}
100%  { opacity: 1; top:0px;}


  }
.badge{
  margin-left: 2%;
  margin-top:1em;
  position: absolute;
  z-index:50;

  border:solid 1px green;

  background-color: black;

}
.badge:hover{
    animation-name: opener;
    animation-duration: 3s;
    animation-fill-mode: forwards;

}
@media only screen and (max-width: 850px){
  .badge{
    margin-left: 62%;
    }
}




@keyframes example2 {
    0%   {background-color:rgba(170, 255, 0, 0); left:0px; top:0px;}
    25%  {background-color:rgb(13, 255, 0); left:200px; top:0px;}
    50%  {background-color:rgba(179, 255, 0, 0.112); left:2em; top:0px;}
    75%  {background-color:green; right:10px; top:0px;}
    100% {background-color:rgb(40, 7, 33); left:0px; top:0px;}
  }
  @keyframes opener {
    0%   {height:50px; top:0px;}
100%  { height:200px; top:0px;}


  }
</style>