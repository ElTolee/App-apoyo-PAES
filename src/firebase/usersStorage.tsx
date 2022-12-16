import { ref, set, onValue, child, get, DataSnapshot, push, update } from "firebase/database";
import { db } from "./firebaseConfig";
export const saveUser = (user: any): Promise<void> => {
    return set(ref(db, "users"), user);
}

interface User {
    email: string;
    unities: object;
}

interface Course {
    name: string;
    unities: Unity[]
}

interface Unity {
    id: number;
    course: string;
    name: string;
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