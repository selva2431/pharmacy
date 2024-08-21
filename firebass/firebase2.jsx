// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWM9hXQ8Zx1mgydVBoAZmPUrb1wIaR0b4",
  authDomain: "pharma-ff0b5.firebaseapp.com",
  projectId: "pharma-ff0b5",
  storageBucket: "pharma-ff0b5.appspot.com",
  messagingSenderId: "695262537124",
  appId: "1:695262537124:web:69f47d56b3c2fba20c0d31",
  measurementId: "G-J22M4QPRM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
