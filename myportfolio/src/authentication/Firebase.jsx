// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-realestate-c4beb.firebaseapp.com",
  projectId: "mern-realestate-c4beb",
  storageBucket: "mern-realestate-c4beb.appspot.com",
  messagingSenderId: "747738552819",
  appId: "1:747738552819:web:33f952754683f1364bda86"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);