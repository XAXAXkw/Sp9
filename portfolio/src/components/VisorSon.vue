<template>
    <div>
<p> {{  store.catalogue[this.$route.params.id].name }}</p>
<a @click="$router.go(-1)">
<img :src="store.catalogue[this.$route.params.id].src" /></a>
    </div>
</template>

<script>

import { useCatalogueStore } from '../stores/catalogueStore';

const store = useCatalogueStore();

    export default {
        name:'VisorSon',
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
img{
    width:100%;
}

</style>