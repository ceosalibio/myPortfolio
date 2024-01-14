<template>
    <div>
        <v-app id="inspire">
            <v-main id="home"><About /></v-main>
            <v-main id="home"><Home /></v-main>
            <v-main id="experience"><Experiences /></v-main>
            <v-main id="skills"><Skills /></v-main>
            <v-main id="contact"><Contacts /></v-main>
        </v-app> 
    </div>
</template>

<script>
import {ref ,onMounted, watch} from 'vue';
import About from '../body_mobile/HomeMobile.vue';
import Home from '../body_mobile/Welcome.vue';
import Experiences from '../body_mobile/Experiences.vue';
import Skills from '../body_mobile/Skills.vue';
import Contacts from '../body_mobile/Contacts.vue';
export default {
   components:{
        About,
        Home,
        Experiences,
        Skills,
        Contacts,
   },
    setup () {
        

        return {}
    }
}
</script>

<style>
.name{
    color:antiquewhite
  }
</style>