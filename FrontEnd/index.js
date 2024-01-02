/* === Imports === */
//import { initializeApp } from "firebase/app"
//import { getFirestore, collection, query, where, getDocs, addDoc } from "firebase/firestore";
//import { initializeApp } from 'https://cdn.jsdelivr.net/npm/firebase/firebase-app.js';
//import { getFirestore } from 'https://cdn.jsdelivr.net/npm/firebase/firestore/dist/index.esm2017.min.js';
//import { getDatabase, connectDatabaseEmulator } from "firebase/database";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { initializeApp } from "firebase/app"
import { getDatabase, ref, push} from 'firebase/database'

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


const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
const users = ref(db, "users")
/* === UI === */

/* == UI - Elements == */

const inputFieldsSignIn = document.getElementById("inputFielsSignIn")
const sectionEmail = document.getElementById("sectionEmail")

const sectionPassword = document.getElementById("sectionPassword")

/* == UI - Buttons == */
const passwordEye1El = document.getElementById("PasswordEye1")
const signInButtonEl = document.getElementById("signInBtn")

/* == UI - Variables == */
const emailInput = document.getElementById('emailInput')
const passwordInput = document.getElementById('passwordInput')

/* == Event Listeners == */
signInButtonEl.addEventListener("click", authSignInWithEmail);
forgotPasswordLinkEl.addEventListener("click", () => navigateTo("./ForgotPassword.html"));
signUpLinkEl.addEventListener("click", () => navigateTo("./SignUp.html"));


/* == Function - Navigate to new page == */

function navigateTo(url){
    window.location.href = url;
}


/* === Functions === */

function authSignInWithEmail() {
    const email = emailInput.value;
    const password = passwordInput.value;
    console.log(readDataFromDB(email))

    // Implementation for signing in
    // After successful sign in, you might navigate to home page
    navigateTo("./Home.html");
}
/* === Functions - UI Functions === */



/* === Async Functions == */
// Import firebase
const firebase = require("firebase/app");
require("firebase/database");

// Initialize Firebase
// (Make sure you've already initialized Firebase with your config)

// Async function to add data to Firebase Realtime Database
async function addDataToDB(data) {
    try {
        const db = firebase.database();
        const ref = db.ref("users");
        const newChildRef = ref.push();
        await newChildRef.set(data);
        console.log("Data added with key: ", newChildRef.key);
    } catch (error) {
        console.error("Error adding data: ", error.message);
    }
}

// Async function to read data from Firebase Realtime Database
async function readDataFromDB() {
    try {
        const db = firebase.database();
        const ref = db.ref("users");
        const snapshot = await ref.once('value');
        const value = snapshot.val();
        console.log("Value is:", value);
        return value; // Returns the data read from the database
    } catch (error) {
        console.error("Failed to read value:", error.message);
    }
}


