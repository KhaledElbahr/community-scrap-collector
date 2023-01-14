import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';


export const firebaseConfig = {
  apiKey: "AIzaSyAF_WzzlKKTTF_lbPSyVCypc0lfhtXvAdI",
  authDomain: "csc-iti-project.firebaseapp.com",
  projectId: "csc-iti-project",
  storageBucket: "csc-iti-project.appspot.com",
  messagingSenderId: "489248221903",
  appId: "1:489248221903:web:65732f7a8d12bccd4ca5ba"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);