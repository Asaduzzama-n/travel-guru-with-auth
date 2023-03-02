// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCssaWNjHcFh-l0cQ4h-8MAcX8x0l9stb8",
  authDomain: "travel-guru-with-auth.firebaseapp.com",
  projectId: "travel-guru-with-auth",
  storageBucket: "travel-guru-with-auth.appspot.com",
  messagingSenderId: "237169243935",
  appId: "1:237169243935:web:9adcdd42344e2283fa222a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;