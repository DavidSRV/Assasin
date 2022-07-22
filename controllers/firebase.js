// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDspAciufbDdW0CPQ7UhOaaYKg8RjJSIs0",
  authDomain: "login-96e26.firebaseapp.com",
  projectId: "login-96e26",
  storageBucket: "login-96e26.appspot.com",
  messagingSenderId: "429388404957",
  appId: "1:429388404957:web:341301a63b25573a732334",
  measurementId: "G-JJ8YGD1PW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);