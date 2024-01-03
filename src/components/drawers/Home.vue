<template>
    <div class="home-container">
        <v-btn icon flat @click="backMain()" style="position: absolute; top: 10px; left: 10px; z-index: 1;">
          <v-icon color="primary">mdi-arrow-left-bold</v-icon>
        </v-btn>
        <v-row>
          <v-col cols="3">
            <v-col cols="12" sm="12" md="12" lg="12" xl="12">
              <v-card 
                height="93vh" 
                class="custom-card" 
                @mouseover="addEffect" 
                @mouseleave="removeEffect"
                elevation="2"
              >
                <v-row class="text-center">
                  <v-col style="background-color:aquamarine;">
                    <v-avatar
                      :image="profilePhoto"
                      size="150"
                      class="image-photo mt-10"
                    >
                    </v-avatar>
                    <h3>ARCEO JR. S. SALIBIO</h3>
                    <span><small>Full Stack Developer</small></span>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <About  />
                  </v-col>
                </v-row>
            
              </v-card>
            </v-col>
          
          </v-col>

          <v-col cols="9">
            <v-col cols="12" sm="12" md="12" lg="12" xl="12">
              <CoverPage  />
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="12" xl="12">
              <BodyPage  />
            </v-col>
          </v-col>
        </v-row>
        
          <v-row >
           

            
        </v-row>
            
    </div>

</template>

<script>
import { useRouter } from 'vue-router';
import {ref} from 'vue';
import cover from '../../assets/images/desk.jpg';
import photo from '../../assets/images/26591.jpg';
import About from './AboutMe.vue';
import CoverPage from './Cover.vue';
import BodyPage from './Body.vue';
export default {
    components:{
        About,
        CoverPage,
        BodyPage
    },
    setup () {
        const router = useRouter();
        const coverImage = ref(cover);
        const profilePhoto = ref(photo);


        const backMain = () =>{
            router.push({name : 'home'})
        }

        const addEffect = (event)=>{
          // event.currentTarget.classList.add('zoom-effect')
          // OR Add shadow effect on hover
          event.currentTarget.classList.add('shadow-effect');
        }
        const removeEffect = (event) =>{
          // Remove zoom effect on hover out
          // event.currentTarget.classList.remove('zoom-effect');
          // OR Remove shadow effect on hover out
          event.currentTarget.classList.remove('shadow-effect');
        }

        return {
            backMain,
            addEffect,
            removeEffect,
            coverImage,
            profilePhoto,
            About
        }
    }
}
</script>

<style  scoped>

  .image-photo {
    z-index: 10;
    height: auto;
    border:2px solid black;
  
  }
  @media (max-width: 600px) {
    /* Adjustments for smaller screens */
    .image-photo {
      top: 5%;
      left: 0;
    }
  }
  
.home-container{
  background-color:whitesmoke;
}
.custom-card {
  transition: transform 0.3s ease-in-out; /* for zoom effect */
  /* OR */
  /* box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75); for shadow effect */
}

.zoom-effect {
  transform: scale(1.1); /* change the scale value for desired zoom effect */
}

/* OR */

.shadow-effect {
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75); /* change the shadow properties for desired effect */
}
</style>