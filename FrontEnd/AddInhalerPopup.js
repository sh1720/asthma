var popupclose = document.getElementById("closeBtn");
if (popupclose) {
    popupclose.addEventListener("click", function (e) {
        var popup = e.currentTarget.parentNode;
        function isOverlay(node) {
            return !!(
                node &&
                node.classList &&
                node.classList.contains("popup-overlay")
            );
        }
        while (popup && !isOverlay(popup)) {
            popup = popup.parentNode;
        }
        if (isOverlay(popup)) {
            popup.style.display = "none";
        }
    });
}

var popupbuttonPrimary = document.getElementById("applyBtn");
if (popupbuttonPrimary) {
    popupbuttonPrimary.addEventListener("click", function (e) {
        var popup = e.currentTarget.parentNode;
        function isOverlay(node) {
            return !!(
                node &&
                node.classList &&
                node.classList.contains("popup-overlay")
            );
        }
        while (popup && !isOverlay(popup)) {
            popup = popup.parentNode;
        }
        if (isOverlay(popup)) {
            popup.style.display = "none";
        }
    });
}
