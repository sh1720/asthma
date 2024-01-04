// /* === Imports === */
// import { firebase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import { getDatabase, ref, set, onValue, remove } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
// import { admin } from "firebase/app";
// import {getDatabase, ref, push} from "firebase/database";
// import firebase from "firebase/compat";







// Use Bundler to rollup the entire code base - Rollup/Webpack
// Firebase App (the core Firebase SDK) is always required and must be listed before other Firebase SDKs
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, push } from "firebase/database"; // Import the specific Firebase services you need
import { getAnalytics } from "firebase/analytics";

console.log('FBS loaded:', typeof firebase !== 'undefined' ? 'Yes' : 'No');

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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const messagesRef = ref(db,'users');

// Read data from Firebase
get(messagesRef).then((snapshot) => {
    console.log('Users from Firebase:');
    snapshot.forEach((childSnapshot) => {
        const usr = childSnapshot.val();
        console.table(usr);
    });
}).catch((error) => {
    console.error('Error reading data from Firebase:', error.message);
});






// //
// // /* == Firebase Variables & Constants == */
// const app = initializeApp(firebaseConfig)
// //const analytics = getAnalytics(app)
// const db = getDatabase(app)
//
// /* == Variables from HTML == */
// const emailAddress = document.getElementById("emailAdress")
// const userName = document.getElementById("userName")
// const newPassword = document.getElementById("newPassword")
// const confirmPassword = document.getElementById("passwordConfirm")
//
// var obj = {
//
//     topNav: function
//     buttonPrimaryContainer: function
//     buttonPrimary: function
//
//
//      topNav = document.getElementById("backBtn");
//     if(topNav) {
//         topNav.addEventListener("click", function (e) {
//             window.location.href = "./index.html";
//         });
//     }
//
//     var buttonPrimaryContainer = document.getElementById("buttonPrimaryContainer");
//     if(buttonPrimaryContainer) {
//         buttonPrimaryContainer.addEventListener("click", function (e) {
//             window.location.href = "./Settings.html";
//         });
//     }
//
//     var buttonPrimary = document.getElementById("signUpBtn");
//     if(buttonPrimary) {
//         buttonPrimary.addEventListener("click", registerNewUser);
//     }
// }
// //
// // /* == Event Listeners == */
// // var topNav = document.getElementById("backBtn");
// // if (topNav) {
// //     topNav.addEventListener("click", function (e) {
// //         window.location.href = "./index.html";
// //     });
// // }
// //
// // var buttonPrimaryContainer = document.getElementById("buttonPrimaryContainer");
// // if (buttonPrimaryContainer) {
// //     buttonPrimaryContainer.addEventListener("click", function (e) {
// //         window.location.href = "./Settings.html";
// //     });
// // }
// //
// // var buttonPrimary = document.getElementById("signUpBtn");
// // if (buttonPrimary) {
// //     buttonPrimary.addEventListener("click", registerNewUser);
// // }
// //
// //
// // /* == Event Listeners == */
//
// /* == Function - Navigate to new page == */
// function navigateTo(url){
//     window.location.href = url;
// }
//
// /* === Async Functions == */
// // async function registerNewUser() {
// //     console.log("A")
// //
// //     try {
// //         const email = emailAddress.value;
// //         const user = userName.value;
// //         const newPasswordValue = newPassword.value;
// //         const confirmPasswordValue = confirmPassword.value;
// //
// //
// //         set(ref(db, 'users'), {
// //             "emailAddress": email,
// //             "userName": user,
// //             "password": confirmPasswordValue
// //         })
// //         console.log("New User Registered")
// //         navigateTo("./Home.html")
// //
// //     } catch (error) {
// //         console.error("Failed to read value", error.message);
// //     }
// // }
// //
// async function registerNewUser(username, email, password) {
//     // Data Validation
//     // if (!username || username.length < 3) {
//     //     console.error("Username must be at least 3 characters long.");
//     //     return;
//     // }
//     // if (!email || !email.includes('@')) {
//     //     console.error("Invalid email format.");
//     //     return;
//     // }
//     // if (!password || password.length < 6) {
//     //     console.error("Password must be at least 6 characters long.");
//     //     return;
//     // }
//     // if (!username || !email || !password) {
//     //     console.error("All fields are required.");
//     //     return;
//     // }
//
//     // Generate a random user ID
//     // const userId = push(ref(getDatabase(), 'users')).key;
//     // console.log(userId)
//
//     // Create user object
//     const userData = {
//         id: userId,
//         username: username,
//         email: email,
//         password: password // Note: Storing passwords in plain text is insecure
//     };
//     //
//     // Save user data in Firebase Realtime Database
//     set(ref(getDatabase(), 'users/' + userId), userData)
//         .then(() => console.log("User created successfully with ID:", userId))
//         .catch((error) => console.error("Error creating user:", error));
//     //
//     // set(ref(getDatabase(), userId), userData)
//     //     .then(() => console.log("User created successfully with ID:", userId))
//     //     .catch((error) => console.error("Error creating user:", error));
//
// }
//
// registerNewUser("aaaaaaaaaa", "sr@gm", 12)
