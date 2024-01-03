<template>
    <v-container>
        <div class="mb-16">
            <!-- show if mobile -->
            <v-row  class="d-flex d-sm-flex d-md-none">
                <v-col cols="12">
                    <center>
                        <v-img
                            transition="slide-x-reverse-transition"
                            :src="homeImage"
                            height="50%"
                            width="70%"
                        ></v-img>
                    </center>
                </v-col>
                <v-col  cols="12" class="d-flex flex-column justify-center" >
                    <center>
                        <h3>Hi! I'm</h3>
                        <h2 style="font-size:35px;">Ceo Salibio</h2>
                        <span style="color: #9d4ffd;font-size:30px;">
                            <span class="typed-text">{{ typeValue }}</span>
                            <span class="blinking-cursor">|</span>
                            <span class="cursor" :class="{ typing: typeStatus }"
                                >&nbsp;</span
                            >
                        </span>
                        <p class="subtitle-1">
                            “Most good programmers do programming not because they
                            expect to get paid or get adulation by the public, but
                            because it is fun to program.” ? Linus Torvalds
                        </p>
                    </center>
                </v-col>
            </v-row>

            <!-- if wide screen  -->
            <div class="d-none d-md-block d-lg-block d-xl-block">
                <v-row>
                    <v-col cols="6" class="d-flex flex-column justify-center">
                        <h3>Hi! I'm</h3>
                        <h1>Ceo Salibio</h1>
                        <span style="color: #9d4ffd;font-size:40px;">
                            <span class="typed-text">{{ typeValue }}</span>
                            <span class="blinking-cursor">|</span>
                            <span class="cursor" :class="{ typing: typeStatus }"
                                >&nbsp;</span
                            >
                        </span>
                        <p class="subtitle-1">
                            “Most good programmers do programming not because they
                            expect to get paid or get adulation by the public, but
                            because it is fun to program.” ? Linus Torvalds
                        </p>
                    </v-col>
    
                    <v-col cols="6" >
                        <center>
                            <v-img
                                transition="slide-x-reverse-transition"
                                :src="homeImage"
                                max-height="70%"
                                max-width="70%"
                            ></v-img>
                        </center>
                        
                    </v-col>
                </v-row>
            </div>
        </div>
    </v-container>
</template>

<script>
import {ref,onMounted } from 'vue';
import image from '../../assets/images/26591.jpg';
export default {
    setup() {
        const  chartOptions = ref({
            chart: {
                type: "donut",
            },
            labels: ["Under Maintenance", "Ongoing System"],
            legend: {
                position: "bottom",
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: "bottom",
                        },
                    },
                },
            ],
        })
        const typeValue =  ref("");
        const typeStatus =  ref(false);
        const displayTextArray =  ref([ "I am a Web Developer", "a Freelancer"]);
        const typingSpeed =  ref(100);
        const erasingSpeed =  ref(100);
        const newTextDelay =  ref(2000);
        const displayTextArrayIndex =  ref(0);
        const charIndex =  ref(0);
        const homeImage = ref(image);

        

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

        onMounted(()=>{
            setTimeout(typeText, newTextDelay.value + 200);
        }) 

        return {
            chartOptions,
            typeText,
            eraseText,
            typeValue,
            typeStatus,
            homeImage,
            displayTextArray,
            displayTextArrayIndex,
            typingSpeed,
            erasingSpeed,
            newTextDelay,
            charIndex
        }

        


    }
    // data: () => ({
    //     // ...mapActions(["getSystems"]),

    //     chartOptions: {
    //         chart: {
    //             type: "donut",
    //         },
    //         labels: ["Under Maintenance", "Ongoing System"],
    //         legend: {
    //             position: "bottom",
    //         },
    //         responsive: [
    //             {
    //                 breakpoint: 480,
    //                 options: {
    //                     chart: {
    //                         width: 200,
    //                     },
    //                     legend: {
    //                         position: "bottom",
    //                     },
    //                 },
    //             },
    //         ],
    //     },

    //     typeValue: "",
    //     typeStatus: false,
    //     displayTextArray: [ "I'm a Web  Developers", "I'm a Freelancer"],
    //     typingSpeed: 100,
    //     erasingSpeed: 100,
    //     newTextDelay: 2000,
    //     displayTextArrayIndex: 0,
    //     charIndex: 0,
    //     homeImage:image
    // }),

    // methods: {
    //     typeText() {
    //         if (
    //             this.charIndex <
    //             this.displayTextArray[this.displayTextArrayIndex].length
    //         ) {
    //             if (!this.typeStatus) this.typeStatus = true;
    //             this.typeValue += this.displayTextArray[
    //                 this.displayTextArrayIndex
    //             ].charAt(this.charIndex);
    //             this.charIndex += 1;
    //             setTimeout(this.typeText, this.typingSpeed);
    //         } else {
    //             this.typeStatus = false;
    //             setTimeout(this.eraseText, this.newTextDelay);
    //         }
    //     },
    //     eraseText() {
    //         if (this.charIndex > 0) {
    //             if (!this.typeStatus) this.typeStatus = true;
    //             this.typeValue = this.displayTextArray[
    //                 this.displayTextArrayIndex
    //             ].substring(0, this.charIndex - 1);
    //             this.charIndex -= 1;
    //             setTimeout(this.eraseText, this.erasingSpeed);
    //         } else {
    //             this.typeStatus = false;
    //             this.displayTextArrayIndex += 1;
    //             if (this.displayTextArrayIndex >= this.displayTextArray.length)
    //                 this.displayTextArrayIndex = 0;
    //             setTimeout(this.typeText, this.typingSpeed + 1000);
    //         }
    //     },
    // },

    // computed: {


    
    // },

    // created() {
    //     setTimeout(this.typeText, this.newTextDelay + 200);
    // },

    // mounted() {
    // },
};
</script>

<style scoped>
h1 {
    font-size: 5rem;
    font-weight: bold;
    line-height: 0.9em;
    margin-bottom: 0.8rem;
}

.blinking-cursor {
    font-size: 5rem;
    color: #2c3e50;
    -webkit-animation: 1s blink step-end infinite;
    -moz-animation: 1s blink step-end infinite;
    -ms-animation: 1s blink step-end infinite;
    -o-animation: 1s blink step-end infinite;
    animation: 1s blink step-end infinite;
}


@keyframes blink {
    from,
    to {
        color: transparent;
    }
    50% {
        color: #2c3e50;
    }
}
@-moz-keyframes blink {
    from,
    to {
        color: transparent;
    }
    50% {
        color: #2c3e50;
    }
}
@-webkit-keyframes blink {
    from,
    to {
        color: transparent;
    }
    50% {
        color: #2c3e50;
    }
}
@-ms-keyframes blink {
    from,
    to {
        color: transparent;
    }
    50% {
        color: #2c3e50;
    }
}
@-o-keyframes blink {
    from,
    to {
        color: transparent;
    }
    50% {
        color: #2c3e50;
    }
}
    .rounded-img-container {
    border-radius: 50%; /* Make the container rounded */
    overflow: hidden; /* Hide overflow to maintain rounded shape */
   
  }
  
  .rounded-img {
    width: 100%; /* Ensure the image fills its container */
    height: auto; /* Maintain aspect ratio */
  }
</style>
