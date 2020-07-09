<template>
    <v-card
        class=""
        max-width="450"
    >
        <v-card-title>
        <h2 class="title-font">{{title}}</h2>
        <v-spacer></v-spacer>
        <span>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
                <v-icon color="grey lighten-1">mdi-eye</v-icon>
            </v-btn>
            </template>
            <span>5</span> 
            <span> views</span>
        </v-tooltip>
        </span>
        </v-card-title>

        <v-img
            :src="coverImage"
            lazy-src="https://picsum.photos/id/11/100/60"
            height="200px"
        ></v-img>

        <v-card-text class="black-text text-font">
        Our company takes pride in making handmade brushes.
        Our toothbrushes are available in 4 different bristel types, from extra soft to hard.
        </v-card-text>

        <v-card-text>
               <div>
                    <v-icon 
                        small 
                        left
                    >mdi-account</v-icon>
                    <span class="caption">Youssef Almardini</span>
               </div>
                <div>
                    <v-icon 
                        small 
                        left
                    >mdi-calendar-range</v-icon>
                    <span class="caption">12/06/2020</span>
               </div>
        </v-card-text>

        <v-card-actions>
        <v-btn
            outlined
            block
            class="white--text"
            color="deep-purple accent-4"
        >
            read more
        </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>

export default {
    name: 'Footer',
    props:[
        'coverImage',
        'title',
        'subtitle',
        'bodyText',
        'subjectItem'
    ],

    data: () => ({

    }),

    methods:{
        readMore(){
            console.log(this.subjectItem);
        }
    }
}
</script>

<style scoped>
    .cardBody{
        height:75px; 
        overflow:auto; 
        cursor:pointer;
    }
</style>
