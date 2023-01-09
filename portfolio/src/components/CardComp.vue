<template>
  <div class="template">
    <div class="grid-bg ba-grid anim">
    00000
  <div class="inner"></div>
</div>
    <div class="container thingreen m-auto w-75 w-md-50 w-lg-50 d-flexbox">
      <p style="color: rgb(42, 74, 63);">Artwork</p>
      <h1>32{{ store.count }}</h1>
      CARD HEADER: '{{ store.name }}'
      <hr />
      
      <div class="container ">
      <h6>
     <a href="#" style="color:green">-|BACK|-</a>|<a href="#" style="color:red">-|NEXT|-</a> 
      </h6>
      </div>
      <img style="height: 25px" src="@/assets/cursor.gif" />

      
      <p>102</p>
<div class="container">
<div class="col d-flexbox border p-1">
<div><h6>    Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h6>


</div>

    
</div>
     </div>
      <hr />

      <div class="pic">
        PIC: 327 {{ store.name }}
      </div>
    </div>
    <div class="container m-4 p-4">ivancuadros MMXXIII</div>
  </div>
</template>

<script>

import { useCounterStore } from '@/stores/alertStore.js'
const store = useCounterStore();

export default {
  name: "CardComp",
  data(){
    return{
        store
    }
  },
};
</script>

<style lang="scss" scoped>
$color: green;



p {
  color: $color;
  font-size: 0.8em;
}

.pic {
  color: rgb(6, 41, 38);
  background: rgb(19, 65, 29);
  background: linear-gradient(
    153deg,
    rgba(19, 65, 29, 1) 8%,
    rgba(34, 195, 70, 1) 49%,
    rgba(45, 253, 175, 1) 100%
  );
  height: 450px;
  width: 350px;
  align-self: center;
  margin: auto;
  padding: 10px;
}
h6{
  font-size: 0.5em;
}
</style>
