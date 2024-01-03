<template>
    <!-- <v-app id="inspire"> -->
  
        <!-- <v-main id="home"><HomePage /> </v-main> -->
        <!-- class="d-none d-md-block d-lg-block d-xl-block" -->
        <!-- <v-main id="home"><HomePageM class="d-flex d-sm-flex d-md-none"/> </v-main> -->

         <!-- <SystemTop />
        <v-main id="services" style="background: #9d4ffd"><MyServices /></v-main>
        <SystemBottom /> -->

       <!-- <v-main id="about"><AboutMe /> </v-main> -->

        <!-- <TaskTop />
        <SystemBottom style="background-color:whitesmoke"/>

        <v-main id="resume" style="background-color:whitesmoke"><MyResume /> </v-main>
        <TaskTop style="background-color:whitesmoke"/>
        <TaskBottom />

        <v-main id="programmers"> </v-main>

        <FooterTop />
        <v-main style="background: #9d4ffd"> </v-main> -->

        <!-- <FeedbackDialog v-model="feedbackDialog" /> -->

        <!-- <v-fab-transition>
            <v-btn
                @click="feedbackDialog = true"
                large
                plain
                fixed
                dark
                bottom
                right
                fab
                class="ma-10"
            >
                <v-img
                    width="50"
                    height="50"
                    src="/PSL_MONITORING/public/images/feedback1.gif"
                >
                </v-img>
            </v-btn>
        </v-fab-transition> -->
   
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
    <!-- </v-app> -->
</template>

<script>
// import HomePage from "./pages/HomePage.vue";
// import HomePageM from "./mobilepages/HomePage";
// import MyServices from "./pages/MyServices.vue";
// import AboutMe from "./pages/AboutMe.vue";
// import MyResume from "./pages/MyResume";
// import SystemTop from "./svg/SystemTop.vue";
// import SystemBottom from "./svg/SystemBottom.vue";
// import TaskTop from "./svg/TaskTop";
// import TaskBottom from "./svg/TaskBottom";
// import FooterTop from "./svg/FooterTop";

//dialog
// import FeedbackDialog from "./dialogs/feedback/FeedbackDialog";
import {ref,onMounted } from 'vue';
import { useRouter } from 'vue-router';
export default {
    // components: {
    //     HomePage,
    //     // HomePageM,
    //     MyServices,
    //     AboutMe,
    //     // MyResume,
    //     SystemTop,
    //     SystemBottom,
    //     // TaskTop,
    //     // TaskBottom,
  
    //     // FooterTop,

   
    // },
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
#services {
    position: relative;
    z-index: 1;
  }
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