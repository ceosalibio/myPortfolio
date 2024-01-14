<template>
  <!-- d-flex d-sm-flex d-md-none (small)// d-md-block d-lg-block d-xl-block  (medium to xl)-->
    <div class="home-container d-none d-md-block d-lg-block d-xl-block">
      <!-- md to XL view -->
        <v-container fluid fill-height>
          <v-row v-if="!overlay">
            <v-col cols="12" sm="12" md="12">
              <v-btn icon flat @click="backMain()" style="position: absolute; top: 10px; left: 10px; z-index: 1;">
                <v-icon color="primary">mdi-arrow-left-bold</v-icon>
              </v-btn>
              <v-row>
                <v-col cols="3">
                  <v-col cols="12" lg="12" xl="12">
                    <v-card 
                      class="custom-card" 
                      elevation="2"
                      height="90vh"
                    >
                      <v-row class="text-center">
                        <v-col style="background-color:rgb(31, 45, 68)">
                          <v-avatar
                            :image="profilePhoto"
                            size="150"
                            class="image-photo mt-10"
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
                </v-col>
      
                <v-col cols="9">
                  <v-col cols="12" sm="12" md="12" lg="12" xl="12">
                    
                    <BodyPage  />
                  </v-col>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          
        </v-container>   
     
        <v-overlay  
            :model-value="overlay"
            class="align-center justify-center"
          >
            <v-progress-circular
              color="primary"
              indeterminate
              size="64"
            />
          </v-overlay>
    </div>
    <div  class="d-flex d-sm-flex d-md-none mobile-container">
    <v-container>
      <MobilePages  />
    </v-container>
    <v-overlay  
        :model-value="overlay"
        class="align-center justify-center"
      >
        <v-progress-circular
          color="primary"
          indeterminate
          size="64"
        />
      </v-overlay>
</div>

</template>

<script>
import { useRouter } from 'vue-router';
import {ref ,onMounted, watch} from 'vue';
import photo from '../../assets/images/26591.jpg';
import About from './AboutMe.vue';
import CoverPage from './Cover.vue';
import BodyPage from './Body.vue';
import {storeData} from '@/store/pinia.js'

// for mobile components
import MobilePages from './MobilePages.vue';
export default {
    components:{
        About,
        CoverPage,
        BodyPage,
        MobilePages
    },
    setup () {
        const router = useRouter();
        const store = storeData();
        const profilePhoto = ref(photo);
        const overlay = ref(true)
    


        const backMain = () =>{
            router.push({name : 'home'})
            store.routeName = 'home'
        }

  

        onMounted(() => {
            setTimeout(() => {
                overlay.value = false
            }, 2000);
        })
        
        return {
            backMain,
            overlay,
            profilePhoto,
            About,
            
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
  height: calc(100vh); /* Adjust 20px to accommodate padding, margins, etc. */
  max-height: 100%; /* Ensure the card doesn't exceed viewport height */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Space between cards */
}

.mobile-container{
  background-color:whitesmoke;
}
.custom-card {
  transition: transform 0.3s ease-in-out; /* for zoom effect */
  flex : 1;
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

.name{
  color:antiquewhite
}
</style>