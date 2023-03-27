import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { updateData } from 'types/types';

export const firebaseConfig = {
    apiKey: "AIzaSyCCgBSrjAFekKRd0pIix991cgaOBwVNbOA",
    authDomain: "car-wash-b20fa.firebaseapp.com",
    projectId: "car-wash-b20fa",
    storageBucket: "car-wash-b20fa.appspot.com",
    messagingSenderId: "811939751623",
    appId: "1:811939751623:web:058ecf036b1118a77900e2"
};

export const firebaseInit = initializeApp(firebaseConfig);
export const fireBaseDb = getFirestore();
export const getCollection = (collectionName:string) => {
    const colRef = collection(fireBaseDb, collectionName);
    return colRef;
}
export const getSingleDocData = (collectionName:string, dataId:string) => {
    const docRef = doc(fireBaseDb, collectionName, dataId)
    return docRef;
}
export const getCollectionData = async (collectionName:string) => {
    const getData = await getDocs(getCollection(collectionName));
    return getData;
}
export const upDateData = async (collectionName:string, payload: updateData) => {
    const { orderId, paymentStatus } = payload
    const updateDataFbRequest = await updateDoc(getSingleDocData(collectionName, orderId), {
        paymentStatus
    });

    console.log(updateDataFbRequest)
    return updateDataFbRequest;
}