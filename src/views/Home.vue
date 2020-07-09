<template>
  <v-app>
    <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      height="650"
    >
      <section>
          <div class="page">
            <v-container fluid grid-list-md>
              <v-layout row wrap>
                <v-flex d-flex xs12 sm6 md6 class="mx-auto cover-banner">
                  <v-card color="transparent" elevation="0">
                    <v-card-title primary class="heading1 title-font white-text">Sweeetonion</v-card-title>
                    <v-card-text class="white-text text-font text-size">{{ coverText }}</v-card-text>
                    <v-card-actions>

                      <v-btn 
                        class="sweet-btn ml-2 justify-space-between" 
                        height="50" 
                        width="150" 
                        color="white"
                        @click="$vuetify.goTo('#blogs', {
                          duration:1000,
                          offset: 100,
                        })" 
                        outlined
                      >
                        Blog <v-icon left>mdi-post</v-icon> 
                      </v-btn>

                      <v-btn 
                        class="sweet-btn ml-2 justify-space-between" 
                        height="50" 
                        width="150" 
                        color="green" 
                        to='/projects'
                        outlined
                      >
                        Projects <v-icon left>mdi-apps</v-icon>
                      </v-btn>

                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </div>
      </section>
    </v-parallax>



    <section>
      <div class="page main-bg">
        <v-container class="lighten-5 pb-5" v-if="!loading">
           <div class="text-center">
            <h1
              class="heading1 title-font white-text mb-5"
            >
              Cases
            </h1>
            <p 
              class="text-font text-block white-text"
            >
              Sweeet onion meets the modern terms of technologies and designs. Our development tools allow us to provide an
              special experience to online projects.  Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.
            </p>
          </div>
          <v-row class="custom-row-smaller">
            <v-col
              v-for="(subject,i) in subjects"
              :key="i"
              :cols="12"
              sm="4"
            >
               <app-info-card
                  :subjectItem="subject"
                  @changeSubject="fetchSubjects()"
               />

                <app-info-card
                  class="mt-5"
                  v-if="authenticated && subjects.length-1 == i"
                  :subjectItem="subject"
                  :addButton="true"
                  :addSubjectClick="addSubjectClick"
                />
               
            </v-col>
               
          </v-row>
        </v-container>
      </div>
    </section>

    <section>
      <div class="page main-bg" id="blogs">
        <v-container class="lighten-5 pb-5" v-if="!loading">
          <div class="text-center">
            <h1
              class="heading1 title-font white-text mb-5"
            >Blogs</h1>
          </div>
          <v-row class="custom-row">
            <v-col
              v-for="(i) in 4"
              :key="i"
              :cols="12"
              sm="6"
            >
               <app-blog-card
                  title="web masters"
               />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>


    <section>
      <div class="page main-bg">
        <v-container class="lighten-5 pb-5" v-if="!loading">
          <div class="text-center">
            <h1
              class="heading1 title-font white-text mb-5"
            >Friends</h1>
            <p 
              class="text-font text-block white-text"
            >
              {{lorem}}
            </p>
          </div>
          <v-card
            color="rgba(0,0,0,0.0)"
            width="800"
            class="mx-auto"
            elevation="0"
          >
              <v-row class="custom-row">
                <v-col
                  v-for="(item,i) in friends"
                  :key="i"
                  sm="3"
                  class="text-center"
                >
                  <v-avatar size="100" color="white" rounded>
                    <v-img :src="item.icon" contain min-height="100">

                    </v-img>
                  </v-avatar>
                </v-col>
              </v-row>
          </v-card>
        </v-container>
      </div>
    </section>

    <app-add-subject-dialog
        :addSubjectDialog="addSubjectDialog"
        @addSubjectDialogChanged="addSubjectDialog = $event"
        @changeSubject="fetchSubjects()"
    >
    </app-add-subject-dialog>

  </v-app>
</template>

<script>
//General
import db from "../firebase/init";
import * as easings from 'vuetify/es5/services/goto/easing-patterns'

//Components
import InfoCard from "../components/infoCard.vue"
import BlogCard from "../components/blogCard.vue"
import AddSubjectDialog from "../components/dialogs/addSubject.vue"

//Assets
import VUE_IMAGE from "@/assets/vue.gif"
import REACT_IMAGE from "@/assets/react.gif"
import JS_IMAGE from "@/assets/js.gif"
import PHP_IMAGE from "@/assets/php.gif"
import FIREBASE_IMAGE from "@/assets/firebase.gif"
import PHOTOSHOP_IMAGE from "@/assets/ps.gif"
import CSHARP_IMAGE from "@/assets/csharp.gif"
import API_IMAGE from "@/assets/api.gif"
import MS_IMAGE from "@/assets/microsoft.gif"
import ANDROID_IMAGE from "@/assets/android.gif"

export default {
  
  name: 'Home',

  components:{
    'app-info-card':InfoCard,
    'app-blog-card':BlogCard,
    'app-add-subject-dialog' : AddSubjectDialog
  },

  data:()=>({
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
      coverText:'Sweet Onion represent a brotherhood of creative developers in the Netherlands in one community. Our goal is to build a high quality media and applications according to the recent modern methods.',
      show:false,
      loading:true,
      subjects:[],
      friends:[
        {name:'vue',icon:VUE_IMAGE},
        {name:'react',icon:REACT_IMAGE},
        {name:'javascript',icon:JS_IMAGE},
        {name:'php',icon:PHP_IMAGE},
        {name:'firebase',icon:FIREBASE_IMAGE},
        {name:'photoshop',icon:PHOTOSHOP_IMAGE},
        {name:'csharp',icon:CSHARP_IMAGE},
        {name:'api',icon:API_IMAGE},
        {name:'microsoft',icon:MS_IMAGE},
        {name:'android',icon:ANDROID_IMAGE}
      ],
      addSubjectDialog:false
  }),

  mounted(){
    this.fetchSubjects();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
  },

  methods:{
    //Data fetchers
    fetchSubjects(){
      this.subjects = [];
      db
      .collection("subjects")
      .get()
      .then(snapshot=>{
        snapshot.forEach(doc => {
          let item = doc.data();
          item.id = doc.id;
          this.subjects.push(item)
        })
      })
      .then(()=>{
        console.info("subjects loaded succefully!")
        this.loading = false;
      })
      .catch((e)=>{
        console.error("error while fetching subjects!",e.message)
      })
    },

    addSubjectClick(){
      this.addSubjectDialog = true;
    },
  },

  computed:{
    isMobile(){
      return this.$store.state.isMobile;
    },
    userFirstName() {
      return this.$store.state.userFirstName;
    },
    userLastName() {
      return this.$store.state.userLastName;
    },
    userRole() {
      return this.$store.state.userRole;
    },
    authenticated(){
       return  this.$store.state.authenticated;
    }
  }
}
</script>
