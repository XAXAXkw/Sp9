<template>
  <div class="container  template">




    <div class="container"><SnapShot />
   <div class="row">
   <div class="col-4">      <div class="Pic col-8"><h1>BIO</h1></div></div>
   <div class="col-8 d-flexbox">     <div class="container">  
    <img  style="height:10em;margin:0.1em" src="../assets/fruit1icon.gif"/>
    <br />
    <img  style="height:5em;margin:0.1em" src="../assets/fruit1icon.gif"/>
   </div></div>

</div>

 
  

      <div class="col-12 col-md-4 border border-success p-4 m-auto rounded d-block">
       <h6>DEC 17 12 1975</h6>
        <div class="row m-auto d-flex about">
          <div>
            <div>
              <div class="row">
                <div class="colborder">
                  <div class="container bg-dark border border-danger rounded-4 bg-success "><h3>1975</h3></div>
                </div>
              </div>
              <div class="colborder m-4">
                <div class="container d-block w-75 ">
                  <p>
                    Lorem ipsum dolor sit amet 
                  </p>
                  <h5>Consequuntur provident</h5>
                  <h5 style="color:red; text-shadow:1px 0px 5px hotpink">delectus omnis</h5>
                </div>
              </div>
            </div>








            <div class="container border-light">
              <div class="row">
                <div class="colborder">
                  <div class="container border bg-success"><h1>1980</h1></div>
                </div>
              </div>
              <div class="colborder">
                <div class="container">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
                    minima saepe consectetur animi magni officiis maxime vel placeat?
                  </p>
                  <h6>Consequuntur provident</h6>
                  <h5>delectus omnis</h5>
                </div>
              </div>
            </div>

            
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>



<script>
import SnapShot from '@/views/SnapShot.vue'
export default{
  name:'AboutView',
  components:{
 SnapShot
  }

}


</script>
<style lang="scss" scoped>
.Pic {

  height: 400px;
  width:100%;

}
  h1,h3{
  text-shadow: 1px 1px 20px aquamarine;
  font-size: 15vmin;
  padding: 0.1em;
}
</style>
