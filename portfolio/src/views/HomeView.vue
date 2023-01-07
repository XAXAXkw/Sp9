<template>
  <div class="home container m-2 p-2 d-flexbox justify-content-evenly m-auto">
    <iframe max-width="560" height="315"   src="https://www.youtube.com/embed/43N9ixcTsaU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


    <iframe max-width="560" height="315"  src="https://www.youtube.com/embed/cogJvcyzIR8?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


    <iframe max-width="560" height="315" src="https://www.youtube.com/embed/9VaNWiBiSTg?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  }
}
</script>
<style type="css">
iframe{
  border:solid 1px yellowgreen;
  margin:1em;
  background-color: black;
  box-shadow: 1px 1px 100px rgba(127, 255, 212, 0.466);
}

</style>
