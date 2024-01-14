<template>
    <div>
        <v-main><Home /></v-main>
    </div>
</template>

<script>
import {ref ,onMounted, watch} from 'vue';
import Home from './HomeMobile.vue';
export default {
   components:{
        Home
   },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>