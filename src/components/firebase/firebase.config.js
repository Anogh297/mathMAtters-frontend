
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAYOZA7AveW7YHkUD0HOL4VPzqrulqVhPw",
  authDomain: "mathmatters-8e8ff.firebaseapp.com",
  projectId: "mathmatters-8e8ff",
  storageBucket: "mathmatters-8e8ff.firebasestorage.app",
  messagingSenderId: "299226086975",
  appId: "1:299226086975:web:5189e15275291a0987828a",
  measurementId: "G-1052JM0RVM"
};

const app = initializeApp(firebaseConfig);
export default app;
const analytics = getAnalytics(app);