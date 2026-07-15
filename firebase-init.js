import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { 
  getFirestore, 
  getDoc, 
  doc, 
  collection, 
  getDocs, 
  setDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  serverTimestamp,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAzdPxflVzGt9-xtDO85AFiOGlXMbHZrp8",
  authDomain: "ffgfd-78e21.firebaseapp.com",
  projectId: "ffgfd-78e21",
  storageBucket: "ffgfd-78e21.firebasestorage.app",
  messagingSenderId: "673256514378",
  appId: "1:673256514378:web:cd23a2811c74b5ff1157b3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.db = db;
window.firestore = { 
  getDoc, 
  doc, 
  collection, 
  getDocs, 
  setDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  serverTimestamp,
  onSnapshot 
};

window.__firebaseReady = true;
window.dispatchEvent(new Event('firebaseReady'));
