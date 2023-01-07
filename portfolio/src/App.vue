<template>
<NavBar />
  <router-view/>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
export default {
components:{
  NavBar
}

}
</script>

<style>
#app {

  font-family: 'Press Start 2P', cursive; 
  
  color:  #a0cb96;
}
h6,p{
  font-family: 'Press Start 2P', cursive; 
  font-size: 1.2vmin;
}
h1,h2{
    font-family: 'Press Start 2P', cursive; 
    font-size: 5vmax;
    
}


</style>
