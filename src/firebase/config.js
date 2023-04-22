// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBakHUP9UQTjJv7q7YrqSh5TOQrprzHDQs',
  authDomain: 'react-redux-8f6ab.firebaseapp.com',
  projectId: 'react-redux-8f6ab',
  storageBucket: 'react-redux-8f6ab.appspot.com',
  messagingSenderId: '661351556220',
  appId: '1:661351556220:web:006dbafc62ec26b99d55f9',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
