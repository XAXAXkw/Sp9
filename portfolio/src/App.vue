<template>
  <div class="jungle">00</div>
  <NavBar />
<VisorComp />
  <router-view />
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import VisorComp from "@/components/VisorComp.vue";




export default {
  data(){
return{

}
  },
  components: {
    NavBar,VisorComp
 
  },

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


h6,
p {
  font-family: "Press Start 2P", cursive;
  font-size: 1.2vmin;
}
h1,
h2 {
  font-family: "Press Start 2P", cursive;
  font-size: 5vmax;
}
</style>
