
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyD4oqUAiVn0qABuxy90UeFZxauZMlCOHO0",
  authDomain: "ecommerce-coderh-6c65c.firebaseapp.com",
  projectId: "ecommerce-coderh-6c65c",
  storageBucket: "ecommerce-coderh-6c65c.appspot.com",
  messagingSenderId: "692626648761",
  appId: "1:692626648761:web:34a012838312b263043568"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)