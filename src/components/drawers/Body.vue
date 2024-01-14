<template>
    <div>
      <!-- d-flex d-sm-flex d-md-none (small)// d-md-block d-lg-block d-xl-block  (medium to xl)-->
      <v-card height="90vh">
        <v-card-text>
          <v-img :src="coverImage" class="image-fit" height="30vh"/>
          <v-divider></v-divider>
          <v-tabs v-model="activeTab" color="primary" align-tabs="center">
            <v-tab :value="1" class="tab-font">Home</v-tab>
            <v-tab :value="2" class="tab-font">Experience</v-tab>
            <v-tab :value="3" class="tab-font">Skills</v-tab>
            <!-- <v-tab :value="4" class="tab-font">Work</v-tab> -->
            <v-tab :value="5" class="tab-font">Contact</v-tab>
          </v-tabs>
          <v-divider />
          <br>
          <v-window v-model="activeTab">
               <v-window-item v-for="(tabItem, index) in tabItems" :key="index" :value="tabItem.value">
                <component :is="tabItem.component" />
               </v-window-item>
            </v-window>
        </v-card-text>
      </v-card>
    </div>
  </template>
  
  <script>
  import imageFull from '../../assets/images/fullstack.png';
  import { ref } from 'vue';
  import HomeBody from '../body/Home.vue';
  import Experience from '../body/Experience.vue';
  import Skills from '../body/Skills.vue';
  import Contact from '../body/Contact.vue';
  // Import other components as needed
  
  export default {
    components: {
      HomeBody,
      Experience
      // Include other components here
    },
    setup() {
      const coverImage = ref(imageFull)
      const activeTab = ref(''); // Set default active tab
      const tabItems = [
        { value: 1, component: HomeBody },
        { value: 2, component: Experience },
        { value: 3, component: Skills },
        { value: 5, component: Contact },
        // Add other tab items as needed
      ];
  
      return {
        activeTab,
        tabItems,
        coverImage
      };
    }
  };
  </script>
  <style>
  .tab-font{
    font-weight:bold;
  }
  </style>
  