import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, updateDoc } from 'firebase/firestore';
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
export const getCollection = (collectionName) => {
    const colRef = collection(fireBaseDb, collectionName);
    return colRef;
};
export const getSingleDocData = (collectionName, dataId) => {
    const docRef = doc(fireBaseDb, collectionName, dataId);
    return docRef;
};
export const upDateData = async (collectionName, payload) => {
    const { orderId, paymentStatus } = payload;
    return await updateDoc(getSingleDocData(collectionName, orderId), {
        paymentStatus
    });
};
//# sourceMappingURL=index.js.map