function closePopup(event) {
    let popup = event.currentTarget.parentNode;

    function isOverlay(node) {
        return !!(node && node.classList && node.classList.contains("popup-overlay"));
    }

    while (popup && !isOverlay(popup)) {
        popup = popup.parentNode;
    }

    if (isOverlay(popup)) {
        popup.style.display = "none";
    }
}

var popupclose = document.getElementById("close");
if (popupclose) {
    popupclose.addEventListener("click", closePopup);
}

var popupaddCrisisBtnContainer = document.getElementById("popupaddCrisisBtnContainer");
if (popupaddCrisisBtnContainer) {
    popupaddCrisisBtnContainer.addEventListener("click", closePopup);
}
