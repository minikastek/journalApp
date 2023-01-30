// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpqbDzsNU2bqQwK3Tb69BGK-TwaKUDgO4",
  authDomain: "react-app-journal-24b62.firebaseapp.com",
  projectId: "react-app-journal-24b62",
  storageBucket: "react-app-journal-24b62.appspot.com",
  messagingSenderId: "70766479757",
  appId: "1:70766479757:web:7035be6f4af5faf41595c4"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );