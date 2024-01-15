import { initializeApp } from "firebase/app";
import { getAuth as firebaseGetAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateEmail as firebaseUpdateEmail, updatePassword as firebaseUpdatePassword } from "firebase/auth";

const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
});

export const auth = firebaseGetAuth(app);
export const getAuth = () => auth;
export { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, firebaseUpdateEmail as updateEmail, firebaseUpdatePassword as updatePassword };
export default app;
