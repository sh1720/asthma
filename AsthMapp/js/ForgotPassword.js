function forgotPassword() {
    const forgotPasswordLink = document.getElementById("resetPasswordBtn") || '';

    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(e){
            alert("I forgot my password. Please reset it. Thanks");
        });
    }
}

export default forgotPassword;