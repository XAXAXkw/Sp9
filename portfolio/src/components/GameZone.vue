<template>
    <div>
<canvas>
</canvas>
    </div>
</template>

<script>
/*

*/



    export default {
        name:'GameZone',
        data(){
            return{
                
            }
        },
        created(){
const canvas=document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width=1024
canvas.height=100

c.fillRect(0,0,canvas.width,canvas.height)
        }
    }
</script>

<style lang="scss" scoped>

</style>