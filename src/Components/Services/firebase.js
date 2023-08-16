import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  query,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAb44F6aQIh22-T4cAZYsNl2p3UI13dl-E",
  authDomain: "react-app-burgerworld.firebaseapp.com",
  projectId: "react-app-burgerworld",
  storageBucket: "react-app-burgerworld.appspot.com",
  messagingSenderId: "420600769705",
  appId: "1:420600769705:web:9b245f18c696fa0e430db8",
};

const appFirebase = initializeApp(firebaseConfig);

const db = getFirestore(appFirebase);

async function getData() {
  const productsRef = collection(db, "products");
  const documentsSnapshot = await getDocs(productsRef);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map((item) => {
    let productFullData = item.data();
    productFullData.id = item.id;
    return productFullData;
  });
  return docsData;
}

async function getProductData(id) {
  const docRef = doc(db, "products", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("No encontramos tu hamburguesa");
  }
}

async function getCategoryData(categoryId) {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("category", "==", categoryId));
  const documentsSnapshot = await getDocs(q);
  const documents = documentsSnapshot.docs;

  return documents.map((item) => ({ ...item.data(), id: item.id }));
}

async function createOrder(orderData) {
  const collectionRef = collection(db, "products");

  const docCreated = await addDoc(collectionRef, orderData);

  return docCreated.id;
}
export { getData, getProductData, getCategoryData, createOrder };
