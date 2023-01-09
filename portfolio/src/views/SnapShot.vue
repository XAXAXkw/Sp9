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

margin-top:30em;
margin-left: 50em;
    position:fixed;
    display: inline-flexbox;
    z-index:10;
    display: flexbox;
    align-items: center;
    width:400px;
    height:400px;
    padding:2em;
    border-radius: 25px;
    box-shadow: 1px 1px 100px rgb(140, 255, 0);
    

    background-color: rgba(22, 119, 0, 0.906);
}

button{
  background-color: black;
  color:green;
}

</style>
