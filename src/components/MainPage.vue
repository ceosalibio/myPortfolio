<template>
  <v-app id="inspire">
    <v-container fluid class="fill-height d-flex align-center justify-center">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="4">
          <v-card flat>
            <v-card-title class="text-center">
                  <h3>Hi! I am</h3>
                  <h1 >Ceo Salibio</h1>
                  <span style="color: #9d4ffd;font-size:30px;">
                      <span class="typed-text">{{ typeValue }}</span>
                      <span class="blinking-cursor">|</span>
                      <span class="cursor" :class="{ typing: typeStatus }"
                          >&nbsp;</span
                      >
                  </span>
            </v-card-title>
            <v-card-text class="text-center">
              <p class="subtitle-1">
                  "Welcome! 👋 I'm passionate about crafting digital experiences.
                    Explore my portfolio to see how I turn ideas into captivating websites and applications.
                    Let's collaborate and bring your visions to life!"
              </p>
              <br />
              <v-btn color="primary" medium @click="goTo()">LETS STARTS</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import {ref,onMounted } from 'vue';
import { useRouter } from 'vue-router';
import {storeData} from '@/store/pinia.js'
export default {
    setup() {
        const router = useRouter();
        const typeValue =  ref("");
        const typeStatus =  ref(false);
        const displayTextArray =  ref([ "I am a Web Developer", "a Freelancer"]);
        const typingSpeed =  ref(100);
        const erasingSpeed =  ref(100);
        const newTextDelay =  ref(2000);
        const displayTextArrayIndex =  ref(0);
        const charIndex =  ref(0);
        const store = storeData()

         // method
         const typeText = () => {
            let currentText = displayTextArray.value[displayTextArrayIndex.value];
            if (charIndex.value < currentText.length) {
                if (!typeStatus) typeStatus.value = true;
                typeValue.value += currentText.charAt(charIndex.value);
                charIndex.value += 1;
                setTimeout(typeText, typingSpeed.value);
            } else {
                typeStatus.value = false;
                setTimeout(eraseText, newTextDelay.value);
            }
        }

        const eraseText = () => {
            let currentText = displayTextArray.value[displayTextArrayIndex.value];
            if (charIndex.value > 0) {
                if (!typeStatus) typeStatus.value = true;
                typeValue.value = currentText.substring(0, charIndex.value - 1);
                charIndex.value -= 1;
                setTimeout(eraseText, erasingSpeed.value);
            } else {
                typeStatus.value = false;
                displayTextArrayIndex.value += 1;
                if (displayTextArrayIndex.value >= displayTextArray.value.length)
                    displayTextArrayIndex.value = 0;
                setTimeout(typeText, typingSpeed.value + 1000);
            }
        } 

        const goTo = () =>{
            router.push({name : 'main'})
            store.routeName = 'main'
  
        }

        onMounted(()=>{
            setTimeout(typeText, newTextDelay.value + 200);
            
        }) 

        return {
            typeText,
            eraseText,
            goTo,
            typeValue,
            typeStatus,
            displayTextArray,
            displayTextArrayIndex,
            typingSpeed,
            erasingSpeed,
            newTextDelay,
            charIndex
        }
    }

};
</script>
<style scoped>

  .text-center {
    text-align: center;
  }
  .fill-height {
    height: 100vh;
  }
  .align-center {
    align-items: center;
  }
  .justify-center {
    justify-content: center;
  }
  .d-flex {
    display: flex;
  }
</style>