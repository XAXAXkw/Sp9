<template>
  <div>

  <LogBadge />

    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <div class="container d-flex">
          <div></div>

          <div class="container p-4"></div>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-4 mb-lg-0">

            <li class="nav-item">
            
            <a class="nav-link active" aria-current="page" href="#">
              <router-link to="/">CONTRACT</router-link></a
            >
          </li>
            <li class="nav-item">
            
              <a class="nav-link active" aria-current="page" href="#">
                <router-link to="/">SHOP</router-link></a
              >
            </li>
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
                Catalogue
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
                    <router-link to="/catalogue">FULL Catalogue</router-link>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Search</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              style="width: 200px;background-color: black;border:solid 1px yellowgreen; color:yellowgreen"
              class="form-control me-2"
              type="search"
              placeholder="ArtWork"
              aria-label="search"
            />
            <button class="btn btn-outline-light" type="submit">FIND</button>
            <a href="#"><img style="height:50px" src="@/assets/xaxaxlogo16-172x122.png" /></a> 
          </form>
        </div>
      </div>
    </nav>
    <div class="bg-dark d-flex-end p-2">
<p class="B6" >Virtual ART - SWAMP | Barcelona MMXXIII </p>

  

     
    </div>
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from '@/components/FooterComp.vue'
import LogBadge from '@/components/LogBadge.vue'
export default {
  name: "NavBar",
components:{
  FooterComp,LogBadge
}
};
</script>

<style lang="css" scoped>
a {
  font-size: 11px;
  letter-spacing: normal;
}
.navbar {
  max-width: 100%;
  background: rgb(19, 65, 29);
  background: linear-gradient(
    153deg,
    rgba(19, 65, 29, 1) 8%,
    rgba(34, 195, 70, 1) 49%,
    rgba(45, 253, 175, 1) 100%
  );
}
a {
  text-decoration: none;
  color: rgb(147, 228, 153);
}
a:hover {
  color: rgb(34, 166, 91);
  text-shadow: 1px 1px 45px aquamarine;
}
.badge{
  margin-left: 20%;
  margin-top:1em;
  position: absolute;
  z-index:1;
  margin-right:5px;
  border:solid 1px green;
  border-radius: 25px;
  background-color: black;
}
.B6{
  color:green;
  text-align:right;
}
</style>
