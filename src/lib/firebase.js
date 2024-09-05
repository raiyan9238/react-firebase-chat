import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-9cb74.firebaseapp.com",
  projectId: "reactchat-9cb74",
  storageBucket: "reactchat-9cb74.appspot.com",
  messagingSenderId: "827893827175",
  appId: "1:827893827175:web:01dab1e95e6674df26f6c2"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()//login/register
export const db = getFirestore()//user creation
export const storage = getStorage()//storing their data
