// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb-aHFfwvX7HRrAeomW_D1bGwx5SlyYbw",
  authDomain: "mern-blog-e7eee.firebaseapp.com",
  projectId: "mern-blog-e7eee",
  storageBucket: "mern-blog-e7eee.appspot.com",
  messagingSenderId: "564250065820",
  appId: "1:564250065820:web:07f639ba94cd1ea78de659"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);