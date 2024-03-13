// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvBIYPAkvz9rJsUeeulTr1CDwG1hZF0Go",
  authDomain: "netflixgpt-1004c.firebaseapp.com",
  projectId: "netflixgpt-1004c",
  storageBucket: "netflixgpt-1004c.appspot.com",
  messagingSenderId: "1075203543807",
  appId: "1:1075203543807:web:241c57b2e6dffa230db2ca",
  measurementId: "G-FCLHWDLJE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();