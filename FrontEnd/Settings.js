// signOut.js
var signOutLink = document.getElementById("signOutLink");
if (signOutLink) {
    signOutLink.addEventListener("click", function (e) {
        window.location.href = "./index.html";
    });
}
