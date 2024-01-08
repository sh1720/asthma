import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, push , set} from './../node_modules/firebase/database';
import { getAuth, fetchSignInMethodsForEmail, createUserWithEmailAndPassword, onAuthStateChanged } from './../node_modules/firebase/auth';
import ErrorHandle from "./ErrorHandle.js";
function SignUp(firebaseConfig) {
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    const auth = getAuth(app);

    let result;
    let userNameToPost, emailAddressToPost, passwordToPost;

    function validate_signup(emailAddress, userName, newPassword, confirmPassword) {
        // Data Validation
        if (!userName || userName.length < 3) {
            ErrorHandle("Username must be at least 3 characters long.");
            console.error("Username must be at least 3 characters long.");
            return;
        }
        if (!emailAddress || !emailAddress.includes('@')) {
            ErrorHandle("Invalid email format.");
            console.error("Invalid email format.");
            return;
        }
        if (!newPassword || newPassword.length < 6) {
            ErrorHandle("Password must be at least 6 characters long.");
            console.error("Password must be at least 6 characters long.");
            return;
        }
        if (newPassword !== confirmPassword) {
            ErrorHandle("Passwords do not match.");
            console.error("Passwords do not match.");
            return;
        }
        return { userName, emailAddress, confirmPassword };
    }

    function postNewUser() {
        createUserWithEmailAndPassword(auth, emailAddressToPost, passwordToPost)
            .then((userCredential) => {
                // User signed up successfully
                const user = userCredential.user;

                // Additional user data
                const userData = {
                    email: emailAddressToPost,
                    password: passwordToPost,
                    username: userNameToPost,
                    // Add more user details as needed
                };

                const userRef = ref(`users_om/${user.uid}`);

                // Set user data in the Realtime Database
                if (user) {
                    set(userRef, user)
                        .then(() => {
                            ErrorHandle(`Signup successful:`);
                            console.log('User data updated in the Realtime Database');
                        })
                        .catch((error) => {
                            ErrorHandle(`Signup failed:`);
                            console.error('Error updating user data in the Realtime Database:', error);
                        });
                } else {
                    ErrorHandle(`Something went wrong.`);
                    console.error('Something went wrong.');
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                ErrorHandle(`Signup error:, ${errorCode}, ${errorMessage}`);
            });
    }

    async function checkEmailExists(email) {
        try {
            const methods = await fetchSignInMethodsForEmail(auth, email);
            if (methods.length > 0) {
                console.log('Email is already in use');
                ErrorHandle('Email is already in use');
                return true;
            } else {
                console.log('Email is not in use');
                return false;
            }
        } catch (error) {
            console.error(`Error checking email existence: ${error}`);
            ErrorHandle(`Error checking email existence: ${error}`);
            return true;
        }
    }

    function init_signup() {
        const emailAddress = document.getElementById("emailAdress").value;
        const userName = document.getElementById("userName").value;
        const newPassword = document.getElementById("newPassword").value;
        const confirmPassword = document.getElementById("passwordConfirm").value;

        //Call the validate_signup function
        result = validate_signup(emailAddress, userName, newPassword, confirmPassword);
        if (result) {
            userNameToPost = result.userName;
            emailAddressToPost = result.emailAddress;
            passwordToPost = result.confirmPassword;
            return true;
        }

        ErrorHandle("Please fill up all the fields correctly.");
        return false;
    }

    const signUpBtn = document.getElementById("signUpBtn") || '';
    if(signUpBtn) {
        signUpBtn.addEventListener("click", (event) => {
            event.preventDefault();
            const store_db = init_signup();
            if(store_db) {
                async function signUpWithCheckEmail(email) {
                    try {
                        // Check if the email exists
                        let exist = await checkEmailExists(email);
                        if(!exist) {
                            // If the email does not exist, proceed with signup
                            await postNewUser();
                        }
                    } catch (error) {
                        // Handle errors, if any
                        console.error('Error during signup:', error);
                    }
                }
                signUpWithCheckEmail(emailAddressToPost, passwordToPost)
                    .then(() => {
                        ErrorHandle('You have successfully sign-up. Please login now.');
                    })
                    .catch((error) => {
                        ErrorHandle(`Error during signup: ${error}`);
                    });
            }
        });
    }

}
export default SignUp;


