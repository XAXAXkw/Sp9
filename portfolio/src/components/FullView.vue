<template>
    <div v-if="seeMe" class="viewer">
full view <label for="customRange2" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" id="customRange2">

<div class="container m-auto align-self-center"></div>
<input type="number" id="inputNum"/>
<img src="../assets/paint/pintura_bomba.png" id="pikto"  @click="seeMe=false"/>

<input type=range value=1 max=3 min=1 onchange="zoom('hulk',this.value);">

<br>

<img id="hulk" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/The_raging_hulk_-_Flickr_-_Stiller_Beobachter.jpg/2880px-The_raging_hulk_-_Flickr_-_Stiller_Beobachter.jpg" 
alt="green guy" width=320>
    </div>
</template>

<script>


    export default {
        name:'FullView',
        data(){
            return{
                seeMe:false
            }
        },
        methods:{
            fillPic(){
                return "../assets/paint/pintura_bomba.png"
            },
            zoom(_target,_scale) {
  document.getElementById(_target).style.transform = "scale("+_scale+")";
},


        }

    }
</script>

<style lang="scss" >
.viewer{
position:absolute;
z-index:99;
margin:0;
padding:0;
min-width:100%;
}


</style>