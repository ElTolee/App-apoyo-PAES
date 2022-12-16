import { ref, set, onValue, child, get, DataSnapshot, push, update } from "firebase/database";
import Unity from "../components/interfaces/unity.interface";
import User from "../components/interfaces/user.interface";
import { db } from "./firebaseConfig";



export const saveUser = async (user: User): Promise<void> => {
    const updates: any = {};
    updates[`/users/${user.uid}`] = user;
    return update(ref(db), updates);
}

export const assignUnityToUser = async (uid: string, unity: Unity): Promise<void> => {
    const userDb : DataSnapshot = await getUser(uid);
    //const userUnities : object = userDb.val().unities || {};
    //const count: number = userUnities.length || 1; 
    //userUnities[count] = unity;
    const updates: any = {};
    const newKey = push(child(ref(db), `users/${uid}/unities`)).key;
    updates[`/users/${uid}/unities/${newKey}`] = unity;

    update(ref(db), updates);
}

export const getUser = async (uid: string): Promise<DataSnapshot> => {
    return get(ref(db, `users/${uid}`))
}

export const getUserUnities = async (uid: string): Promise<DataSnapshot> => {
    return get(ref(db, `users/${uid}/unities`))
}
