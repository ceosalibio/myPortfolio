<template>
    <div>
        <v-container >
                    <!-- <v-divider /> -->
                 
                        <h2 class="text-center">ABOUT ME</h2>
                        <!-- <span style="color:gray;">{{ objective }}</span> -->
                  
                        <ul class="no-dot-list list-text">
                            <h2 class="color-text"><v-icon color="primary">mdi-account-tie</v-icon>Personal Information:</h2>
                            <br>
                            <li v-for="(item, i) in about" :key="i" style="display: flex;" class="list-font" >
                                <b>{{item.text }}:</b>
                                <v-spacer/>
                                    <div style="color:gray;text-align:right;">
                                        <!-- <span 
                                        v-if="item.isLink">
                                            <a :href="'mailto:' + item.value">
                                                {{ item.value }}
                                            </a>
                                        </span>  -->
                                        <span>{{ item.value }}</span>
                                    </div>
                            </li>
                            <br>
                            <h2 class="color-text"><v-icon color="primary">mdi-school-outline</v-icon>Educational Attaintment:</h2>
                            <br>
                            <li v-for="(item, i) in education" :key="i" style="display: flex;" class="list-font">
                                <b>{{item.text }}</b>
                                <v-spacer/>
                                    <div style="color:gray;text-align:right;">
                                        <span 
                                        v-if="item.isLink">
                                            <a :href="'mailto:' + item.value">
                                                {{ item.value }}
                                            </a>
                                        </span> 
                                        <span v-else>{{ item.value }}</span>
                                    </div>
                            </li>
                            <br>
                            <h2 class="color-text"><v-icon color="primary">mdi-chat-outline</v-icon>Langauge:</h2>
                            <br>
                            <li v-for="(item, i) in language" :key="i" style="display: flex;" class="list-font">
                                <b>{{item }}</b>
                            </li>
                        </ul>

                        
             
        </v-container>
        
    </div>
</template>

<script>    
    import moment from 'moment'
    export default {
        data() {
            return {
                objective:'I am a web developer passionate about creating captivating online experiences. I specialize in frontend and backend technologies and dedicated to staying ahead of trends. My commitment is to deliver high-quality, innovative solutions for businesses and users.',
                about:[
                        // {text:'Name',value:'Arceo Jr. S. Salibio'},
                        // {text:'Age',value:this.age},
                        {text:'Date of Birth',value:'May 13,1991'},
                        {text:'Address',value:'General Trias, Cavite, Philippines'},
                        {text:'ZIP Code',value:'4107'},
                        // {text:'Email Address',value:'salibioarceo@gmail.com', isLink: true},
                        // {text:'Contact No',value:'+63967-608-7725'},
                    ],
                education:[
                        // {text:'School',value:'Year attended',center:true,},
                        // {text:'Cultihan-Bolbok Elementary School',value:'1997 - 2002'},
                        // {text:'Taal National High School',value:'2002 - 2007'},
                        {text:'Crourse: Computer Hardware Services',value:'2010'},
                        {text:'School: Rizal College of Taal',value:''},
                ],

                language:['Filipino','English']
            }
        },
        computed:{
            age(){
                let age = 0
                let dateNow = moment()
                let bDay = moment('1991-05-13')
                age = dateNow.diff(bDay,'years')
                // console.log(dateNow)
                return age
            },
           
        },
        created() {
            let dataAge = { text: 'Age', value: this.age }
            this.about.unshift(dataAge)
        }
    }
</script>

<style scoped>
.list-text{
    font-size: 12px  !important;
}
.color-text{
    color:rgb(24, 148, 250);
}
</style>