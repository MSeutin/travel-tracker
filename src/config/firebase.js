import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk9xyO4RnE9gUNGPfRnTfWxx-gWxz5Znw",
  authDomain: "day-tracker-8039e.firebaseapp.com",
  projectId: "day-tracker-8039e",
  storageBucket: "day-tracker-8039e.appspot.com",
  messagingSenderId: "550055021226",
  appId: "1:550055021226:web:dfded485af80352035ded3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);