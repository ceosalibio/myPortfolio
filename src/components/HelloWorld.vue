<template>
  <v-container>
    {{ title.toUpperCase() }}
    <v-btn @click="newTest">clickme</v-btn>
  </v-container>
</template>

<script>
import { ref } from 'vue';
import { storeData } from '@/store/pinia';

export default {
  name: 'HelloWorld',
  setup() {
    const title = ref('');
    const storePinia = storeData();

    // method
    const newTest = () =>{
      title.value = storePinia.sample
    }




    return {
      title,
      storePinia,
      newTest
    };
  },

};
</script>