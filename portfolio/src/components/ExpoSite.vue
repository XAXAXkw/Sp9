<template>
    <div>
 VALUE: {{  value + 1}}
 <button @click="isVisible=!isVisible">toggle</button>
<h1 >{{ greeting }}</h1>
<div class="container bg-danger" v-if="isVisible">YEAAAAG!HHHH!</div>
    </div>
</template>

<script>
    export default {
        name:'ExpoSite',
        data(){
            return{
                value:665,greeting:'Eres BOBO',isVisible:true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>