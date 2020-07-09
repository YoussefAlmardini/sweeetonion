<template>
   <v-dialog v-model="editSubjectDialog" persistent  max-width="800">
        <v-card
            class="mx-auto"
            max-width="800"
            max-height="700"
            elevation="0"
        >
            <v-card-title>
                {{filterTitle}} 
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
                                v-model="EditedData.title"
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
                                v-model="EditedData.subtitle"
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
                                v-model="EditedData.bodyText"
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
                        @click="saveClick"
                        :disabled="!changed"
                        outlined
                    >
                        Save
                    </v-btn>
               </div>
            </v-card-actions>

        </v-card>
   </v-dialog>
</template>

<script>

export default {
    name: 'Edit-Subject-Dialog',

    props:[
       'editSubjectDialog',
       'saveClick',
       'originalData',
       'EditedData'
    ],

    data: () => ({
        valid:null
    }),

    methods:{
        closedialog() {
            this.$emit("editSubjectDialogChanged", false);
        },
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
        filterTitle(){
            return
                this.originalData.title != null ? 
                this.originalData.title :
                "Edit Form"
        },
        changed(){
            if (
                _.isEqual(this.EditedData, this.originalData) == false
                
            ) {
                return true;
            } else {
                return false;
            }
        }
    }
}
</script>