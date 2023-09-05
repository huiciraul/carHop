// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzWcJWYamU7By3sDiOL63DUaNwmGYSGas",
  authDomain: "h-tech-67243.firebaseapp.com",
  projectId: "h-tech-67243",
  storageBucket: "h-tech-67243.appspot.com",
  messagingSenderId: "849665118648",
  appId: "1:849665118648:web:89d2e2c00d092d1bbc7f4d",
  measurementId: "G-52EMK485TC",
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);
export const FIREBASEAUTH = initializeAuth(initFirebase, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(initFirebase);
