<template>
    <div>
        <v-container >
                    <!-- <v-divider /> -->
                 
                        <h4 class="text-center">ABOUT ME</h4>
                        <!-- <span style="color:gray;">{{ objective }}</span> -->
                  
                        <ul class="no-dot-list list-text">
                            <h3 class="color-text"><v-icon color="primary">mdi-account-tie</v-icon>Personal Information:</h3>
                            <br>
                            <li v-for="(item, i) in about" :key="i" style="display: flex;" >
                                <b>{{item.text }}:</b>
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
                            <h3 class="color-text"><v-icon color="primary">mdi-school-outline</v-icon>Educational Attaintment:</h3>
                            <br>
                            <li v-for="(item, i) in education" :key="i" style="display: flex;" >
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
                        {text:'Email Address',value:'salibioarceo@gmail.com', isLink: true},
                        {text:'Contact No',value:'+63967-608-7725'},
                    ],
                education:[
                        // {text:'School',value:'Year attended',center:true,},
                        {text:'Cultihan-Bolbok Elementary School',value:'1997 - 2002'},
                        {text:'Taal National High School',value:'2002 - 2007'},
                        {text:'Crourse: Computer Hardware Services',value:'2008 - 2010'},
                        {text:'School: Rizal College of Taal',value:''},
                ]
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
    font-size: 11px  !important;
}
.color-text{
    color:rgb(24, 148, 250);
}
</style>