import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDyZp5_b4QTgVS3FkF6JH33BuyEJ_ihRCY",
  authDomain: "linkedin-clone-8e820.firebaseapp.com",
  projectId: "linkedin-clone-8e820",
  storageBucket: "linkedin-clone-8e820.appspot.com",
  messagingSenderId: "767151624370",
  appId: "1:767151624370:web:fbc4422fcfaff8f7d979ab",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
