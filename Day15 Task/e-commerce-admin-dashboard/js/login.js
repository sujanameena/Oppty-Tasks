const adminUserEmail = "admin@gmail.com";
const adminUserName = "Admin";
const adminPassword = "pass";
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
    const messageBox = document.getElementById("messageBox");

    if (email === adminUserEmail && password === adminPassword) {
      messageBox.style.display = "block";
      messageBox.style.backgroundColor = "rgba(0, 255, 0, 0.1)";
      messageBox.style.borderColor = "rgba(0, 255, 0, 0.3)";

      messageBox.innerHTML =
        '<span>Login submitted! Redirecting to dashboard...</span><br><span style="font-size:1.2em;">⏳</span>';
      messageBox.style.display = "block";
      messageBox.style.backgroundColor = "rgba(0, 255, 0, 0.1)";
      messageBox.style.borderColor = "rgba(0, 255, 0, 0.3)";
      localStorage.setItem("adminEmailId", adminUserEmail);
      localStorage.setItem("adminUserName", adminUserName);
      setTimeout(() => {
        window.location.href = "/dashboard.html";
      }, 1000);
    } else {
      messageBox.textContent = "Invalid Credentials";
      messageBox.style.display = "block";
      messageBox.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
      messageBox.style.borderColor = "rgba(255, 0, 0, 0.3)";
    }
  });
