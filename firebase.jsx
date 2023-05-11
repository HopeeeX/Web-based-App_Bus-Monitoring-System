// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);