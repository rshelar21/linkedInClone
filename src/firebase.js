import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyDhDrnuZ2g0YC0xQ8fnjXkhHkpOKK1BhCo",
  authDomain: "linkedin-clone-31fd1.firebaseapp.com",
  projectId: "linkedin-clone-31fd1",
  storageBucket: "linkedin-clone-31fd1.appspot.com",
  messagingSenderId: "982093865726",
  appId: "1:982093865726:web:7c05dbc529f5a2cd5bbbaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, provider, storage}
export default db;

