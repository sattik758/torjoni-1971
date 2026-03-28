// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-hnOGh0gArBHbhppaF9C7yYfDTJRvmek",
  authDomain: "torjoni-1971.firebaseapp.com",
  projectId: "torjoni-1971",
  storageBucket: "torjoni-1971.firebasestorage.app",
  messagingSenderId: "692823474030",
  appId: "1:692823474030:web:5612a5a02ad1530bf7cb7f",
  measurementId: "G-66JW8HWB8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);