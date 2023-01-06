<template>
    <br />
    <br />
    <div>
<h1>BetaZone</h1>

<hr />
<br />
<div class="container  bg-light  p-4">FULL CATALOGUE</div>
<div class="iconer container d-flex p-4 ">
<div><img class='icons' src="@/assets/icon_comics.png" />
<p>comics</p></div>

<div><img class='icons' src="@/assets/icon_pencil.png" />
<p>drawings</p></div>

<div><img class='icons' src="@/assets/icon_canvas.png" />
<p>paintings</p></div>

<div><img class='icons' src="@/assets/icon_sculpture.png" />
<p>sculptures</p></div>

<div><img class='icons' src="@/assets/icon_music.png" />
<p>music</p></div>


</div>


    </div>
</template>

<script>


    export default {
        name:'BetaZone',
        components:{
        
        }
    }
</script>

<style lang="css" scoped>
.icons{
    width: 75px;
    padding:10px;
}
p{
    font-size: 6px;
    color:black;
}
.iconer{
    justify-content:space-between;
}
</style>