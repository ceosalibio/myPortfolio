<template>
    <div>
        <h1 style="text-align:center;color:whitesmoke;font-size:40px;">SERVICES</h1>
        <v-container>
            <ul :class="!isMobile?'no-dot-list d-flex flex-row':'no-dot-list d-flex flex-column'" >
                <li v-for="(item , index) in listService" :key="index">
                    <v-col cols="12" md="12" lg="12" xl="12">
                        <v-card elevation="3" :height="window <= 1900 && !isMobile?'500px':'300px'">
                            <v-card-title class="d-flex justify-center" :style="window <= 1900 && !isMobile?'font-size:15px':item.title == 'Maintenance and Support'?'font-size:18px':'font-size:24px'">
                                <v-icon color="primary" large>{{ item.icon }}</v-icon>
                                <b>{{ item.title }}</b>
                            </v-card-title>
                            <br>
                            <v-card-subtitle style="font-size:15px;">{{ item.subtitle }}</v-card-subtitle>
                        </v-card>
                    </v-col>
                    
                </li>
            </ul>
        </v-container>
    </div>
</template>

<script>
import { mapState } from 'vuex';
    export default {
        data:()=>({
            listService:[
                        {icon:'mdi-xml',title:'Web Development',subtitle:'Building modern and responsive websites that leave a lasting impression. From concept to launch, I craft intuitive user experiences with clean code and cutting-edge technologies.'},
                        {icon:'mdi-head-lightbulb-outline',title:'Data Analyst',subtitle:'Uncovering valuable insights from complex data sets. Leveraging data visualization and advanced analytics to drive data-driven decisions and empower businesses with actionable intelligence.'},
                        {icon:'mdi-account-group-outline',title:'Team Extension',subtitle:'Building modern and responsive websites that leave a lasting impression. From concept to launch, I craft intuitive user experiences with clean code and cutting-edge technologies.'},
                        {icon:'mdi-wrench-clock',title:'Maintenance and Support',subtitle:'Ensuring your digital assets run smoothly and stay up-to-date. I provide reliable maintenance and timely support to keep your applications and systems running at their best, allowing you to focus on your core business.'}
                    ]
        }),
        methods: {
            
        },
        computed:{
            ...mapState([
                "isMobile",
                "window"
            ])
        },
        mounted(){
 
        }
    }
</script>

<style>
    .no-dot-list {
        list-style-type: none;
        padding: 0;
    }
    .custom-card{
        height: 500px;
    }
 

</style>