import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDm5NZ1XNPA0cW-3QPGp22vVcMmZwvDBlk",
  authDomain: "bornemsezwemclub-371d3.firebaseapp.com",
  projectId: "bornemsezwemclub-371d3",
  storageBucket: "bornemsezwemclub-371d3.appspot.com",
  messagingSenderId: "426757042110",
  appId: "1:426757042110:web:f91ca94391e89f1803d3ef",
  databaseURL: "https://bornemsezwemclub-371d3-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);