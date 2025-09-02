let isDay = true;

function toggleMode() {
    let status = document.getElementById("message");
    let button = document.getElementById("toggleButton");

    if (isDay) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        status.textContent = "Currently in Night Mode 🌛";
        button.textContent = "Switch to Day Mode 🌞";
        isDay = false;
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        status.textContent = "Currently in Day Mode 🌞";
        button.textContent = "Switch to Night Mode 🌛";
        isDay = true;

    }
}