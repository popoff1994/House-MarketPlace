import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyACJAyrQiT4At3C_x0ntofupA8SVZAKIcg",
  authDomain: "house-market-place-88a28.firebaseapp.com",
  projectId: "house-market-place-88a28",
  storageBucket: "house-market-place-88a28.appspot.com",
  messagingSenderId: "498770078565",
  appId: "1:498770078565:web:b84cf71241f56d735a8f8c"
};


initializeApp(firebaseConfig);
export const db = getFirestore()