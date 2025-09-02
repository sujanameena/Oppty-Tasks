function checkPasswordStrength() {
    const password = document.getElementById('passwordInput').value;
    const result = document.getElementById('result');

    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (minLength && hasUpperCase && hasNumber && hasSpecialChar) {
        result.textContent = "Password is Strong!";
        result.style.color = "green";
        console.log("Password is Strong!");
    } else {
       result.textContent = "Password is Weak!";
        result.style.color = "red";
        console.log("Password is Weak!");
    }
}
