<template>
  <main-page />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import MainPage from '@/components/MainPage.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    MainPage,
  },
});
</script>
<style scoped>
.main-container {
  font-family: 'Poppins', sans-serif;
}
</style>
