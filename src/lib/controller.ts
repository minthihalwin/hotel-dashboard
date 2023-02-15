import { collection, getFirestore } from "firebase/firestore";
import { app } from "./firebase";

export const firestore = getFirestore(app);


//HOTELS COLLECTION
export const hostelsCollection = collection(firestore,"hotels");