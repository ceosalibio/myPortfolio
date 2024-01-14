<template>
  <div>
        <v-row>
            <v-col cols="12" md="6" lg="6" xl="6">
                <v-card flat>
                    <v-container>
                        <v-card color="primary" :class="res1?'mt-5 exp':'mt-5'" @click="res1 = true,res2 = false">
                            <v-card-text>
                                <h2>FULL STACK WEB DEVELOPER<small>(Team Head)</small></h2>
                                <h3>H.R.D Singapore Pte Ltd.</h3>
                                <h4>May 2018 to Present</h4>
                            </v-card-text>
                        </v-card>
                        <v-card color="pink" :class="res2?'mt-5 exp':'mt-5'" @click="res1 = false, res2 = true">
                            <v-card-text>
                                <h2>Data Encoder</h2>
                                <h3>H.R.D Singapore Pte Ltd.</h3>
                                <h4>June 2013 to April 2018</h4>
                            </v-card-text>
                        </v-card>
                        
                    </v-container>
                    
                    
                    
                </v-card>
            </v-col>
            <v-expand-transition >
                <v-col cols="12" md="6" lg="6" xl="6" >
                    <v-card elevation="5" class="overflow-auto" style="max-height: 400px;" v-show="res1" v-model="res1">
                        <!-- <v-toolbar color="transparent"><v-spacer></v-spacer><v-btn icon @click="res1 = false" flat><v-icon>mdi-close</v-icon></v-btn></v-toolbar> -->
                        <v-card-text>
                            <v-container>
                                <h3>Job Title : Full Stack Developer</h3>
                                <p>
                                    I bring 5 of experience as a Full Stack Developer, having contributed to various projects and organizations in the realm of web application development. My expertise lies in crafting robust solutions by combining front-end and back-end technologies, ensuring both functionality and user-centric design.
                                </p>
                                <ul  class="no-bullet">
                                    <h3>Responsibilities</h3>
                                    <li v-for="(item,i) in responsibilities1" :key="i">
                                        <v-icon>mdi-circle-small</v-icon> {{ item }}
                                    </li>
                                </ul>
                            </v-container>
                            
                        </v-card-text>
                    </v-card>

                    <v-card elevation="5" class="overflow-auto" style="max-height: 400px;" v-if="res2" v-model="res2">
                        <!-- <v-toolbar color="transparent"><v-spacer></v-spacer><v-btn icon @click="res2 = false" flat><v-icon>mdi-close</v-icon></v-btn></v-toolbar> -->
                        
                        <v-card-text>
                            <v-container>
                                <h3>Job Title : Data Encoder</h3>
                                <p>
                                    As a Data Encoder, the primary responsibility is to input, update, and maintain accurate and organized information into databases or information management systems. This role demands meticulous attention to detail, efficiency, and adherence to established data entry standards.
                                </p>
                                <ul  class="no-bullet">
                                    <h3>Responsibilities</h3>
                                    <li v-for="(item,i) in responsibilities2" :key="i">
                                        <v-icon>mdi-circle-small</v-icon> {{ item }}
                                    </li>
                                </ul>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-col>

            </v-expand-transition>

            <!-- <v-expand-transition >
                <v-col cols="12" md="6" lg="6" xl="6" >
                    
                </v-col>
            </v-expand-transition> -->
        </v-row>
  </div>
</template>

<script>
export default {
    data:()=>({
        responsibilities1:[
            'Collaborate with teams to understand project requirements and objectives.',
            'Translate user and business needs into technical solutions.',
            'Design and develop responsive and scalable web applications.',
            'Write clean, efficient, and maintainable code across both front-end and back-end technologies.',
            'Participate in code reviews, testing, and debugging processes.',
            'Ensure the implementation of best practices and coding standards.',
            'Continuously learn and adapt to new technologies and industry trends.',
            'Communicate effectively with team members to address technical challenges and find solutions.',
            'Contribute to the entire software development lifecycle, from planning to deployment.'
        ],
        res1:true,
        responsibilities2:[
            'Input and verify data accurately into computer databases.',
            'Review and validate data for accuracy and completeness.',
            'Perform regular quality checks and correct errors promptly.',
            'Maintain comprehensive records of data entry activities.',
            'Uphold confidentiality and comply with data entry guidelines.',
            'Meet deadlines and communicate effectively within the team.',
            'Identify and suggest process improvements for efficiency.'
        ],
        res2:false,
    })
}
</script>

<style scoped>
.exp {
    transform: scale(1.1); /* Add shadow/elevation on hover */
    cursor: pointer;
  }
  
  .exp:hover {
    transform: scale(1.1); /* Add shadow/elevation on hover */
    cursor: pointer;
  }

  .no-bullet {
    list-style: none;
  }
</style>