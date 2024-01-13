/* == Firebase == */
import { initializeApp } from './../node_modules/firebase/app';
import { getDatabase, ref, child, get, push , set} from './../node_modules/firebase/database';
import { getAuth, fetchSignInMethodsForEmail, createUserWithEmailAndPassword, onAuthStateChanged } from './../node_modules/firebase/auth';

console.log('Firebase loaded:', typeof initializeApp !== 'undefined' ? 'Yes' : 'No');

/* === Firebase Setup === */
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBy1dB-bUbRIQPsvMiO3nujknwP6ntdMes",
    authDomain: "asthmapp-121a8.firebaseapp.com",
    databaseURL: "https://asthmapp-121a8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "asthmapp-121a8",
    storageBucket: "asthmapp-121a8.appspot.com",
    messagingSenderId: "583573518616",
    appId: "1:583573518616:web:921a17f44e5fca27b3066d",
    measurementId: "G-PLRLWFR1X7"
};

import Nav from "./Nav.js";
import SignIn from "./SignIn.js";
import forgotPassword from "./ForgotPassword.js";
import SignUp from "./SignUp.js";
import Home from "./Home.js"

Nav();
SignIn(firebaseConfig);
SignUp(firebaseConfig);
Home(firebaseConfig);
forgotPassword(firebaseConfig);




// Use the executeSignUp function with SignUp as the callback


// Authentication Function
// async function authSignInWithEmail(emailInput) {
//     const usersRef = ref(getDatabase(), 'users');
//
//     try {
//         const snapshot = await get(usersRef);
//         if (snapshot.exists()) {
//             const users = snapshot.val();
//             const user = Object.values(users).find(user => user.email === email);
//             if (user) {
//                 console.log('User Data: ', user);
//                 return user;
//             } else {
//                 console.log('No data available for this user.');
//             }
//         } else {
//             console.log('No user data found.');
//         }
//     } catch (error) {
//         console.error('Error reading user data:', error);
//     }
// }