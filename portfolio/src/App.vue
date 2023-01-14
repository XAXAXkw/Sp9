<template>
  <div class="jungle">

<p>{{  date }} - {{ message }}</p>

</div>
  <NavBar />  <VisorComp />
  <router-view />
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import VisorComp from "@/components/VisorComp.vue";




export default {
  data(){
return{
  date:new Date(),
  message:"BETA PORTFOLIO",
  Timed:''

}
  },
  computed:{

 
  },
  components: {
    NavBar,VisorComp
 
  },
  props:{
    visorStatus:Boolean
  }

  }
;
</script>

<style>


#app {
  font-family: "Press Start 2P", cursive;
  margin:auto;
max-width: 800px;
  color: #9dff00;



}

**{
  width:75%;
}

p,h5,h6{
  font-family: "Press Start 2P", cursive;
  font-size: 0.8vmin;
}
h1,h2,h3,h4{
  font-family: "Press Start 2P", cursive;
  font-size: 5vmin;
}
h1{
  font-size: 8vmax;
}
*{
  font-size: 2vmin;
}
</style>
