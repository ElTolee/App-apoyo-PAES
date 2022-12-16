import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
import User from "../components/interfaces/user.interface";
import { auth } from "./firebaseConfig";
import { saveUser } from "./usersStorage";
  
  const signIn = async (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user : User = userCredential.user;
        saveUser({email: email, uid: user.uid});
        return userCredential.user;
      })
      .catch((error) => {
        console.error(error, "Caatch");
        return error;
      });
  };

  const logIn = async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Inicio de sesión exitoso");
        
        return true;
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
  };
  
 
  
  export { signIn, logIn};
  