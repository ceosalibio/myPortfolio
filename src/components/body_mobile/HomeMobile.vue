<template>
    <div>
        <v-img :src="coverImage" />
        <v-row>
            <v-col cols="12" sm="12" md="12">
              <!-- <v-btn icon flat @click="backMain()" style="position: absolute; top: 10px; left: 10px; z-index: 1;">
                <v-icon color="primary">mdi-arrow-left-bold</v-icon>
              </v-btn> -->
              <v-row>
               
                  <v-col cols="12">
                    <v-card 
                      class="custom-card" 
                      elevation="2"
                    >
                      <v-row class="text-center">
                        <v-col style="background-color:rgb(31, 45, 68)">
                          <v-avatar
                            :image="profilePhoto"
                            size="100"
                            class="image-photo mt-2"
                          >
                          </v-avatar>
                          <div class="name">
                            <h3 >ARCEO JR. S. SALIBIO</h3>
                            <span><small>Full Stack Developer</small></span>
                          </div>
                          
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <About  />
                        </v-col>
                      </v-row>
                  
                    </v-card>
                  </v-col>
              </v-row>
            </v-col>
          </v-row>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
 import imageFull from '../../assets/images/fullstack.png';
 import photo from '../../assets/images/26591.jpg';
 import About from './AboutMe.vue';
 
 import {ref ,onMounted, watch} from 'vue';
export default {
    components:{
        About
    },
    emits: ['mainPage'],
    setup () {
        const router = useRouter();
        const coverImage = ref(imageFull)
        const profilePhoto = ref(photo);

        const backMain = () =>{
            router.push({name : 'home'})
            emit('mainPage');
        }
        return {
            coverImage,
            backMain,
            profilePhoto
        }
    }
}
</script>

<style>

</style>