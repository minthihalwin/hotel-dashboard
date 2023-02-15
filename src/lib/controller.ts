import { addDoc, collection, deleteDoc, doc, getFirestore } from "firebase/firestore";
import { app } from "./firebase";
import { AddHotelType } from "../types/hotel";

export const firestore = getFirestore(app);


//HOTELS COLLECTION
export const hotelsCollection = collection(firestore,"hotels");


//ADD A NEW  DOCUMENT TO COLLECTION
export const addHotel = async (hotelData: AddHotelType) => {
    const newHotel = await addDoc(hotelsCollection, { ...hotelData });
    console.log(`new hotel was create at ${newHotel.path}`)
}

// DELETE A DOCUMENT IN COLLECTION
export const deleteHotel = async (id: string | undefined, navigate: any) => {
    const document = doc(firestore,`hotels/${id}`);
    await deleteDoc(document);
    console.log('The hotel has now been deleted')
    navigate('/');
}