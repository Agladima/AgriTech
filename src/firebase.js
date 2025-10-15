// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzgVwqDiacK__nVQQYSmCJvO5GXKMM6aQ",
  authDomain: "agritech-ba33e.firebaseapp.com",
  projectId: "agritech-ba33e",
  storageBucket: "agritech-ba33e.firebasestorage.app",
  messagingSenderId: "313080791631",
  appId: "1:313080791631:web:e938f99d09f69812a8603a",
  measurementId: "G-KXSPTNEJN0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
