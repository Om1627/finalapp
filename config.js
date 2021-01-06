import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyB11bQ8_qC06Rx2v4sh6O8XLI87HqdbMSE",
    authDomain: "study-point-ce039.firebaseapp.com",
    projectId: "study-point-ce039",
    storageBucket: "study-point-ce039.appspot.com",
    messagingSenderId: "84390220620",
    appId: "1:84390220620:web:81c8ea4168b962695d75e9"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
