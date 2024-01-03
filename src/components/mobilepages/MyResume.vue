<template>
    <div>
        <center><h1>RESUME</h1></center>
        <v-container>
            <h2>Education</h2>
            <v-card>
                <v-card-title >
                    <v-avatar size="80" :elevation="4" >
                        <v-icon x-large  color="primary">mdi-school-outline</v-icon>
                    </v-avatar>
                    2008 - 2011 <br />
                    Computer Hardware and Servicing
                </v-card-title>
                <v-card-subtitle style="margin-left:80px;">
                    Rizal College of Taal
                </v-card-subtitle>
            </v-card>
            <br>
            <h2>Experience</h2>
            <v-card>
                <v-card-title >
                    <v-avatar size="80" :elevation="4" >
                        <v-icon x-large  color="primary">mdi-briefcase-outline</v-icon>
                    </v-avatar>
                    2018 up to  Present <br />
                    Web Developer
                </v-card-title>
                <v-card-subtitle style="margin-left:80px;">
                    HRD Singapore Ltd.
                </v-card-subtitle>
            </v-card>
            <br>
            <h2>Skills</h2>
            <v-card>
                <!-- <v-card-title >
                    <v-avatar size="80" :elevation="4" >
                        <v-icon x-large  color="primary">mdi-briefcase-outline</v-icon>
                    </v-avatar>
                    2018 up to  Present <br />
                    Web Developer
                </v-card-title> -->
                <v-card-text >
                    <ApexChart type="bar" height="350" :options="chartOptions" :series="series"></ApexChart>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                series: [{
                    data: [10, 20, 30, 40, 50, 60, 70, 80, 90,]
                }],
                chartOptions: {
                    chart: {
                    type: 'bar',
                    height: 350
                    },
                    plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    }
                    },
                    dataLabels: {
                        position: 'right',
                        maxItems: 100,
                        hideOverflowingLabels: true,
                        total: {
                            enabled: false,
                            formatter: undefined,
                            offsetX: 0,
                            offsetY: 0,
                            style: {
                            color: '#373d3f',
                            fontSize: '12px',
                            fontFamily: undefined,
                            fontWeight: 600
                            }
                        }

                    },
                    xaxis: {
                        categories: ['HTML5','Javscript','CSS','JQuery','Vue js','Node js','SQL','Code PHP','Laravel'],
                    },
                    colors: ['blue', '#5EFF33', '#33B6FF', '#FF33E6', '#33FF9A', '#DD33FF', '#FFD933', '#FFD933', '#FFD933'],
                   
                },
            }
        },
    }
</script>

<style scoped>

</style>