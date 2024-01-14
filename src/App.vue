<template>
  <!-- <v-container> -->

  
  <v-app id="inspire" class="main-container d-flex d-sm-flex d-md-none">

        <div class="d-flex d-sm-flex d-md-none" v-if="store.routeName != 'home'">
          <!-- <div class="menu-display" style="position: fixed; top: 0; left: 0; z-index: 1000;"> -->
          <div class="menu-display">
            <v-toolbar color="white" style="position: fixed; top: 0; left: 0; z-index: 1000;" >
              <v-btn @click.stop="drawer = !drawer" icon flat ><v-icon>mdi-menu</v-icon></v-btn>
              <v-spacer  />
              <v-btn @click="backMain()"><v-icon>mdi-logout</v-icon></v-btn>
            </v-toolbar>
           
          </div>

          <v-navigation-drawer
            v-model="drawer"
            location="top"
            :fixed="true"
            class="fixed-drawer"
          >
            <v-list>
                <v-list-item v-for="(link, index) in links" :key="index">
             
                        <v-list-item-title>
                            <a
                            :href="link.link"
                            :class="
                                activelink == link.name
                                    ? 'active'
                                    : 'a-link text-uppercase text-decoration-none'
                            "
                            @click="row_classes(link.name)"
                            >{{ link.name }}
                             </a>
                        </v-list-item-title>
                </v-list-item>
            </v-list>
         </v-navigation-drawer>
        </div>
      <v-main class="mt-6">
          <router-view></router-view>
      </v-main>
   
  </v-app>

<v-app id="inspire" class="main-container d-none d-md-block d-lg-block d-xl-block ">
  <v-main>
      <router-view></router-view>
  </v-main>

</v-app>
<!-- </v-container> -->
</template>

<script setup>
// import axios from "axios";
import { ref, onMounted, watch } from "vue";
import { useRouter } from 'vue-router';
import {storeData} from '@/store/pinia.js'
const router = useRouter();
const curRoute = ref('')
const store = storeData()
const links = ref([
          { name: "Home", link: "#home", icon: "home-outline" },
          {
              name: "Experience",
              link: "#experience",
              icon: "package-variant",
          },
          {
              name: "Skills",
              link: "#skills",
              icon: "package-variant",
          },
          {
              name: "Contact",
              link: "#contact",
              icon: "package-variant",
          }
     
      ])
      const activelink = ref("Home")
      const drawer = ref(false)

      const row_classes = (item)=>{
        activelink.value = item;
      }
      const backMain = ()=>{
        router.push({name : 'home'})
        store.routeName = 'home'
      }

      // watch(curRoute, (newValue, oldValue) => {
      //     console.log(curRoute.value,newValue,'curRoute')
      // })

      onMounted(() => {
        // curRoute.value = router.currentRoute.value.path
        // console.log(store.routeName,'test')
      })

</script>

<style>
v-data-table > .v-data-table__wrapper > table > tbody > tr > th,
.v-data-table > .v-data-table__wrapper > table > thead > tr > th,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > th {
  font-size: 0.9rem !important;
  font-weight: 800;
  background-color: rgb(218, 218, 218);
  color: rgb(83, 83, 83) !important;
}

.v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
  font-size: 0.8rem !important;
  font-weight: 200;
  color: #000;
}
/* 
.v-overlay--active {
  backdrop-filter: blur(2px);
  background: rgb(255 255 255 / 0.5);
} */

/* .a-link::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: #9d4ffd;
  transition: width 0.3s;
}

.a-link:hover::after {
  width: 100%;
} */

.a-link:hover {
  color: #9d4ffd !important;
  font-weight: 500;
  border-bottom: #9d4ffd 2px solid;
  transition: background-color 2s ease-out 100ms;
}

.active {
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  color: #9d4ffd !important;
  border-bottom: #9d4ffd 2px solid;
}
.main-container {
  font-family: 'Poppins', sans-serif;
}
@media screen and (max-width: 00px) {
    /* Move the toolbar-title to center */
    .toolbar-title {
      text-align: center;
    }
  
    /* Hide the unordered list on small screens */
    .nav-links {
      display: none;
    }

    .menu-display{
        display: flex;
    }
  }
  .fixed-drawer {
    position: fixed;
    top: 0;
    height: 100%;
  }
</style>
