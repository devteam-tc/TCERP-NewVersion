// // Firebase configuration specifically for Blogs
// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAnalytics, isSupported } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { getRemoteConfig } from "firebase/remote-config";

// const firebaseConfigBlogs = {
//   // apiKey: "AIzaSyA3Ln4ByzURA8drIrvka2PYQbPRF_NbVAw",
//   // authDomain: "tech-cloud-erp-1532582683650.firebaseapp.com",
//   // databaseURL: "https://tech-cloud-erp-1532582683650.firebaseio.com",
//   // projectId: "tech-cloud-erp-1532582683650",
//   // storageBucket: "tech-cloud-erp-1532582683650.firebasestorage.app",
//   // messagingSenderId: "595044081279",
//   // appId: "1:595044081279:web:3320af7c412fbc33bb694a",
//   // measurementId: "G-YSB4T0X2FK"
//   apiKey: "AIzaSyBmC8_22Lg9ftdI9CAO5dSazUqSbZklgMk",
//   authDomain: "tcerp-newversion.firebaseapp.com",
//   databaseURL: "https://tcerp-newversion-default-rtdb.firebaseio.com",
//   projectId: "tcerp-newversion",
//   storageBucket: "tcerp-newversion.firebasestorage.app",
//   messagingSenderId: "870652555892",
//   appId: "1:870652555892:web:e2ec66e914da10de84d721",
//   measurementId: "G-80X9888HBR"
// };

// // Initialize Firebase for Blogs with a unique name
// const blogApp = !getApps().find(app => app.name === 'blogs-app') 
//   ? initializeApp(firebaseConfigBlogs, 'blogs-app')
//   : getApp('blogs-app');

// export const blogDb = getFirestore(blogApp);
// export const blogAuth = getAuth(blogApp);
// export const blogStorage = getStorage(blogApp);

// let analytics;
// if (typeof window !== "undefined") {
//   isSupported().then((supported) => {
//     if (supported) {
//       analytics = getAnalytics(app);
//     }
//   });
// }

// export function getFirebaseApp() {
//   return getApps().length ? getApp() : initializeApp(firebaseConfig);
// }

// export function getFirebaseRemoteConfig() {
//   const app = getFirebaseApp();
//   const remoteConfig = getRemoteConfig(app);

//   remoteConfig.settings = {
//     minimumFetchIntervalMillis: 3600000,
//   };

//   remoteConfig.defaultConfig = {
//     hero_variant: "A", // default variant
//   };

//   return remoteConfig;
// }
// firebaseConfigBlogs.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getRemoteConfig } from "firebase/remote-config";

const firebaseConfigBlogs = {
  apiKey: "AIzaSyBmC8_22Lg9ftdI9CAO5dSazUqSbZklgMk",
  authDomain: "tcerp-newversion.firebaseapp.com",
  databaseURL: "https://tcerp-newversion-default-rtdb.firebaseio.com",
  projectId: "tcerp-newversion",
  storageBucket: "tcerp-newversion.firebasestorage.app",
  messagingSenderId: "870652555892",
  appId: "1:870652555892:web:e2ec66e914da10de84d721",
  measurementId: "G-80X9888HBR"
};

// Initialize Firebase app (named)
const blogApp =
  getApps().find(app => app.name === "blogs-app")
    ? getApp("blogs-app")
    : initializeApp(firebaseConfigBlogs, "blogs-app");

// Services
export const blogDb = getFirestore(blogApp);
export const blogAuth = getAuth(blogApp);
export const blogStorage = getStorage(blogApp);

// Analytics (client-only)
let analytics = null;
export const getAnalyticsInstance = () => {
  if (typeof window === "undefined") return null;
  if (!analytics) {
    analytics = getAnalytics(blogApp);
  }
  return analytics;
};
// Initialize analytics only on client side
if (typeof window !== "undefined") {
  isSupported().then(supported => {
    if (supported) {
      getAnalyticsInstance();
    }
  });
}

export { analytics };

// Remote Config
export function getFirebaseRemoteConfig() {
  const remoteConfig = getRemoteConfig(blogApp);

  remoteConfig.settings = {
    minimumFetchIntervalMillis: 3600000,
  };

  remoteConfig.defaultConfig = {
    hero_variant: "A",
  };

  return remoteConfig;
}
