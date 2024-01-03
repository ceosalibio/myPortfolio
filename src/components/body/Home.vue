<template>
    <div>
        <br>
        <v-container>
            <v-row>
                <v-col cols="6">
                    <h3>HELLO IT'S CEO</h3>
                    <br>
                    <p>
                        Greetings! I'm Arceo Jr. S. Salibio, your dedicated Full Stack Web Developer <br>with over 5 years of extensive experience crafting seamless online experiences.<br>
                        Specializing in both back-end and front-end development,<br> I bring a wealth of expertise in technologies like PHP, Node.js, and Laravel <br>
                        for robust back-end solutions, complemented by my mastery in JavaScript <br>
                        and Vue.js to create stunning, intuitive front-end interfaces.<br>
                        Partner with me to elevate your digital presence <br>
                        and unlock the full potential of your online ventures.
                    </p>
                </v-col>
                <v-col cols="6" class="text-center" style="background-color:antiquewhite">
                    <br>
                    <h2>MY SERVICES</h2>
                    <br>
                    <br>
                    <v-carousel 
                        show-arrows="hover" 
                        hide-delimiters 
                        cycle 
                        height="40vh"
                    >
                        <v-carousel-item v-for="(item,i) in listService" :key="i">
                            <v-row justify="center"> <!-- Centering content horizontally -->
                                <v-col cols="12" sm="8" md="10" class="text-center">
                                    <v-card elevation="5" > <!-- Adjust width and height as needed -->
                                      
                                        <v-card-title class="d-flex justify-center">
                                            <v-icon color="primary" large>{{ item.icon }}</v-icon>
                                            <b style="font-size: 25px;">{{ item.title }}</b>
                                        </v-card-title>
                                        <v-divider></v-divider>
                                        <br>
                                        <br> <!-- Adding a divider for better separation -->
                                        <v-card-text style="font-size: 18px;">{{ item.subtitle }}</v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
        </v-container>
        
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    setup () {
        const listService = ref ([
                        {icon:'mdi-xml',title:'Web Development',subtitle:'Building modern and responsive websites that leave a lasting impression \n. From concept to launch, I craft intuitive user experiences with clean code and cutting-edge technologies.'},
                        {icon:'mdi-head-lightbulb-outline',title:'Data Analyst',subtitle:'Uncovering valuable insights from complex data sets. Leveraging data visualization and advanced analytics to drive data-driven decisions and empower businesses with actionable intelligence.'},
                        {icon:'mdi-account-group-outline',title:'Team Extension',subtitle:'Building modern and responsive websites that leave a lasting impression. From concept to launch, I craft intuitive user experiences with clean code and cutting-edge technologies.'},
                        {icon:'mdi-wrench-clock',title:'Maintenance and Support',subtitle:'Ensuring your digital assets run smoothly and stay up-to-date. I provide reliable maintenance and timely support to keep your applications and systems running at their best, allowing you to focus on your core business.'}
                    ])

        return {
            listService
        }
    }
}
</script>

<style scoped>

</style>