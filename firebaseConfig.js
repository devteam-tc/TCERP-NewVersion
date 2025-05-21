// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmC8_22Lg9ftdI9CAO5dSazUqSbZklgMk",
  authDomain: "tcerp-newversion.firebaseapp.com",
  projectId: "tcerp-newversion",
  storageBucket: "tcerp-newversion.firebasestorage.app",
  messagingSenderId: "870652555892",
  appId: "1:870652555892:web:e2ec66e914da10de84d721",
  measurementId: "G-29P5QQBR6Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, auth, storage, db };
