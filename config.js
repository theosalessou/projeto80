import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyC_WAyjh1i87bQztMSdA-AfY-Q775wRIC0",
  authDomain: "ciclistaeletronico.firebaseapp.com",
  projectId: "ciclistaeletronico",
  storageBucket: "ciclistaeletronico.appspot.com",
  messagingSenderId: "1001281043029",
  appId: "1:1001281043029:web:f2d13514800280ef42f2dc"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
