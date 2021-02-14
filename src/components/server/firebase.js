import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBy4dPSerA8tj3F0PtjXNyJ2XgZJUuOOqk",
  authDomain: "linkedin-clone-edafc.firebaseapp.com",
  projectId: "linkedin-clone-edafc",
  storageBucket: "linkedin-clone-edafc.appspot.com",
  messagingSenderId: "908809278960",
  appId: "1:908809278960:web:555ae10434931db4103935",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
