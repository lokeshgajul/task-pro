// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBLbesUDGF4T0Sx5TAt19NCiPEZIRH3hE",
  authDomain: "task-pro-ae6db.firebaseapp.com",
  projectId: "task-pro-ae6db",
  storageBucket: "task-pro-ae6db.appspot.com",
  messagingSenderId: "457710720225",
  appId: "1:457710720225:web:120f28c8eb6da5f2dc13a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// initialize Firebase Auth for that app immediately
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const db = getFirestore(app);
export { app, auth, db };
