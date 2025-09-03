function login() {
    let isValidEmail = emailVerificationResult();
    let isValidPassword = passwordStrengthResult();

    if (isValidEmail && isValidPassword) {
        setTimeout(() => {
            window.location.href = "welcome.html";
        }, 2000);
    }

}

function emailVerificationResult() {
    let email = document.getElementById("emailID").value.trim();
    let message = document.getElementById("emailVerificationResult");

    if (email === "") {
        message.textContent = "Please enter an email";
        message.className = "error";
        return false;
    }
    else if (!email.includes("@")) {
        message.textContent = "Missing '@' in email";
        message.className = "error";
        return false;
    }
    else if (!email.endsWith(".com")) {
        message.textContent = "Email must end with '.com'";
        message.className = "error";
        return false;
    }
    else {
        let parts = email.split("@");
        if (parts[0].length === 0) {
            message.textContent = "Missing name before '@'";
            message.className = "error";
            return false;
        } else {
            message.textContent = "Valid email address!";
            message.className = "success";
            return true;
        }
    }
}

function passwordStrengthResult() {
    const password = document.getElementById('password').value;
    const result = document.getElementById('passwordStrengthResult');

    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (minLength && hasUpperCase && hasNumber && hasSpecialChar) {
        result.textContent = "Password is Strong!";
        result.style.color = "green";
        console.log("Password is Strong!");
        return true;
    } else {
        result.textContent = "Password is Weak!";
        result.style.color = "red";
        console.log("Password is Weak!");
        return false;
    }
}
