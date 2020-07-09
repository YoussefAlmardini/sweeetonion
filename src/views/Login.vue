<template>
  <v-app>
        <section>
            <v-parallax
                dark
                src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
                height="650"
            >
            <section>
                <div class="page">
                    <v-container fluid grid-list-md>
                    <v-form>
                    <v-layout row wrap>
                        <v-flex d-flex xs12 sm6 md6 class="mx-auto cover-banner">
                            <v-row justify="center">
                                <v-col cols="12" sm="10" md="8" lg="6">
                                
                                <v-card ref="form">
                                    <v-card-title class="title-font">
                                        <div>Login</div>
                                    </v-card-title>
                                    <v-divider></v-divider>
                                    <v-card-text>
                                    <v-text-field
                                        ref="name"
                                        v-model="email"
                                        label="Email"
                                        type="email"
                                        placeholder="Example@company.com"
                                        :error-messages="validation.firstError('email')"
                                    ></v-text-field>
                                    <v-text-field
                                        ref="password"
                                        v-model="password"
                                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                        :type="show ? 'text' : 'password'"
                                        name="input-10-1"
                                        label="Password"
                                        hint="At least 8 characters"
                                        counter
                                        :error-messages="validation.firstError('password')"
                                        @click:append="show = !show"
                                    ></v-text-field>    
                                     <v-checkbox 
                                        v-model="remember" 
                                        label="remamber me"
                                        style="custom-checkbox"
                                     ></v-checkbox>  
                                    </v-card-text>
                                    <v-divider class="mt-12"></v-divider>
                                    <v-card-actions>
                                    <v-btn text disabled>Sign up</v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn 
                                        color="primary" 
                                        text 
                                        @click="submit"
                                        :disabled="(email == null || password==null)"
                                        >Login</v-btn>
                                    </v-card-actions>
                                </v-card>
                                </v-col>
                            </v-row>
                        </v-flex>
                    </v-layout>
                    </v-form>
                    </v-container>
                </div>
            </section>
            </v-parallax>
        </section>
  </v-app>
</template>

<script>
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator;

export default {
  name: 'Login',

    data: () => ({
        email: null,
        password: null,
        show:false,
        remember:false,
        formHasErrors: false
    }),

    validators: {
        email (value) {
            return Validator.value(value).required().email();
        },
        password: function (value) {
            return Validator.value(value).required().minLength(8);
        }
    },
    

    methods:{

        submit(){
            this.$validate()
            .then( (success)=> {
                if (success) {
                    this.login();
                }                
                this.formHasErrors = !success
            });
        },

        login(){
            const loginData = {
                email: this.email,
                password: this.password,
                remember: this.remember,
                returnSecureToken: true
            };
            this.$store.dispatch("login", {
                email:    this.email,
                password: this.password
            })
            .then(()=>{
                console.log("after log in",this.$store.state)
            })
        }

    
    },

    computed:{
        form () {
            return {
                email: this.email,
                password: this.password
            }
        },
        formNotValid(){
            if(
                (
                    this.validation.firstError('email') 
                    || 
                    this.validation.firstError('password')
                )
                &&
                this.formHasErrors
            ){
                return true;
            }  
        }
    },

    mounted(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
        let vm = this;
        window.addEventListener('keyup', function(event) {
            if (event.keyCode === 13) { 
                !vm.formHasErrors && vm.login();
            }
        });

    },


}
</script>

<style scoped>
    .custom-form{
        background:rgba(0,0,0,0.5) !important; 
        border-radius:5px  !important; 
        max-width:800px  !important; 
        margin: auto  !important;
    }
</style>
