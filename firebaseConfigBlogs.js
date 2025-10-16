// Firebase configuration specifically for Blogs
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfigBlogs = {
  apiKey: "AIzaSyA3Ln4ByzURA8drIrvka2PYQbPRF_NbVAw",
  authDomain: "tech-cloud-erp-1532582683650.firebaseapp.com",
  databaseURL: "https://tech-cloud-erp-1532582683650.firebaseio.com",
  projectId: "tech-cloud-erp-1532582683650",
  storageBucket: "tech-cloud-erp-1532582683650.firebasestorage.app",
  messagingSenderId: "595044081279",
  appId: "1:595044081279:web:3320af7c412fbc33bb694a",
  measurementId: "G-YSB4T0X2FK"
};

// Initialize Firebase for Blogs with a unique name
const blogApp = !getApps().find(app => app.name === 'blogs-app') 
  ? initializeApp(firebaseConfigBlogs, 'blogs-app')
  : getApp('blogs-app');

export const blogDb = getFirestore(blogApp);
export const blogAuth = getAuth(blogApp);
export const blogStorage = getStorage(blogApp);

// Initialize Analytics (only on the client-side)
let blogAnalytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      blogAnalytics = getAnalytics(blogApp);
    }
  });
}

export { blogAnalytics };
