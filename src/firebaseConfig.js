// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
//paquete mas comprimido (lite)
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeu---7obeCfYAQK0Qc8MFONBd4T9Wsyk",
  authDomain: "paulas-6a835.firebaseapp.com",
  projectId: "paulas-6a835",
  storageBucket: "paulas-6a835.firebasestorage.app",
  messagingSenderId: "623956413619",
  appId: "1:623956413619:web:b982e27e5c6b10e16934c6",
  measurementId: "G-3E07GTF3G7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

const db = getFirestore()
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(firebaseApp);

export {auth,storage,db};