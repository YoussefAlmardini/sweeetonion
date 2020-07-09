<template>
  <v-app>
 <section>
            <div class="page main-bg space-top space-bottom">
                <v-container fluid grid-list-md>
                    <div class="text-center">
                        <h1
                        class="heading1 title-font white-text mb-5"
                        >
                        Team
                        </h1>
                        <p 
                        class="text-font text-block white-text"
                        >
                        Sweeet onion meets the modern terms of technologies and designs. Our development tools allow us to provide an
                        special experience to online projects.  Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.
                        </p>
                    </div>

                    <v-timeline :dense="$vuetify.breakpoint.smAndDown" class="pa-5 mx-auto custom-row width">
                      <v-timeline-item
                        v-for="(person, i) in team"
                        :key="i"
                        :color="person.color"
                        icon="mdi-account"
                        fill-dot
                      >

                        <v-card
                            class="mx-auto"
                            max-width="350"
                          >
                            <v-img
                              class="white--text align-end grey darken-4"
                              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                              :src="person.img"
                              max-height="200"
                              contain
                              dark
                            >
                              <v-card-title 
                                class="title-font text-shadow"
                              >
                              {{person.name}}
                              </v-card-title>
                            </v-img>

                            <v-card-text 
                              class="text--primary text-font"
                            >
                              <div 
                                v-for="(position,j) in person.positions"
                                :key="j"
                              >
                                {{position}}
                              </div>

                              <v-divider class="mt-3 mb-3"></v-divider>

                              <div>
                                  <v-chip
                                    v-for="(skill,index) in person.skills"
                                    :key="index"
                                    class="ma-1"
                                  >
                                  {{skill}}
                                </v-chip>
                              </div>

                            </v-card-text>

                            <v-card-actions>
                              <v-btn
                                :color="person.color"
                                block
                                outlined
                              >
                                Profile
                              </v-btn>

                            </v-card-actions>
                          </v-card>

                      </v-timeline-item>
                    </v-timeline>


                </v-container>
            </div>
        </section>

  </v-app>
</template>

<script>
import YOUSSEF_IMG from "@/assets/team/youssef.jpg";
import USER_IMAGE from "@/assets/team/userIcon.webp";

export default {
  name: 'Team',

    data: () => ({
      team: [
        {
          color: 'purple lighten-2',
          name: 'youssef Almardini',
          positions:[
            "Full stck developer",
            "UI designer"
          ],
          skills:[
            'javascript',
            'PHP',
            'SQL',
            'vue.js',
            'react.js'
          ],
          img: YOUSSEF_IMG,
        },
        {
          color: 'green lighten-2',
          name: 'Rasheed Hamdani',
          positions:[
            "Developer",
          ],
          img: USER_IMAGE

        },
         {
          color: 'red lighten-2',
          name: 'Abdulla Hamdani',
          positions:[
            "Developer",
          ],
          img: USER_IMAGE

        },
        {
          color: 'black lighten-2',
          name: 'Mohammed Marrawi',
          positions:[
            "Developer",
          ],
          img: USER_IMAGE

        },
      ],
    }),

    mounted(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
}
</script>
