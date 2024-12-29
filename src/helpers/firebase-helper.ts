import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyB_lYMfdsY5lRaF1p1R7NF4t0sjkud8BtM",
  authDomain: "mandal-art-18a9e.firebaseapp.com",
  projectId: "mandal-art-18a9e",
  storageBucket: "mandal-art-18a9e.firebasestorage.app",
  messagingSenderId: "1001829282219",
  appId: "1:1001829282219:web:6ff8912cf0ada091cfa2ee",
  measurementId: "G-2CMDG4CE08"
};

const app = initializeApp(firebaseConfig);
export function initFirebase() {
  getAnalytics(app);
}

const db = getFirestore(app);
export function getDB() {
  return db
}
