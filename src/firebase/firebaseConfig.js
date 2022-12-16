// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { getDatabase, ref, set, onValue, child, get } from "firebase/database";
import { assignUnityToUser } from "./usersStorage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYw1UYYIGQc6pH8QobXXnxuMeD8eGXkAk",
  authDomain: "apoyo-paes.firebaseapp.com",
  projectId: "apoyo-paes",
  storageBucket: "apoyo-paes.appspot.com",
  messagingSenderId: "1038495015471",
  appId: "1:1038495015471:web:95b59048c9064744fe5cda",
  databaseURL: "https://apoyo-paes-default-rtdb.firebaseio.com"
};

// Firebase Estefi
//const firebaseConfig = {
//  apiKey: "AIzaSyDAIqjXXeE3PRJEMyXASFl32UES4buKs6E",
//  authDomain: "apoyo-paes-9cb01.firebaseapp.com",
//  projectId: "apoyo-paes-9cb01",
//  storageBucket: "apoyo-paes-9cb01.appspot.com",
//  messagingSenderId: "569164723159",
//  appId: "1:569164723159:web:6005e2f6c51647f838d192",
//  databaseURL: "https://apoyo-paes-9cb01-default-rtdb.firebaseio.com"
//};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);