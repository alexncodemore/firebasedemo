// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyjDIGLjAYBs64PZk2mb0BTkOEDR5p_tY",
  authDomain: "dikshita-demo.firebaseapp.com",
  databaseURL: "https://dikshita-demo-default-rtdb.firebaseio.com",
  projectId: "dikshita-demo",
  storageBucket: "dikshita-demo.firebasestorage.app",
  messagingSenderId: "168104442890",
  appId: "1:168104442890:web:be6fde24086b07eba633f3",
  databaseURL: "https://dikshita-demo-default-rtdb.firebaseio.com"
  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);