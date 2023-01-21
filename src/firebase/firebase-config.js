import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDpqbDzsNU2bqQwK3Tb69BGK-TwaKUDgO4",
    authDomain: "react-app-journal-24b62.firebaseapp.com",
    projectId: "react-app-journal-24b62",
    storageBucket: "react-app-journal-24b62.appspot.com",
    messagingSenderId: "70766479757",
    appId: "1:70766479757:web:7035be6f4af5faf41595c4"
  };

 firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}