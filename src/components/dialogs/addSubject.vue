<template>
   <v-dialog v-model="addSubjectDialog" persistent  max-width="800">
        <v-card
            class="mx-auto"
            max-width="800"
            max-height="700"
            elevation="0"
        >
            <v-card-title>
                Add new subject
            </v-card-title>

            <v-card-text>
                <v-form v-model="valid">
                    <v-container>
                    <v-row>
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-text-field
                                v-model="title"
                                :counter="25"
                                label="subject name"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-text-field
                                v-model="subtitle"
                                :counter="25"
                                label="subject subtitle"
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                        <v-col
                            cols="12"
                            md="12"
                        >
                             <v-textarea
                                v-model="bodyText"
                                label="description"
                                required
                            ></v-textarea>
                        </v-col>
                    </v-container>
                </v-form>
            </v-card-text>

            <v-card-actions>
               <div class="confrimButtons">
                    <v-btn 
                        class="sweet-btn ml-2" 
                        height="50" 
                        width="150" 
                        color="red"
                        @click="closedialog"
                        outlined
                    >
                        cancel
                    </v-btn>

                    <v-btn 
                        class="sweet-btn ml-2" 
                        height="50" 
                        width="150" 
                        color="green"
                        @click="addSubject()"
                        :disabled="!formValid"
                        outlined
                    >
                        Add
                    </v-btn>
               </div>
            </v-card-actions>

        </v-card>
   </v-dialog>
</template>

<script>
import db from "../../firebase/init";

export default {
    name: 'Add-Subject-Dialog',

    props:[
       'addSubjectDialog',
       'addClick',
    ],

    data: () => ({
        valid:null,
        title:null,
        subtitle:null,
        bodyText:null
    }),

    methods:{

        closedialog() {
            this.$emit("addSubjectDialogChanged", false);
            this.clearForm();
        },

        clearForm(){
            this.title=null;
            this.subtitle=null;
            this.bodyText=null;
        },

        addSubject(){
            let vm = this;

            db
            .collection('subjects')
            .add({
                title:this.title,
                subtitle:this.subtitle,
                bodyText:this.bodyText
            })
            .then(doc=>{
                console.log("Subject succefully added! id is : ",doc.id)
                vm.$emit("addSubjectDialogChanged", false);
                vm.$emit("changeSubject",true);
                vm.clearForm();
            })
            .catch(err=>{
                console.error("error while adding new subject! " + err)
            })
        }
    },

    computed:{
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
            return this.$store.state.authenticated;
        },
        formValid(){
            if(this.title == null || this.subtitle == null || this.bodyText == null){
                return false
            }else{
                if(
                    this.title.length > 0 &&
                    this.subtitle.length > 0 &&
                    this.bodyText.length > 0 
                ){
                    return true;
                }else return false;
            }
          
        }
    }
}
</script>

