<template>
  <v-app>
        <section>
            <div class="page main-bg space-top space-bottom">
                <v-container fluid grid-list-md>
                    <div class="text-center">
                        <h1
                        class="heading1 title-font white-text mb-5"
                        >
                        Contact
                        </h1>
                        <p 
                        class="text-font text-block white-text"
                        >
                        Sweeet onion meets the modern terms of technologies and designs. Our development tools allow us to provide an
                        special experience to online projects.  Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.
                        </p>
                    </div>


                    <v-form 
                        v-model="valid" 
                        class="custom-form"
                        ref="contactForm"
                    >
                        <v-container>
                        <v-row>
                            <v-col
                                cols="12"
                                md="4"
                            >
                            <v-text-field
                                v-model="firstname"
                                :rules="nameRules"
                                :counter="20"
                                label="First name"
                                required
                                dark
                                filled
                                outlined
                            ></v-text-field>
                            </v-col>

                            <v-col
                                cols="12"
                                md="4"
                            >
                            <v-text-field
                                v-model="lastname"
                                :rules="nameRules"
                                :counter="20"
                                label="Last name"
                                required
                                dark
                                filled
                                outlined
                            ></v-text-field>
                            </v-col>

                            <v-col
                                cols="12"
                                md="4"
                            >
                            <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                                dark
                                filled
                                outlined
                            ></v-text-field>
                            </v-col>
                        </v-row>

                            <v-row>
                                <v-col
                                class="text-right"
                            >
                                <v-textarea
                                    label="Message"
                                    required
                                    dark
                                    filled
                                    outlined
                                >
                                </v-textarea>
                                </v-col>
                            </v-row>

                        <v-row>
                            <v-col
                                class="text-right"
                            >
                                    <v-btn 
                                    class="sweet-btn ml-2 justify-space-between" 
                                    height="50" 
                                    width="150" 
                                    color="white" 
                                    @click="validate()"
                                    outlined
                                >
                                    Send <v-icon left>mdi-arrow-right</v-icon> 
                                </v-btn>
                            </v-col>
                        </v-row>
                        </v-container>
                    </v-form>

                </v-container>
            </div>
        </section>
  </v-app>
</template>

<script>

export default {
  name: 'Contact',

    data: () => ({
        valid: false,
        firstname: '',
        lastname: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => v.length <= 20 || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
    }),

    methods:{
        validate () {
            this.$refs.contactForm.validate()
        },
    },
    
    mounted(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },

}
</script>

<style scoped>
      .custom-form{
        background:rgba(0,0,0,0.5) !important; 
        border-radius:5px  !important; 
        max-width:800px  !important; 
        margin:0 auto  !important;
    }
</style>
