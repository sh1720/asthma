// navigation.js
var logoFull = document.getElementById("MainLoading");
if (logoFull) {
    logoFull.addEventListener("click", function (e) {
        window.location.href = "../html/SignIn.html";
    });
}

var loadingContainer = document.getElementById("loadingContainer");
if (loadingContainer) {
    loadingContainer.addEventListener("click", function (e) {
        window.location.href = "../html/SignIn.html";
    });
}
