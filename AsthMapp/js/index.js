/* == Index == */

/* == Imports ==*/
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, push , set} from "firebase/database";

console.log('Firebase loaded:', typeof firebase !== 'undefined' ? 'Yes' : 'No');

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
const db = getDatabase(app);

/* Selecting Buttons and Input Fields from HTML */
const signInBtn = document.getElementById("signInBtn");
const forgotPasswordLink = document.getElementById("textContainer2");

/* Event Listeners */
if (signInBtn) {
    signInBtn.addEventListener("click", authSignInWithEmail);
}
if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener("click", () => navigateTo("./ForgotPassword.html"));
}

/* Functions */

// Function to Navigate Between Webpages
function navigateTo(url){
    window.location.href = url;
}


async function postNewUser() {

    const signUpModule = await import("./SignUp.js");
    const {userNameToPost, emailAddressToPost, passwordToPost} = signUpModule;
    console.log(userNameToPost, emailAddressToPost, passwordToPost)

    const db = getDatabase();
    const userId = push(ref(db, 'users')).key;
    console.log(userId);

    const userData = {
        id: userId,
        username: userNameToPost,
        email: emailAddressToPost,
        password: passwordToPost // Reminder: Storing passwords in plain text is insecure
    };

    try {
        await set(ref(db, 'users/' + userId), userData);
        console.log("User created successfully with ID:", userId);
    } catch (error) {
        console.error("Error creating user:", error);
    }
}


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