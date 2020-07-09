import firebase from "firebase";
//import firestore from "firebase/firestore";

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCM3ek48Kc11v5YE8yCcEfSysMNctlofv4",
    authDomain: "sweet-onion-dca73.firebaseapp.com",
    databaseURL: "https://sweet-onion-dca73.firebaseio.com",
    projectId: "sweet-onion-dca73",
    storageBucket: "sweet-onion-dca73.appspot.com",
    messagingSenderId: "733177357255",
    appId: "1:733177357255:web:dbff87651f980cf2716fe2",
    measurementId: "G-RRXLDML401"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({});
export default firebaseApp.firestore();
