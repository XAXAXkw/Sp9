<template>
    <div>
    <div class=" container " >
<div class="container ">

1
<div class="row ">|<h1>SHOP</h1>| <div class="container ">
      <h6>
     <a href="#" style="color:green">-|BACK|-</a>|<a href="#" style="color:red">-|NEXT|-</a> 
      </h6>
      </div>


<div class="container wrapper  d-flexbox">

    
    <div class="card thingreen">
        <div class="container text-light bg-success d-block border border-success m-auto">
        <div class="row">
      
           <div class="col">
              ITEM# 327
           </div>

           <div class="col">
           <h6 style="color:orange">PRICE:100$</h6>
           </div>
        </div>
        </div>

    <hr />
    
    <p>Title IITEM</p>
    <h4>INFO CARD</h4>
    <div class="pixter"></div>
    
    
    
    
    
    
    <hr />
    <button>BUY</button>
    </div>





    <div class="card thingreen">
        <div class="container text-light bg-success d-block border border-success m-auto">
        <div class="row">
      
           <div class="col">
              ITEM# 327
           </div>

           <div class="col">
           <h6 style="color:orange">PRICE:100$</h6>
           </div>
           <br />
           <br />
           <br />
           <br />
           <br />

        </div>
        </div>

    <hr />
    
    <p>Title IITEM</p>
    <h4>INFO CARD</h4>
    <div class="pixter"></div>
    
    
    
    
    
    
    <hr />
    <button>BUY</button>
    </div>






    <div class="card thingreen">
        <div class="container text-light bg-success d-block border border-success m-auto">
        <div class="row">
      
           <div class="col">
              ITEM# 327
           </div>

           <div class="col">
           <h6 style="color:orange">PRICE:100$</h6>
           </div>
        </div>
        </div>

    <hr />
    
    <p>Title IITEM</p>
    <h4>INFO CARD</h4>
    <div class="pixter"></div>
    
    
    
    
    
    
    <hr />
    <button>BUY</button>
    </div>










</div>

</div>




</div>

    <div class="row justify-content-evenly wrapper">
    
    
    
    </div>




























    </div>


    </div>
</template>

<script>
    export default {
        name:'ShopCard',

    }
</script>

<style lang="scss" scoped>
.card{
    width:30%;
max-height:450px;
    margin:1em;

    color:rgba(128, 128, 128, 0.316);
    box-shadow: 1px 1px 50px aqua;
 
}

.wrapper{
    display: flex;
       flex-direction: row;
}

@media only screen and (max-width: 850px){
    .wrapper{
        flex-direction: column;
    }
    .card{
        width:75%;
        margin:auto;
        margin-top: 2em;
    }
}

.pixter{
height:30vmax;
width:20vmax;
background-color: green;

margin:auto;
padding:0em;
}

.templated{
    background-image: url('../assets/bkg_expo.png');
opacity: 0.2;
  background-position:center ;
  background-repeat: no-repeat;
  display: flow-root;
min-height:100%;
min-width:100%;
margin:0px;
}
</style>