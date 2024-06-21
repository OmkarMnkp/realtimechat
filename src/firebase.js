// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth/cordova";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBHn3XKP_vQn3FRyGx8R_AmT47LZy9A2yU",
//   authDomain: "realtimechatapp-f83de.firebaseapp.com",
//   projectId: "realtimechatapp-f83de",
//   storageBucket: "realtimechatapp-f83de.appspot.com",
//   messagingSenderId: "666228693983",
//   appId: "1:666228693983:web:99b7d3fe4627efc5b9c26a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHn3XKP_vQn3FRyGx8R_AmT47LZy9A2yU",
  authDomain: "realtimechatapp-f83de.firebaseapp.com",
  projectId: "realtimechatapp-f83de",
  storageBucket: "realtimechatapp-f83de.appspot.com",
  messagingSenderId: "666228693983",
  appId: "1:666228693983:web:99b7d3fe4627efc5b9c26a"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
