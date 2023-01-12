<template>
    <div>

  


<div 
v-if="visorStatus"
class="wrapped"

>



<div class="topper">

<div class="container">


</div>
    <div class="container border border-success m-4 p-4 "

    >
    
    <h4>VISOR</h4>

<button
@click="visorStatus=false"
>CLOSE</button>

    </div>
<div class="container border">100

</div>

</div>





</div>




</div>

</template>

<script>



    export default {
        name:'VisorComp',
        data(){
            return{

            }
        },
     
    }
</script>

<style lang="scss" >
.wrapped{
    background-color: rgba(9, 19, 15, 0.958);
    min-width: 100%;
    min-height: 1000em !important;
    margin:0;
    float: inline-start;
    position:absolute;
    z-index:100;
    max-width: 100%;

}
.topper{
    position:absolute;
    z-index:100;
}


</style>