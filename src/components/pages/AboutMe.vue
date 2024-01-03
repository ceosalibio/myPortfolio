<template>
    <div>
        <v-container >
           
                <v-row class="d-flex d-sm-flex d-md-none">
                    <v-col cols="12" md="12" lg="12" xl="12">
                        <h1 style="font-size:40px;text-align:center;">ABOUT ME</h1>
                        <span style="color:gray;">{{ objective }}</span>
                        <v-divider />
                        <br>
                        <ul class="no-dot-list">
                            <li v-for="(item, i) in about" :key="i" style="display: flex;" >
                                <b>{{item.text }}:</b>
                                <v-spacer/>
                                <span style="color:gray;">{{ item.value }}</span> 
                            </li>
                        
                        </ul>
                    </v-col>
                </v-row>

                <v-row class="d-none d-md-block d-lg-block d-xl-block">
                    <v-col cols="12" md="12" lg="12" xl="12">
                        <h1 style="font-size:40px;text-align:center;">ABOUT ME</h1>
                        <span style="color:gray;">{{ objective }}</span>
                        <v-divider />
                        <br>
                        <ul class="no-dot-list">
                            <li v-for="(item, i) in about" :key="i" style="display: flex;" >
                                <b style="margin-left:50px;">{{item.text }}:</b>
                                <v-spacer/>
                                <span style="color:gray;margin-right:80px;">{{ item.value }}</span> 
                            </li>
                        
                        </ul>
                    </v-col>
                </v-row>
        </v-container>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // myImage:require('../../assets/images/26591.jpg'),
                objective:'I am a web developer passionate about creating captivating online experiences. I specialize in frontend and backend technologies and dedicated to staying ahead of trends. My commitment is to deliver high-quality, innovative solutions for businesses and users.',
                about:[
                        {text:'Name',value:'Arceo Jr. S. Salibio'},
                        {text:'Date of Birth',value:'May 13,1991'},
                        {text:'Address',value:'General Trias, Cavite, Philippines'},
                        {text:'ZIP Code',value:'4107'},
                        {text:'Email Address',value:'salibioarceo@gmail.com'},
                        {text:'Contact No',value:'+63967-608-7725'},
                    ]
            }
        },
    }
</script>

<style scoped>

</style>