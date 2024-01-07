let signUp = false;
let result;
let userNameToPost, emailAddressToPost, passwordToPost;

function registerNewUser(emailAddress, userName, newPassword, confirmPassword) {
    // Data Validation
    if (!userName || userName.length < 3) {
        console.error("Username must be at least 3 characters long.");
        return;
    }
    if (!emailAddress || !emailAddress.includes('@')) {
        console.error("Invalid email format.");
        return;
    }
    if (!newPassword || newPassword.length < 6) {
        console.error("Password must be at least 6 characters long.");
        return;
    }
    if (newPassword !== confirmPassword) {
        console.error("Passwords do not match.");
        return;
    }
    return { userName, emailAddress, confirmPassword };

}

// Attach event listener to sign-up button
const signUpBtn = document.getElementById("signUpBtn");

if (signUpBtn) {
    signUpBtn.addEventListener("click", () => {
        const emailAddress = document.getElementById("emailAdress").value;
        const userName = document.getElementById("userName").value;
        const newPassword = document.getElementById("newPassword").value;
        const confirmPassword = document.getElementById("passwordConfirm").value;

        //Call the registerNewUser function
        result = registerNewUser(emailAddress, userName, newPassword, confirmPassword);
        if (result) {
            signUp = true;
            const userNameToPost = result.userName;
            const emailAddressToPost = result.emailAddress;
            const passwordToPost = result.confirmPassword;
        }
        console.log("Sign Up Button Pressed")
    });
} else {
    console.error("Sign Up button not found.");
}

export {signUp, userNameToPost,  emailAddressToPost, passwordToPost}
