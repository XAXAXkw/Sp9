<template>
    <div v-if="ShowCart">
    <div class="bkger" @click="ShowCart=false">bkg</div>

<div class="wrapperCart thingreen w-auto bg-dark">

MY CART<p>
Lorem ipsum dolor sit provident.</p>
<ul>

<li>
a
</li>
<li>
b
</li>
<li>
c
</li>
<hr />
</ul>
<p>TOTAL:000$</p>
<div class="container m-1">

<button class="btn1">CHECK OUT</button>
<button class="btn2">CLEAR CART</button>
</div>

</div>

    </div>
</template>

<script>

    export default {
        name:'CartComp',
        data(){
            return{
                ShowCart:true
            }
        }

    }
</script>

<style lang="scss" >
.wrapperCart{
    position:absolute;
    margin-top:5px;
    margin-left:65%;
    z-index:20;
    max-width: 250px;

    .btn1{
width:100px;
background-color: rgb(166, 255, 0);
color:green;    padding:5px;
border:solid 2px ;
border-radius: 15px; margin:2px;

    }
    .btn2{
width:100px;
background-color: rgb(157, 237, 175);
color:green;    padding:5px;
border:solid 2px ;
border-radius: 15px; 

    }

}
.bkger{
    background-color:rgba(25, 32, 15, 0.898);
    position:absolute;
    min-width:100%;
    min-height: 100%;
    z-index:15;
   

}
</style>