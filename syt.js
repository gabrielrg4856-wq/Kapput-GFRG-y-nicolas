function openPopup(id) {
    document.getElementById(id).style.display = "flex";
}

function closePopup(event, id) {
    if (event.target.classList.contains("popup-overlay")) {
        document.getElementById(id).style.display = "none";
    }
}

function forceClose(id) {
    document.getElementById(id).style.display = "none";
}
