<template>
   <v-dialog v-model="openDialog" persistent  max-width="500">
        <v-card
            class="mx-auto"
             max-width="500"
            elevation="0"
        >
            <v-card-title>
                {{title}} 
            </v-card-title>

            <v-card-text>
               {{body}}
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
                        @click="confirmAction"
                        outlined
                    >
                        Confirm
                    </v-btn>
               </div>
            </v-card-actions>

        </v-card>
   </v-dialog>
</template>

<script>

export default {
    name: 'Confirm-Dialog',

    props:[
       'openDialog',
       'title',
       'body',
       'confirmAction'
    ],

    data: () => ({

    }),

    methods:{
        closedialog() {
            this.$emit("confirmDialogChanged", false);
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
            let auth = this.$store.state.authenticated;
            return auth;
        }
    }
}
</script>

