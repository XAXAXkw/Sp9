<template>
    <div>
    <div class="Wrapper container d-flex justify-content-evenly" >
    
        <div class="col card thingreen">
        <div class="container text-light bg-success d-block border border-success m-auto">
        <div class="row">
      
           <div class="col">
                CARD 
           </div>

           <div class="col">
           PRICE
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



    <div class="col card thingreen">
        <div class="container text-light bg-success d-block border border-success m-auto">
        <div class="row">
      
           <div class="col">
                CARD 
           </div>

           <div class="col">
           PRICE
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





    <div class="col card thingreen">
        <div class="container text-light bg-success d-block border border-success m-auto">
        <div class="row">
      
           <div class="col">
                CARD 
           </div>

           <div class="col">
           PRICE
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
</template>

<script>
    export default {
        name:'ShopCard',

    }
</script>

<style lang="scss" scoped>
.card{
    width:30%;

    margin:2em;
    padding:2em;
    color:rgba(128, 128, 128, 0.316);
    box-shadow: 1px 1px 50px aqua;
 
}

.wrapper{
       flex-direction: column;
}

@media only screen and (max-width: 400px){
    .wrapper{
        flex-direction: row;
    }
}

.pixter{
height:300px;
width:250px;
background-color: green;
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