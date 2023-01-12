<template>
  <div>

  <LogBadge />

    <nav class="navbar menu d-flex  navbar-expand-lg">
      <div class="container-fluid d-flex  justify-content-evenly">
        <div class="col-2 d-flex ">



          <div></div>

        </div>

        <button
          class="navbar-toggler p-4"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>




        <div class="collapse navbar-collapse m-4 " id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-4 mb-lg-0 p-4">

           
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <router-link to="/shopcard">SHOP</router-link></a
              >
            
          
            
           
            </li>

            <li class="nav-item">

   <a class="nav-link active" aria-current="page" href="#">
                <router-link to="/todo">FAQS</router-link></a
              ></li>




              <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">
                <router-link to="/exposite">EXPO</router-link></a
              ></li>



            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link to="/about"> BIO</router-link>
              </a>
            </li>



            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Art Collection
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Computed</a></li>
                <li><a class="dropdown-item" href="#">FineArts</a></li>
                <li><a class="dropdown-item" href="#">Comic-Books</a></li>
                <li><a class="dropdown-item" href="#">Animation</a></li>
                <li><a class="dropdown-item" href="#">Music</a></li>
                <li><a class="dropdown-item" href="#">Photography</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item">
                    <router-link to="/card">FULL Catalogue</router-link>
                  </a>
                </li>
              </ul>
            </li>


   

          </ul>

         <button @click="Vsearcher=!Vsearcher">SEARCH</button>
          
        </div>
      </div>
    </nav>
    <div class="d-flex justify-content-evenly ">


<div class="container d-flex justify-content-evenly  searcher"
v-if="Vsearcher"
>

<div class="row ">

<div class="col-6 ">   

<div class="container ">

<div class="row ">
<div class="container "> <a class="nav-link active" aria-current="page" href="#">
              <router-link to="/"><button  class="btn btn-sm btn-success m-4">
              
                
                
                
                FOR HIRE</button></router-link></a
            ></div>
<div class="col-6 border">      <a href="#"><img style="height:50px" src="@/assets/xaxaxlogo16-172x122.png" /></a> </div>

</div></div>

            
      
            
            </div>




<div class="col ">

<form class="d-flex row m-2 p-1" role="search">
            <input
              style="width: 100%;background-color: black;border:solid 1px yellowgreen; color:yellowgreen"
              class="form-control me-2"
              type="search"
              placeholder="..."
              aria-label="search"
            />

            <br />
            <hr />
            <button class="btn btn-outline-light" type="submit">FIND</button>
           
          </form>
</div>
</div>
</div> 




<p class="B6 p-2" > <a href="#">cat</a>|<a href="#">eng</a>|<a>esp</a>|<a>fr </a></p>    <div class="container"> ivancuadros.com<img style="height: 25px" src="@/assets/cursor.gif" /> </div>

  

     
    </div>
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from '@/components/FooterComp.vue'
import LogBadge from '@/components/LogBadge.vue'
export default {
  name: "NavBar",
  data(){
    return{
      Vsearcher:false
    }
  },
components:{
  FooterComp,
  LogBadge
}
};
</script>

<style lang="css" scoped>
.searcher{
  background-color: rgba(153, 205, 50, 0.369);
}
a {
  font-size: 11px;
  letter-spacing: normal;
}
.menu{

  /*background: rgb(19, 65, 29);*/
  background: linear-gradient(
    153deg,
    rgb(19, 65, 29) 8%,
    rgb(34, 195, 69) 49%,
    rgb(45, 253, 177) 100%
  );
}
a {
  text-decoration: none;
  color: rgb(147, 228, 153);
}
a:hover {
  color: rgb(63, 32, 54);

}

.badge{
  margin-left: 20%;

  position: absolute;
  z-index:1;
  margin-right:5px;
  border:solid 1px green;
  border-radius: 25px;
  background-color: black;
}
.B6{
  color:green;

}
</style>
