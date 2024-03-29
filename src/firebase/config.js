import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGEING_SENDERID,
  appId: import.meta.env.VITE_APPID,
};

// 파이어베이스 초기설정
initializeApp(firebaseConfig);

//DB초기화
const db = getFirestore();

//인증 설정 -> import 필요
const auth = getAuth();

export { db, auth };
