<template>
  <!-- <v-container> -->

  
  <v-app id="inspire" class="main-container">

     <!--  <v-app-bar
          app
          color="#fff"
          flat
          height="70"
          elevation="0"
          
      >
        <v-container>
          <v-row>
            <v-toolbar-title
                  class="font-weight-bold"
                  style="color: #9d4ffd"
              >
                  CEO wORKs
              </v-toolbar-title>

              <v-spacer />
              <div class="d-none d-md-block d-lg-block d-xl-block">
                <div class="nav-links">
                  <ul class="d-flex font-weight-light" style="list-style: none">
                      <li
                          class="mx-3"
                          v-for="(link, index) in links"
                          :key="index"
                      >
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
                          
                      </li>
                  </ul>
                </div>
              </div>
           
            <div class="d-flex d-sm-flex d-md-none">
              <div class="menu-display">
                <v-btn @click.stop="drawer = !drawer" icon ><v-icon>mdi-menu</v-icon></v-btn>
              </div>
            </div>
           
          </v-row>
             
          </v-container>
         
              

       
          
      </v-app-bar>
      <div v-if="drawer"  class="d-flex d-sm-flex d-md-none">
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
     
        </div> -->

      <v-main class="ma-2">
          <router-view></router-view>
      </v-main>
   
  </v-app>
<!-- </v-container> -->
</template>

<script>
// import axios from "axios";
// import { mapActions, mapState } from "vuex";
export default {
  components: {

  },
  data: () => ({
      links: [
          { name: "Home", link: "#home", icon: "home-outline" },
          {
              name: "Services",
              link: "#services",
              icon: "package-variant",
          },
          {
              name: "About",
              link: "#about",
              icon: "package-variant",
          },
          {
              name: "Resume",
              link: "#resume",
              icon: "package-variant",
          },
          {
              name: "Works",
              link: "#works",
              icon: "package-variant",
          },
     
      ],

      name: null,
      section: null,
      team: null,
      picture: null,

      openProgrammerSytemDialog: false,
      openProgrammerInsertUpdateDialog: false,
      openProgrammerTaskDialog: false,
      openMasterDialog: false,

      programmer: {},

      activelink: "Home",

      routerName: null,

      drawer: false,
      items: [
          // { text: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
          {
              text: "Home",
              icon: "mdi-home",
              to: "/",
          },
          // { text: "Back to home", icon: "mdi-account", to: "/" },
      ],

  }),

  methods: {

      row_classes(item) {
          // console.log("Hello ", item);
          this.activelink = item;
      },
  },

  computed: {
      
  },

  mounted() {

  },

  watch: {
   
  },
};
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
