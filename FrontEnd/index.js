/* === Imports === */
//import { initializeApp } from "firebase/app"
//import { getFirestore, collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { initializeApp } from 'https://cdn.jsdelivr.net/npm/firebase/firebase-app.js';
import { getFirestore } from 'https://cdn.jsdelivr.net/npm/firebase/firestore/dist/index.esm2017.min.js';



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
const db = getFirestore(app)

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
    //const email = emailInput.value;
    //const password = passwordInput.value;
    //readDataFromDB(email)

    // Implementation for signing in
    // After successful sign in, you might navigate to home page
    navigateTo("./Home.html");
}
/* === Functions - UI Functions === */



/* === Async Functions == */
async function addDataToDB(postBody) {

    try {
        const docRef = await addDoc(collection(db, "users"), {
            body: 'test'
        })
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error(error.message);
    }
}

async function readDataFromDB(name, email) {
    console.log("AAAAAAAAAAAAAA")
    try {
        // Create a query against the collection.
        const q = query(collection(db, "users"), where("name", "==", name), where("email", "==", email));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} =>`, doc.data());
        });
    } catch (error) {
        console.error(error.message);
    }
}

