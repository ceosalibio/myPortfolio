<template>
    <div>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="4" xl="4">
               <br>
               <h3><center>Web Development Proficiency</center></h3>
               <p><small>Comprehensive Skills: Design, Backend, and Database Management</small></p>
               <br>
               <v-row align="center">
                    <v-col cols="4" class="span-center">
                        <v-progress-circular
                        :rotate="360"
                        :size="80"
                        :width="10"
                        :model-value="value1"
                        color="blue"
                        >
                        {{ value1 }}%
                        </v-progress-circular>
                        <br>
                        <br>
                        <span class="span-font">Web Designing</span>
                    </v-col>
                    <v-col cols="4" class="span-center">
                        <v-progress-circular
                        :rotate="360"
                        :size="80"
                        :width="10"
                        :model-value="value2"
                        color="blue"
                        >
                        {{ value2 }}%
                        </v-progress-circular>
                        <br>
                        <span class="span-font">Back End Development</span>
                    </v-col>
                    <v-col cols="4" class="span-center">
                        <v-progress-circular
                        :rotate="360"
                        :size="80"
                        :width="10"
                        :model-value="value3"
                        color="blue"
                        >
                        {{ value3 }}%
                        </v-progress-circular>
                        <br>
                        <span class="span-font">Database Management</span>
                    </v-col>
               </v-row>
               <v-row align="center">
                    <v-col cols="4" class="span-center">
                        <v-progress-circular
                        :rotate="360"
                        :size="80"
                        :width="10"
                        :model-value="value4"
                        color="teal"
                        >
                        {{ value4 }}%
                        </v-progress-circular>
                        <br>
                        <span class="span-font">Data Encoding</span>
                    </v-col>
                    <v-col cols="4" class="span-center">
                        <v-progress-circular
                        :rotate="360"
                        :size="80"
                        :width="10"
                        :model-value="value5"
                        color="teal"
                        >
                        {{ value5 }}%
                        </v-progress-circular>
                        <br>
                        <span class="span-font"><small>Communications</small></span>
                    </v-col>
                    <v-col cols="4" class="span-center">
                        <v-progress-circular
                        :rotate="360"
                        :size="80"
                        :width="10"
                        :model-value="value6"
                        color="teal"
                        >
                        {{ value6 }}%
                        </v-progress-circular>
                        <br>
                        <span class="span-font">Leadership</span>
                    </v-col>
               </v-row>
                

            </v-col>
            <v-col cols="12" sm="12" md="12" lg="8" xl="8">
                <v-card>
                    <v-card-text>
                        <apexchart type="bar" height="350" :options="chartOptions" :series="formattedSeries"></apexchart>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
       
    </div>
</template>

<script> 
    export default {
        data() {
            return {
                interval1: -1,
                interval2: -1,
                interval3: -1,
                interval4: -1,
                interval5: -1,
                interval6: -1,
                value1: 0,
                value2: 0,
                value3: 0,
                value4: 0,
                value5: 0,
                value6: 0,
                series: [{
                    data: [90, 88, 85, 85, 90, 70, 90, 85, 90,]
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
                        distributed:true,
                        dataLabels:{
                            position:'bottom'
                        }
                    },
                    colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e','#f48024'],
                    },
                    dataLabels: {
              enabled: true,
              textAnchor: 'start',
              style: {
                colors: ['#fff']
              },
              formatter: function (val, opt) {
                return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
              },
              offsetX: 0,
              dropShadow: {
                enabled: true
              }
            },
            stroke: {
              width: 1,
              colors: ['#fff']
            },
            xaxis: {
                categories: ['HTML5','Javscript','CSS','JQuery','Vue js','Node js','SQL','Code PHP','Laravel'],
            },
            yaxis: {
              labels: {
                show: false
              }
            },
            title: {
                text: 'My Proficiency in Programming Languages',
                align: 'center',
                floating: true
            },
            subtitle: {
                text: 'Percentage Breakdown of Programming Languages',
                align: 'center',
            },
            tooltip: {
              theme: 'dark',
              x: {
                show: false
              },
              y: {
                title: {
                  formatter: function () {
                    return ''
                  }
                }
              }
            }
          }
        }
        },

        computed: {
            // Compute a formatted series by adding percent sign to each data point
            formattedSeries() {
            return this.series.map(seriesItem => {
                // console.log(seriesItem,'seriesItem')
                return {
                    data: seriesItem.data.map(dataPoint => dataPoint + '%')
                };
            });
            }
        },
        mounted () {
            this.interval1 = setInterval(() => {
                if (this.value1 === 86) {
                    return (this.value1 = 86)
                }
                this.value1 += 2
            }, 100)
            this.interval2 = setInterval(() => {
                if (this.value2 === 90) {
                    return (this.value2 = 90)
                }
                this.value2 += 5
            }, 100)
            this.interval3 = setInterval(() => {
                if (this.value3 === 88) {
                    return (this.value3 = 88)
                }
                this.value3 += 2
            }, 100)
            this.interval4 = setInterval(() => {
                if (this.value4 === 92) {
                    return (this.value4 = 92)
                }
                this.value4 += 2
            }, 100)
            this.interval5 = setInterval(() => {
                if (this.value5 === 88) {
                    return (this.value5 = 88)
                }
                this.value5 += 2
            }, 100)
            this.interval6 = setInterval(() => {
                if (this.value6 === 90) {
                    return (this.value6 = 90)
                }
                this.value6 += 5
            }, 100)
        },
        beforeUnmount () {
            clearInterval(this.interval)
        },
    }
</script>

<style>
.span-center{
    text-align:center !important;
}
.span-font{
    font-size: small;
}
</style>