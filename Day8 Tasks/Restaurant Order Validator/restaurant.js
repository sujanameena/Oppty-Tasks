function validateOrder() {
    const kitchenOpen = document.getElementById("kitchen").checked;
    const isVip = document.getElementById("vip").checked;
    const isLoggedIn = document.getElementById("login").checked;
    const result = document.getElementById("result");

    if (kitchenOpen === false) {
        result.textContent = "❌ Order Denied! Kitchen is not open.";
        result.style.color = "red";
    } else if (kitchenOpen && isLoggedIn === true) {
        result.textContent = "✅ Order Accepted! Kitchen is open and customer is logged in.";
        result.style.color = "green";
    } else if (kitchenOpen && isVip === true && isLoggedIn === false) {
        result.textContent = "✅ Order Accepted! VIP customer allowed without login.";
        result.style.color = "green";
    } else {
        result.textContent = "❌ Order Denied! All conditions not met.";
        result.style.color = "red";
    }
}