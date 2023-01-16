<template>
    <div>

    <p>MEnu Test -Catalogue length: {{ store.catalogue.length }} items</p>
<div class="container border p-4">


<ul>
<li
v-for="( item, index) in store.catalogue" :key="index"
>






<router-link :to="{path:'visorson/'+ index,params:{id:index}}">
<div class="container bg-success mt-1">

{{ item.name }}

</div>
</router-link>
</li>
</ul>
</div>
    </div>
</template>

<script>


import { useCatalogueStore } from '../stores/catalogueStore';
const store = useCatalogueStore();
    export default {
        name:'MenuFather',
         data(){
            return{
                        store
            }
         }
    }
</script>

<style lang="scss" scoped>

</style>