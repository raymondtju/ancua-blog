import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-me-ef9f4.firebaseapp.com",
  projectId: "blog-me-ef9f4",
  storageBucket: "blog-me-ef9f4.appspot.com",
  messagingSenderId: "675705423778",
  appId: "1:675705423778:web:da4a6b8e125b85973e54fb",
};

export const app = initializeApp(firebaseConfig);
