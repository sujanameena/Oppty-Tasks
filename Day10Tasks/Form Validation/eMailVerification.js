function checkEmail() {
    let email = document.getElementById("emailInput").value.trim();
    let message = document.getElementById("result");

    if (email === "") {
        message.textContent = "Please enter an email";
        message.className = "error";
    }
    else if (!email.includes("@")) {
        message.textContent = "Missing '@' in email";
        message.className = "error";
    }
    else if (!email.endsWith(".com")) {
        message.textContent = "Email must end with '.com'";
        message.className = "error";
    }
    else {
        let parts = email.split("@");
        if (parts[0].length === 0) {
            message.textContent = "Missing name before '@'";
            message.className = "error";
        } else {
            message.textContent = "Valid email address!";
            message.className = "success";
        }
    }
}
