<template>
    <div>
        <h1 style="text-align:center;color:whitesmoke;font-size:40px;">SERVICES</h1>
        <v-container class="fluid">
            <v-row>
                <v-col v-for="(item , index) in listService" :key="index" cols="12" sm="12" md="6" lg="3" xl="3" class="mt-5">
                    <v-card elevation="3" height="120%" width="100%">
                        <v-card-title class="d-flex justify-center" :style="item.title == 'Maintenance and Support'?'font-size:18px':'font-size:24px'">
                            <v-icon color="primary" large>{{ item.icon }}</v-icon>
                            <b>{{ item.title }}</b>
                        </v-card-title>
                        <br>
                        <v-card-text style="color:gray;">{{ item.subtitle }}</v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
// import { mapState } from 'vuex';
import {ref} from 'vue';
    export default {
        // data:()=>({
        //     listService:[
        //                 {icon:'mdi-xml',title:'Web Development',subtitle:'Building modern and responsive websites that leave a lasting impression. From concept to launch, I craft intuitive user experiences with clean code and cutting-edge technologies.'},
        //                 {icon:'mdi-head-lightbulb-outline',title:'Data Analyst',subtitle:'Uncovering valuable insights from complex data sets. Leveraging data visualization and advanced analytics to drive data-driven decisions and empower businesses with actionable intelligence.'},
        //                 {icon:'mdi-account-group-outline',title:'Team Extension',subtitle:'Building modern and responsive websites that leave a lasting impression. From concept to launch, I craft intuitive user experiences with clean code and cutting-edge technologies.'},
        //                 {icon:'mdi-wrench',title:'Maintenance and Support',subtitle:'Ensuring your digital assets run smoothly and stay up-to-date. I provide reliable maintenance and timely support to keep your applications and systems running at their best, allowing you to focus on your core business.'}
        //             ]
        // }),
        // methods: {
            
        // },
        setup() {
            const listService = ref(
                    [
                        {icon:'mdi-xml',title:'Web Development',subtitle:'Building modern and responsive websites that leave a lasting impression. From concept to launch, I craft intuitive user experiences with clean code and cutting-edge technologies.'},
                        {icon:'mdi-head-lightbulb-outline',title:'Data Analyst',subtitle:'Uncovering valuable insights from complex data sets. Leveraging data visualization and advanced analytics to drive data-driven decisions and empower businesses with actionable intelligence.'},
                        {icon:'mdi-account-group-outline',title:'Team Extension',subtitle:'Building modern and responsive websites that leave a lasting impression. From concept to launch, I craft intuitive user experiences with clean code and cutting-edge technologies.'},
                        {icon:'mdi-wrench',title:'Maintenance and Support',subtitle:'Ensuring your digital assets run smoothly and stay up-to-date. I provide reliable maintenance and timely support to keep your applications and systems running at their best, allowing you to focus on your core business.'}
                    ]
                 )
            
                 return {
                    listService
                 }
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