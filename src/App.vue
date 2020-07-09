<template>
  <v-app>
    <app-navbar></app-navbar>
    <router-view></router-view>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Navbar from './components/navbar.vue'
import Footer from './components/footer.vue'

export default {
  name: 'App',
  components: {
   'app-navbar' : Navbar,
   'app-footer' : Footer
  },

  data: () => ({
  })
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300&family=MuseoModerno:wght@500;600&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

  .page{
    padding-top:50px;
    background-size: cover;
  }
  .main-bg{
     background:url("./assets/bg.jpg");
     background-size: cover;
  }
  .bg{
    background:black;
  }
  .cover-banner{
    margin: 0;
  }
  .white-text{
    color: white !important;
  }
  .black-text{
    color: black !important;
  }
  .sweet-btn{
    min-width:100px;
  }
  .heading1{
    font-size: 40px !important;
  }
  .text-size{
     font-size: 16px !important;
  }
  .title-font{
    font-family: 'MuseoModerno', cursive;
  }
  .infoSize{
    font-size: 18px;
  }
  .text-font{
    font-family: 'Open Sans', sans-serif;
  }
  .text-block{
    background:rgba(0,0,0,0.075); 
    padding:2%;
    border-radius:5px;
    max-width:800px;
    margin: 0 auto;
  }
  .custom-row{
    max-width: 850px !important;
    margin: 0 auto;
  }
  .custom-row-smaller{
    max-width: 825px !important;
    margin: 0 auto;
  }
  .cardBody{
    overflow: hidden;
  }
  .space-top{
    padding-top: 100px;
  }
  .space-bottom{
    padding-bottom: 100px;
  }
  .text-shadow{
    text-shadow: 1px 1px 5px black;
  }
  .confrimButtons{
    width:100%; 
    justify-content: flex-end;
    display: flex;
    margin-left: -5px;
  }

</style>
