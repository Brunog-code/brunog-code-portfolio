import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqDbR1Gt9MJXO13bPw9XsmSP4Btn4LSYk",
  authDomain: "portfolio-brunog-code.firebaseapp.com",
  projectId: "portfolio-brunog-code",
  storageBucket: "portfolio-brunog-code.firebasestorage.app",
  messagingSenderId: "943885352425",
  appId: "1:943885352425:web:5afbe795dfa31e1ab09f78",
  measurementId: "G-JL002S33LY",
};

//inicializa o firebase
const firebaseApp = initializeApp(firebaseConfig);

//conexão com o banco de dados
export const db = getFirestore(firebaseApp);
