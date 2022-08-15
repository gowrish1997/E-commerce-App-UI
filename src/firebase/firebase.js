import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import 'firebase/compat/analytics'
var firebaseConfig = {
  apiKey: "AIzaSyB7DnFIzszjr_eX6VGlR-8B572W3akj41c",
  authDomain: "shopping-cart-1562d.firebaseapp.com",
  projectId: "shopping-cart-1562d",
  storageBucket: "shopping-cart-1562d.appspot.com",
  messagingSenderId: "438550137327",
  appId: "1:438550137327:web:bc9c552c961f39a9634e1a",
  measurementId: "G-RFXLN2K7HB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//analytics is optional for this tutoral 
  firebase.analytics();
 export const storage = firebase.storage()
  