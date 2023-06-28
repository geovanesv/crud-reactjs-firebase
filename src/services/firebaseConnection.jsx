
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBV1Fu-ilK6ya70Pyb1l7SVVl25aeZfovU",
  authDomain: "crud-reactjs-pj2.firebaseapp.com",
  projectId: "crud-reactjs-pj2",
  storageBucket: "crud-reactjs-pj2.appspot.com",
  messagingSenderId: "1070618035990",
  appId: "1:1070618035990:web:7db923c8be5c8f1cb9b237"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export{db}

