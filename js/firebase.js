// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDutlQnDMHUocbx2qLgXhZaagRbkLa_sPQ",
  authDomain: "andrestiendaweb.firebaseapp.com",
  projectId: "andrestiendaweb",
  storageBucket: "andrestiendaweb.appspot.com",
  messagingSenderId: "1065747029058",
  appId: "1:1065747029058:web:1f4920c5f284f3379061db",
  measurementId: "G-E7RTFYENE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);