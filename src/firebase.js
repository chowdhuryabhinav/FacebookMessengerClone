import firebase from 'firebase';

const firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyAFiBw2JtkcEMHN7Pkqx5Hgzd9viFZcxgo",
  authDomain: "facebook-messenger-clone-90aab.firebaseapp.com",
  projectId: "facebook-messenger-clone-90aab",
  storageBucket: "facebook-messenger-clone-90aab.appspot.com",
  messagingSenderId: "25008914171",
  appId: "1:25008914171:web:28e47a6a577456b1683a5e",
  measurementId: "G-8L0ZGRHXV4"
});

const db = firebaseApp.firestore();

export default db;

