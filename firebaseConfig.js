// import { initializeApp } from "firebase/app";
// import { getAnalytics, isSupported } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// // Correct Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA3Ln4ByzURA8drIrvka2PYQbPRF_NbVAw",
//   authDomain: "tech-cloud-erp-1532582683650.firebaseapp.com",
//   databaseURL: "https://tech-cloud-erp-1532582683650.firebaseio.com",
//   projectId: "tech-cloud-erp-1532582683650",
//   storageBucket: "tech-cloud-erp-1532582683650.firebasestorage.app",
//   messagingSenderId: "595044081279",
//   appId: "1:595044081279:web:3320af7c412fbc33bb694a",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth(app);
// export const storage = getStorage(app); // ✅ Ensure storage is exported

// // Initialize Analytics (only on the client-side)
// let analytics;
// if (typeof window !== "undefined") {
//   isSupported().then((supported) => {
//     if (supported) {
//       analytics = getAnalytics(app);
//     }
//   });
// }

// export { analytics };
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getRemoteConfig } from "firebase/remote-config";

const firebaseConfig = {
  // apiKey: "AIzaSyA3Ln4ByzURA8drIrvka2PYQbPRF_NbVAw",
  // authDomain: "tech-cloud-erp-1532582683650.firebaseapp.com",
  // databaseURL: "https://tech-cloud-erp-1532582683650.firebaseio.com",
  // projectId: "tech-cloud-erp-1532582683650",
  // storageBucket: "tech-cloud-erp-1532582683650.firebasestorage.app",
  // messagingSenderId: "595044081279",
  // appId: "1:595044081279:web:3320af7c412fbc33bb694a",
  apiKey: "AIzaSyBmC8_22Lg9ftdI9CAO5dSazUqSbZklgMk",
  authDomain: "tcerp-newversion.firebaseapp.com",
  projectId: "tcerp-newversion",
  storageBucket: "tcerp-newversion.firebasestorage.app",
  messagingSenderId: "870652555892",
  appId: "1:870652555892:web:e2ec66e914da10de84d721",
  measurementId: "G-80X9888HBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export function getFirebaseApp() {
  return getApps().length ? getApp() : initializeApp(firebaseConfig);
}

export function getFirebaseRemoteConfig() {
  const app = getFirebaseApp();
  const remoteConfig = getRemoteConfig(app);

  remoteConfig.settings = {
    minimumFetchIntervalMillis: 3600000,
  };

  remoteConfig.defaultConfig = {
    hero_variant: "A", // default variant
  };

  return remoteConfig;
}
