<template>
    <div>

 <p
 class="thingreen align-middle"
 @click="visorStatus=!visorStatus"
 >VisorStatus <span class="redneon">{{ visorStatus }}</span></p>


<div 
v-if="visorStatus"
class="wrapped"

>



<div class="topper">

<div class="container">


</div>
    <div class="container border border-success m-4 p-4 "

    >
    
    <h4>3D VISOR</h4>

<button
@click="visorStatus=false"
>CLOSE</button>

    </div>
<div class="container border">100

</div>
<div class="sketchfab-embed-wrapper"> <iframe title="Headmouse" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/56ea7b4579634282934a80d930d9120a/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/headmouse-56ea7b4579634282934a80d930d9120a?utm_medium=embed&utm_campaign=share-popup&utm_content=56ea7b4579634282934a80d930d9120a" target="_blank" style="font-weight: bold; color: #1CAAD9;"> Headmouse </a> by <a href="https://sketchfab.com/xaxax?utm_medium=embed&utm_campaign=share-popup&utm_content=56ea7b4579634282934a80d930d9120a" target="_blank" style="font-weight: bold; color: #1CAAD9;"> xaxax </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=56ea7b4579634282934a80d930d9120a" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
</div>





</div>




</div>

</template>

<script>



    export default {
        name:'VisorComp',
        
        data(){
            return{
visorStatus:false
            }
        },
     
    }
</script>

<style lang="scss" >
.wrapped{
    background-color: rgba(9, 19, 15, 0.958);
    min-width: 800px;
    min-height: 1000em !important;
    margin:0;

    position:absolute;
    z-index:1;


}
.topper{
    position:absolute;
    z-index:100;
}


</style>