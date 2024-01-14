<template>
    <div>
        <br>
        <!-- <v-container> -->
            <v-row>
                <v-col cols="12">
                        <v-card flat color="primary" >
                            <v-card-title>HELLO IT'S CEO</v-card-title>
                            <v-card-text class="custom-card">
                                <p>
                                    Greetings! I'm <strong>Arceo Jr. S. Salibio</strong>,  your dedicated Full Stack Web Developerwith over 5 years of extensive experience crafting seamless online experiences.
                                    Specializing in both back-end and front-end development, I bring a wealth of expertise in technologies like PHP, Node.js, and Laravel 
                                    for robust back-end solutions, complemented by my mastery in JavaScript 
                                    and Vue.js to create stunning, intuitive front-end interfaces.
                                    Partner with me to elevate your digital presence 
                                    and unlock the full potential of your online ventures.
                                </p>
                            </v-card-text>
                            
                        </v-card>
                </v-col>

                <v-col cols="12" >
                    <v-card flat color="primary" > 
                        <v-card-title  class="text-center">MY EXPERTISE</v-card-title>
                        <v-card-text class="custom-card">
                            <v-container>
                                <ul class="custom-list " density="1">
                                    <li v-for="(item,i) in expertise" :key="i" style="padding:0px;">
                                        {{ item }}
                                    </li>
                                </ul>
                            </v-container>
                          
                        </v-card-text>
                    </v-card>
                </v-col>
                
                <v-col cols="12"  class="text-center">
                    <v-card color="primary">
                        <v-card-title >MY SERVICES</v-card-title>
                        <v-carousel 
                            cycle
                            height="300"
                            hide-delimiter-background
                            show-arrows="hover"
                            class="custom-arrow"
                        >
                        
                            <v-carousel-item v-for="(item,i) in listService" :key="i">
                                <v-list class="custom-list">
                                    <v-icon size="50">{{ item.icon }}</v-icon>
                                    <h3>{{ item.title }}</h3>
                                    <br>
                                    <v-list-item>
                                        {{ item.subtitle }}
                                    </v-list-item>
                                </v-list>
                            </v-carousel-item>
                        </v-carousel>
                    </v-card>
                    
                </v-col>
            </v-row>
        <!-- </v-container> -->
        
    </div>
</template>

<script>
import {ref,onMounted, watchEffect, onBeforeUnmount} from 'vue'
export default {
    setup () {
        const listService = ref ([
                        {icon:'mdi-xml',title:'Web Development',subtitle:'Building modern and responsive websites that leave a lasting impression \n. From concept to launch, I craft intuitive user experiences with clean code and cutting-edge technologies.'},
                        {icon:'mdi-head-lightbulb-outline',title:'Data Analyst',subtitle:'Uncovering valuable insights from complex data sets. Leveraging data visualization and advanced analytics to drive data-driven decisions and empower businesses with actionable intelligence.'},
                        {icon:'mdi-account-group-outline',title:'Team Extension',subtitle:'Building modern and responsive websites that leave a lasting impression. From concept to launch, I craft intuitive user experiences with clean code and cutting-edge technologies.'},
                        {icon:'mdi-wrench',title:'Maintenance and Support',subtitle:'Ensuring your digital assets run smoothly and stay up-to-date. I provide reliable maintenance and timely support to keep your applications and systems running at their best, allowing you to focus on your core business.'}
                    ])
        const expertise = ref([
            'Full Stack Web Developer',
            'API design knowledge',
            'Testing and debugging',
            'Installation and maintenance',
            'User requirements',
            'Cloud-based software development',
            'Relational databases',
            'Project coordination',
            'Usability understanding',
            'Iterative Methodology',
            'Local Deployment of Web-based system'
        ])

       

        // const handleResize = () => {
        //     console.log(`Window width: ${window.innerWidth}, Height: ${window.innerHeight}`);
        //     // Perform actions based on screen size changes
        //     };

        // watchEffect((onInvalidate) => {
        //     window.addEventListener('resize', handleResize);
        //     onInvalidate(() => {
        //         window.removeEventListener('resize', handleResize);
        //     });
        // });
        

        return {
            listService,
            expertise
        }
    }
}
</script>

<style scoped>
.my-custom-item {
    padding-bottom: 0;
    margin-top: 0;
    margin-bottom: 0;
  }
  .custom-card {
    height: 300px; /* Set your desired default height */
    overflow: auto; /* Enable scrolling for overflow content */
  }
  .custom-list {
    background-color: var(--v-primary-base); /* Apply primary color to v-list */
    color: white;
  }
  .custom-arrow {
    /* Customize your arrow styles here */
    color: rgb(22, 16, 16); /* Example: Change arrow color to black */
    /* Additional customizations */
  }
  .no-padding {
    padding: 0 !important;
    margin: 0 !important;
  }
</style>