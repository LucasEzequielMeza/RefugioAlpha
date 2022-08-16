import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyC6HOfmHx1IeJfYi0B9EZEnjGsYw_miEOc",
  authDomain: "refugioalpha.firebaseapp.com",
  projectId: "refugioalpha",
  storageBucket: "refugioalpha.appspot.com",
  messagingSenderId: "91461492254",
  appId: "1:91461492254:web:35fab355398e35b55e980f"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
