<template>
    <div>

  


<div v-if="showV"
@click="showV=false"
class="wrapped">



<div class="topper">
    <div class="container border border-success m-4 p-4 ">
    
    <h1>VISOR</h1>
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
                showV:false
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrapped{
    background-color: rgba(9, 19, 15, 0.958);
    min-width: 100%;
    min-height: 100%;
    margin:0;
    position:absolute;
    z-index:1;

}
.topper{
    position:absolute;
    z-index:10;
}

</style>