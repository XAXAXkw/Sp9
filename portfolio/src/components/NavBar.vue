<template>
    <div>
        <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
  <div class="container d-flex"> <a style="color:yellowgreen"><p>Ivan Cuadros ATELIER</p></a>
  <div>  <img src="@/assets/xaxaxlogo16-172x122_a.png"/></div>
  
  <div class="container p-4">  </div>
  </div>
 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Artworks..." aria-label="Search">
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div class="bg-light d-flex-end">
<p style="font-size:4px;margin-left:12em">
<router-link to="/">Home</router-link> | 
    <router-link to="/about"> About</router-link> | 
    <router-link to="/beta"> BETA</router-link> |
    <router-link to="/catalogue"> Catalogue</router-link> |
    </p>
    
    </div>

    </div>
</template>

<script>
    export default {
        name:'NavBar'
    }
</script>

<style lang="css" scoped>
a{
    font-size: 11px;
    letter-spacing: normal;
}
.navbar{
    max-width:100%;
    background: rgb(19,65,29);
background: linear-gradient(153deg, rgba(19,65,29,1) 8%, rgba(34,195,70,1) 49%, rgba(45,253,175,1) 100%);
    
}
a{
text-decoration: none;
  color:rgb(147, 228, 153);

}
a:hover{
  color:rgb(34, 166, 91);
  text-shadow: 1px 1px 45px aquamarine;
}
</style>