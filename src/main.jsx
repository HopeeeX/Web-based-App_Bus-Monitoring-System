import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyA8rHrFZDliux9cjEPtDronqrbe6Xu9YWY",
  authDomain: "ube-express.firebaseapp.com",
  databaseURL: "https://ube-express-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ube-express",
  storageBucket: "ube-express.appspot.com",
  messagingSenderId: "180420907476",
  appId: "1:180420907476:web:cdd28dcc047fd9a7680641"
};
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
