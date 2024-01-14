<template>
    <div>
        <br />
        <h2 align="center">CONTACT</h2>
        <div class="span-title">
            <span >Let's collaborate on something amazing.</span>
        </div>
        <div class="span-subtitle">
            <span >Feel free to contact me, and let's discuss how we can create something awesome together</span>
        </div>
        <br  />
        <v-container>
            <v-row>
                <v-col cols="6" class="d-flex align-center justify-center text-center " v-for="(item,i) in contactItem" :key="i">
                    <v-card  flat>
                        <v-card-text>
                            <div>
                               <v-img :src="item.image" height="50" />
                            </div>
                            <div class="content">
                                <span >{{ item.text }}</span><br>
                                <span>{{ item.value }}</span>
                            </div>
                            
                            
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
import { ref } from "vue";
import gmail from "@/assets/images/gmail.png"
import phone from "@/assets/images/phone.png"
import github from "@/assets/images/github.png"
import messenger from "@/assets/images/messenger.png"

const contactItem = ref ([
    {image:gmail, text:'Email Address:', value:'salibioarceo@gmail.com'},
    {image:phone, text:'Phone Number:', value:'+63-967-608-7725'},
    {image:messenger, text:'Messeger', value:'Arceo Salibio'},
    {image:github, text:'GitHub', value:'ceosalibio'},
])
    
</script>

<style>
.span-title{
    font-size: 30px;
    text-align: center;
    margin-top: 2%;
    margin-bottom: 2%;
}
.span-subtitle{
    text-align: center;
    margin-top: 2%;
    margin-bottom: 2%;
}
.content{
    color: gray;
}
</style>