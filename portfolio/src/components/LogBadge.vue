<template>
    <div>

    <div class="badge" @click="showLogin=!showLogin">Login</div>

        <div class="badge2 d-flexbox row m-3" v-if="showLogin">  
              
        <div class="w-50 d-flexbox justify-content-center p-2 m-2"><hr />
        <p>
        USER <br /><input class="input1" id="user"/>
        <br />
        
        PSSWD<br /><input type="password" class="input1" id="password"/></p>
        <div class="row w-100 m-auto">
        
         <button class="btn btn-sm btn-success m-auto" 
        @click="verify()"
        >ENTER</button>

        </div>
       </div>
</div>

    </div>
</template>

<script>


    export default {
        name:'LogBadge',
        data(){return{
          showLogin:false,
          password:'0000', user:'ivancuadros@gmail.com'
        
        }},
        methods:{
          verify(){
            let newUser = document.getElementById('user').value;
            let newPassword = document.getElementById('password').value;
            // alert(newUser);
            if (newUser == this.user && newPassword == this.password){
              alert('Welcome, you are logged in');
              this.showLogin=false;

            } else{
              alert('Wrong user or password');
              this.showLogin=false;
            }
          }
        }

   
      
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
    max-width:150px;
    background-color: rgb(27, 13, 30);
    margin:2em;
    color:rgb(255, 0, 93);
    font-size: 12px;
    border:dashed 1px green;

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
  margin: 1em;
  margin-top:1em;
  position: absolute;
  z-index:50;

  border:solid 1px green;

  background-color: rgba(0, 0, 0, 0.886);

}
.badge2{

  margin-top:1em;
  position: absolute;
  z-index:5;

  border:solid 1px green;

  background-color: rgba(0, 0, 0, 0.886);
  border-radius: 1em;
  padding:5px;
  

}

.badge:hover{
    animation-name: opener;
    animation-duration: 1s;
    animation-fill-mode: forwards;

}
@media only screen and (max-width: 850px){
  .badge, .badge2{
    margin-left: 2%;
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
    0%   {height:25px; width:5em;}
    50%   {height:25px; width:200px;}
100%  { height:23px; width:200px;}


  }
</style>