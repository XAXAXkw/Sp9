<template>
  <div >

  <div class="container snapper">
  - - - - - - - - - 
  <br />
  HELLO HUMAN.
  <br />
  
  Would you like to know about my creator?<img style="height: 25px" src="@/assets/cursor.gif" />
  <hr />
  <button>YES</button>
  or  <button>NO</button>
  
  
  </div>

  
  
  </div>
</template>

<script>
export default { name: "SnapShot" };
</script>

<style lang="scss" scoped>


.snapper{

margin:10em auto;
    position:fixed;
    z-index:10;
    display: flexbox;
    align-items: center;
    width:750px;
    height:500px;
    padding:25px;
    border-radius: 25px;
    box-shadow: 1px 1px 100px rgb(13, 255, 0);
    

    background-color: rgba(47, 255, 0, 0.655);
}

button{
  background-color: black;
  color:green;
}

</style>
