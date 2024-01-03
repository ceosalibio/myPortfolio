<template>
    <div>
      <v-card height="60vh">
        <v-card-text>
          <v-tabs v-model="activeTab" color="primary">
            <v-tab :value="1">Home</v-tab>
            <v-tab :value="2">Experience</v-tab>
            <v-tab :value="3">Skills</v-tab>
            <v-tab :value="4">Work</v-tab>
            <v-tab :value="5">Contact</v-tab>
          </v-tabs>
          <v-divider />
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
  import { ref } from 'vue';
  import HomeBody from '../body/Home.vue';
  import Experience from '../body/Experience.vue';
  // Import other components as needed
  
  export default {
    components: {
      HomeBody,
      Experience
      // Include other components here
    },
    setup() {
      const activeTab = ref(''); // Set default active tab
      const tabItems = [
        { value: 1, component: HomeBody },
        { value: 2, component: Experience },
        // Add other tab items as needed
      ];
  
      return {
        activeTab,
        tabItems
      };
    }
  };
  </script>
  