import Vue from 'vue'
import Vuex from 'vuex'
import router from "../router"
import firebase from "firebase"
import db from "../firebase/init.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    version:null,
    isMobile:null,
    userRole: null,
    userId: null,
    userFirstName:null,
    userLastName:null,
    authenticated:false
  },

  mutations: {

   setUser(state,payload){
    state.userFirstName = payload.firstName;
    state.userLastName = payload.lastName;
    state.userRole = payload.role;
    state.userId = payload.id;
    state.authenticated = true;
   },

   unsetUser(state,payload){
    state.userFirstName = null;
    state.userLastName = null;
    state.userRole = null;
    state.userId = null;
    state.authenticated = false;
   }

  },
  actions: {

    login({ commit }, payload) {
      firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        auth => {
          console.log(auth)
          db
          .collection('users')
          .doc(auth.user.uid)
          .get()
          .then(doc=>{
            let newUser = doc.data();
            newUser.id = doc.id;
            commit("setUser", newUser);
          })
      })
      .then(()=>{
        router.replace("/");
      })
      
    },

    logout({ commit },payload){
      firebase
      .auth()
      .signOut()
      .then(() => {
        commit("unsetUser");
        router.replace("/login");
      })
    }
  },

});


