import firebase from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCsJwmn1s6axPuOvtxreBC1NIKQAvhgkf4",
    authDomain: "myproject-da10a.firebaseapp.com",
    projectId: "myproject-da10a",
    storageBucket: "myproject-da10a.appspot.com",
    messagingSenderId: "242580217904",
    appId: "1:242580217904:web:17e66962a6a80fbea4cdf5"
  };
firebase.initializeApp(firebaseConfig);
export default firebase;