// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import {getAuth} from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYw1UYYIGQc6pH8QobXXnxuMeD8eGXkAk",
  authDomain: "apoyo-paes.firebaseapp.com",
  projectId: "apoyo-paes",
  storageBucket: "apoyo-paes.appspot.com",
  messagingSenderId: "1038495015471",
  appId: "1:1038495015471:web:95b59048c9064744fe5cda"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firebase = getDatabase(app);
