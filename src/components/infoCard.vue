<template>
    <div>
        <v-card
            :max-height="authenticated ? 400 : 300"
            class="mx-auto"
        >
            
            <v-card-title class="title-font infoSize" v-if="!addButton">
            <span> 
                {{title}}
                </span>
            <v-spacer></v-spacer>
            <span>
                <v-icon
                    large
                    class="mx-auto"
                >
                mdi-web
                </v-icon>
            </span>
            </v-card-title>

            <v-card-subtitle class="text-font" v-if="!addButton">
                {{subjectItem.subtitle}}
            </v-card-subtitle>

            <v-card-text class="text-font cardBody" v-if="!addButton">
                {{subjectItem.bodyText}}
            </v-card-text>

            <v-card-actions style="display:block" v-if="!addButton">
                <v-btn 
                    outlined
                    block
                    color="purple"
                    @click="viewInfo(subjectItem)"
                    class="text-font font-weight-bold"
                >
                    Learn more
                </v-btn>

                <div 
                    v-if="authenticated"
                    class="actions-block"
                >
                <v-btn
                    icon
                    @click="deleteClick()"
                >
                    <v-icon>
                            mdi-delete-forever
                    </v-icon>
                </v-btn>

                <v-btn
                    icon
                    @click="editClick()"
                >
                    <v-icon>
                            mdi-pencil
                    </v-icon>
                </v-btn>

                </div>

            </v-card-actions>
        </v-card>

        <v-card class="mx-auto" max-width="100px">
            <v-card-text v-if="addButton" class="text-center">
                <v-btn
                    icon
                    @click="addSubjectClick"
                >
                    <v-icon x-large>
                        mdi-plus
                    </v-icon>
                </v-btn>
            </v-card-text>
        </v-card>

        <app-confirm-dialog
            :openDialog="openConfirmDelete"
            @confirmDialogChanged="openConfirmDelete = $event"
            :confirmAction="deleteSubject"
            :title="'Delete ' + subjectItem.title + ' ?'"
            :body="'Confirm delete action? deleting a case will be not uble to recover.'"
        >
        </app-confirm-dialog>

        <app-edit-subject-dialog
            :editSubjectDialog="editSubjectDialog"
            @editSubjectDialogChanged="editSubjectDialog = $event"
            :saveClick="editSubject"
            :originalData="originalData"
            :EditedData="subjectItem"
        >
        </app-edit-subject-dialog>
    </div>
</template>

<script>
import db from "../firebase/init";
import ConfirmDialog from './dialogs/confirmDialog.vue';
import EditSubjectDialog from './dialogs/editSubject.vue';

export default {
    name: 'Info-Card',

    components:{
        'app-confirm-dialog' : ConfirmDialog,
        'app-edit-subject-dialog' :EditSubjectDialog
    },

    props:[
        'subjectItem',
        'addButton',
        'addSubjectClick'
    ],

    data: () => ({
        openConfirmDelete:false,
        editSubjectDialog:false,
        originalData:null,
        title:null
    }),

    mounted(){
        this.originalData = _.cloneDeep(this.subjectItem)
        this.title = this.originalData.title;
    },

    methods:{
        viewInfo(){
            console.log(this.subjectItem);
        },

        deleteClick(){
           this.openConfirmDelete = true;
        },

        editClick(){
            this.editSubjectDialog = true;
        },

        deleteSubject(){
            let vm = this;
          
            db
            .collection('subjects')
            .doc(this.subjectItem.id)
            .delete()
            .then(()=>{
                vm.openConfirmDelete = false;
                vm.$emit("changeSubject",true);
            })
            .catch(err=>{
                console.log('error while editing subject',err);
            })
        },

        editSubject(){
            let vm = this;
          
            db
            .collection('subjects')
            .doc(this.subjectItem.id)
            .update({
                title:this.subjectItem.title,
                bodyText:this.subjectItem.bodyText,
                subtitle:this.subjectItem.subtitle,
                coverImage:'mdi-web',
            })
            .then(()=>{
                vm.editSubjectDialog = false;
                vm.$emit("changeSubject",true);
            })
            .catch(err=>{
                console.log('error while editing subject',err);
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
            let auth = this.$store.state.authenticated;
            return auth;
        }
    }
}
</script>

<style scoped>
    .cardBody{
        height:75px; 
        cursor:pointer;
        overflow-y: hidden !important;
    }
    .actions-block{
        width: 100%;
        text-align: end;
        margin-top: 10px;
    }
</style>
