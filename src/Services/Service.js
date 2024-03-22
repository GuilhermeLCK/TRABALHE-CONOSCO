import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvaqbSQqtSTpE4vs1jiF4anMnV3GKNiwo",
  authDomain: "trabalhe-conosco-b5cd9.firebaseapp.com",
  projectId: "trabalhe-conosco-b5cd9",
  storageBucket: "trabalhe-conosco-b5cd9.appspot.com",
  messagingSenderId: "21481935154",
  appId: "1:21481935154:web:25a2ba66cbcd1e38ff872b",
  measurementId: "G-8Y7G9TSMX3",
};

const initFirebaseApp = initializeApp(firebaseConfig);

const authFirebase = getAuth(initFirebaseApp);

const dbBanco = getFirestore(initFirebaseApp);

export { authFirebase, dbBanco };
