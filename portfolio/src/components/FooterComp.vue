<template>
    <div>
        <div class="container footer d-flex justify-content-evenly border  border-success p-1">
    <a href="https://www.upwork.com/freelancers/~012894ee17b3a6616a"><img style="width:20px" alt="Vue logo" src="../assets/upwork2.png">  </a>
    <img style="width:20px" alt="Vue logo" src="../assets/behance-xxl.png">
    <img style="width:20px" alt="Vue logo" src="../assets/logo2.png">


    <a href="https://github.com/XAXAXkw"><img style="width:20px" alt="Vue logo" src="../assets/git.png">  </a>


   <img style="width:20px" alt="Vue logo" src="../assets/tube.png">  

    </div>   
    <br />
    <div class="container"> ivancuadros.com<img style="height: 25px" src="@/assets/cursor.gif" /> </div>
    </div>
</template>

<script>
    export default {
        name:'FooterComp'
    }
</script>

<style lang="scss">
.footer{
background-color: rgb(42, 74, 63);
max-width: 100%;
margin: 0 !important;
position: fixed;
z-index:100;
  left: 0;
  bottom: 0;
  width: 100%;
}
a {
  text-decoration: none;
  color: rgb(147, 228, 153);
}
a:hover {
  color: rgb(34, 166, 91);
  box-shadow: 1px 1px 45px aquamarine;
}
</style>