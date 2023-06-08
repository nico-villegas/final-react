// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHaQYFLZfohQOI_rOp2QxAeveJoTFBA08",
    authDomain: "beto-s.firebaseapp.com",
    projectId: "beto-s",
    storageBucket: "beto-s.appspot.com",
    messagingSenderId: "275381246126",
    appId: "1:275381246126:web:e1c9456523253f9c0e353f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)