var topNav = document.getElementById("backBtn");
if (topNav) {
    topNav.addEventListener("click", function (e) {
        window.location.href = "./AirQuality01.html";
    });
}

var close = document.getElementById("closeBtn");
if (close) {
    close.addEventListener("click", function (e) {
        window.location.href = "./Home.html";
    });
}

var yourAreaBtn = document.getElementById("yourAreaBtn");
if (yourAreaBtn) {
    yourAreaBtn.addEventListener("click", function (e) {
        window.location.href = "./AirQuality01.html";
    });
}

var londonBtn = document.getElementById("londonBtn");
if (londonBtn) {
    londonBtn.addEventListener("click", function (e) {
        window.location.href = "./AirQuality2.html";
    });
}

var home = document.getElementById("homeBtn");
if (home) {
    home.addEventListener("click", function (e) {
        window.location.href = "./Home.html";
    });
}

var inhaler = document.getElementById("inhalerBtn");
if (inhaler) {
    inhaler.addEventListener("click", function (e) {
        window.location.href = "./MyInhaler.html";
    });
}

var hospital = document.getElementById("emergencyBtn");
if (hospital) {
    hospital.addEventListener("click", function (e) {
        window.location.href = "./Emergency1.html";
    });
}