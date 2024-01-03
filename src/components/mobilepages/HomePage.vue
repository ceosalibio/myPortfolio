<template>
    <v-container>
        <div class="mb-16">
            <v-row>
                <v-col >
                    <v-img
                        transition="slide-x-reverse-transition"
                        width="100%"
                        height="100%"
                        :src="homeImage"
                    ></v-img>
                </v-col>
                <v-col cols="12">
                    <center>
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
                            because it is fun to program.” – Linus Torvalds
                        </p>
                    </center>
                </v-col>

                <!-- <v-col cols="6" v-show="!isMobile">
                    <v-img
                        transition="slide-x-reverse-transition"
                        width="100%"
                        height="100%"
                        :src="homeImage"
                    ></v-img>
                </v-col> -->
            </v-row>
        </div>
    </v-container>
</template>

<script>
// import { program } from "@babel/types";
import {  mapState } from "vuex";
export default {
    data: () => ({
        // ...mapActions(["getSystems"]),

        chartOptions: {
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
        },

        typeValue: "",
        typeStatus: false,
        displayTextArray: [ "I'm a Web  Developers", "I'm a Freelancer"],
        typingSpeed: 100,
        erasingSpeed: 100,
        newTextDelay: 2000,
        displayTextArrayIndex: 0,
        charIndex: 0,
        homeImage:require('../../assets/images/person.png')
    }),

    methods: {
        typeText() {
            if (
                this.charIndex <
                this.displayTextArray[this.displayTextArrayIndex].length
            ) {
                if (!this.typeStatus) this.typeStatus = true;
                this.typeValue += this.displayTextArray[
                    this.displayTextArrayIndex
                ].charAt(this.charIndex);
                this.charIndex += 1;
                setTimeout(this.typeText, this.typingSpeed);
            } else {
                this.typeStatus = false;
                setTimeout(this.eraseText, this.newTextDelay);
            }
        },
        eraseText() {
            if (this.charIndex > 0) {
                if (!this.typeStatus) this.typeStatus = true;
                this.typeValue = this.displayTextArray[
                    this.displayTextArrayIndex
                ].substring(0, this.charIndex - 1);
                this.charIndex -= 1;
                setTimeout(this.eraseText, this.erasingSpeed);
            } else {
                this.typeStatus = false;
                this.displayTextArrayIndex += 1;
                if (this.displayTextArrayIndex >= this.displayTextArray.length)
                    this.displayTextArrayIndex = 0;
                setTimeout(this.typeText, this.typingSpeed + 1000);
            }
        },
    },

    computed: {

        ...mapState(["isMobile"]),

    
    },

    created() {
        setTimeout(this.typeText, this.newTextDelay + 200);
    },

    mounted() {
    console.log(this.isMobile,'try2')
    },
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
</style>
