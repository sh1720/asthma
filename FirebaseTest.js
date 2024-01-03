// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase, ref, push, set, get, child} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy1dB-bUbRIQPsvMiO3nujknwP6ntdMes",
  authDomain: "asthmapp-121a8.firebaseapp.com",
  databaseURL: "https://asthmapp-121a8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "asthmapp-121a8",
  storageBucket: "asthmapp-121a8.appspot.com",
  messagingSenderId: "583573518616",
  appId: "1:583573518616:web:9c7fd04b76aab0e4b3066d",
  measurementId: "G-KR5B4RVM7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)


async function registerNewUser(username, email, password) {
    // Data Validation
    if (!username || username.length < 3) {
        console.error("Username must be at least 3 characters long.");
        return;
    }
    if (!email || !email.includes('@')) {
        console.error("Invalid email format.");
        return;
    }
    if (!password || password.length < 6) {
        console.error("Password must be at least 6 characters long.");
        return;
    }
    if (!username || !email || !password) {
        console.error("All fields are required.");
        return;
    }

    // Generate a random user ID
    const userId = push(ref(getDatabase(), 'users')).key;

    // Create user object
    const userData = {
        id: userId,
        username: username,
        email: email,
        password: password // Note: Storing passwords in plain text is insecure
    };

    // Save user data in Firebase Realtime Database
    set(ref(getDatabase(), 'users/' + userId), userData)
        .then(() => console.log("User created successfully with ID:", userId))
        .catch((error) => console.error("Error creating user:", error));

    set(ref(getDatabase(), userId), userData)
        .then(() => console.log("User created successfully with ID:", userId))
        .catch((error) => console.error("Error creating user:", error));

}


// Function to read user data
async function readUserData(email) {
    const db = getDatabase();
    const usersRef = ref(db, 'users');

    try {
        const snapshot = await get(usersRef);
        if (snapshot.exists()) {
            const users = snapshot.val();
            const user = Object.values(users).find(user => user.email === email);
            if (user) {
                console.log('User Data: ', user);
                return user;
            } else {
                console.log('No data available for this user.');
            }
        } else {
            console.log('No user data found.');
        }
    } catch (error) {
        console.error('Error reading user data:', error);
    }
}

//registerNewUser('sredd', 'sred@gmail.com', '127734')
//registerNewUser('sredad', 'sread@gmail.com', '127734')

readUserData('sred@gmail.com')