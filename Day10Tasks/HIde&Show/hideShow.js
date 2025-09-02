const paragraph = document.getElementById("sentence");
const button = document.getElementById("toggleButton");

button.addEventListener("click", function () {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
        button.textContent = "Hide";
    } else {
        paragraph.style.display = "none";
        button.textContent = "Show";
    }

});