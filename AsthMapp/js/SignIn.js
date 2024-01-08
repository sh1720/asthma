import forgotPassword from "./ForgotPassword";
function SignIn() {
    /* Selecting Buttons and Input Fields from HTML */

    const signInBtn = document.getElementById("signInBtn");

    /* Event Listeners */
    if (signInBtn) {
        signInBtn.addEventListener("click", authSignInWithEmail);
    }
}

export default SignIn;