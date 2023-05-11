// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8rHrFZDliux9cjEPtDronqrbe6Xu9YWY",
  authDomain: "ube-express.firebaseapp.com",
  databaseURL: "https://ube-express-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ube-express",
  storageBucket: "ube-express.appspot.com",
  messagingSenderId: "180420907476",
  appId: "1:180420907476:web:6c51eb1dcda7623d680641"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and set persistence to session
export const auth = getAuth(app);
setPersistence(auth, browserSessionPersistence);

// Initialize Firestore
export const firestore = getFirestore(app);
