import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyASSyKrMMOzd_tDxwypQvseMnAvqd86MUU",
  authDomain: "ciclista-74e02.firebaseapp.com",
  projectId: "ciclista-74e02",
  storageBucket: "ciclista-74e02.appspot.com",
  messagingSenderId: "643883682778",
  appId: "1:643883682778:web:e622becafaea6879d58ee3"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
