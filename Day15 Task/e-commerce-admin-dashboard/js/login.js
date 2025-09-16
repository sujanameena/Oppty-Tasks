const adminUserEmail = "admin@gmail.com";
const adminUserName = "Admin";
const adminPassword = "pass";

const userEmail = "user@gmail.com";
const userName = "User";
const userPassword = "pass";

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
        window.location.href = "./dashboard.html";
      }, 1000);
    } else {
      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );
      if (foundUser) {
        messageBox.style.display = "block";
        messageBox.style.backgroundColor = "rgba(0, 255, 0, 0.1)";
        messageBox.style.borderColor = "rgba(0, 255, 0, 0.3)";

        messageBox.innerHTML =
          '<span>Login submitted! Redirecting to dashboard...</span><br><span style="font-size:1.2em;">⏳</span>';
        localStorage.setItem("adminEmailId", foundUser.email);
        localStorage.setItem("adminUserName", foundUser.userName);
        setTimeout(() => {
          window.location.href = "./eCommerce.html";
        }, 1000);
      } else {
        messageBox.textContent = "Invalid Credentials";
        messageBox.style.display = "block";
        messageBox.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
        messageBox.style.borderColor = "rgba(255, 0, 0, 0.3)";
      }
    }
  });

let createAccountBtn = document.getElementById("createAccountBtn");

createAccountBtn.addEventListener("click", function (event) {
  document.getElementById("loginCard").style.display = "none";
  document.getElementById("registerCard").style.display = "flex";
});

let forgotPasswordBtn = document.getElementById("forgotPasswordBtn");

forgotPasswordBtn.addEventListener("click", function (event) {
  document.getElementById("loginCard").style.display = "none";
  document.getElementById("forgotPasswordCard").style.display = "flex";
});

let backToLoginBtn = document.getElementById("backToLoginBtn");

backToLoginBtn.addEventListener("click", function (event) {
  document.getElementById("loginCard").style.display = "flex";
  document.getElementById("registerCard").style.display = "none";
  document.getElementById("forgotPasswordCard").style.display = "none";
});

let backToLoginBtnfpc = document.getElementById("backToLoginBtnfpc");

backToLoginBtnfpc.addEventListener("click", function (event) {
  document.getElementById("loginCard").style.display = "flex";
  document.getElementById("registerCard").style.display = "none";
  document.getElementById("forgotPasswordCard").style.display = "none";
});

let users = [
  {
    userName: "user",
    email: "user@gmail.com",
    password: "pass",
  },
];

function handleCreateAccount(event) {
  event.preventDefault();
  const message = document.getElementById("registerMessageBox");
  const name = document.getElementById("registerName").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  const reenteredPassword = document.getElementById(
    "registerConfirmPassword"
  ).value;

  if (!name || !email || !password || !reenteredPassword) {
    message.textContent = "Please fill all fields";
    return;
  }

  if (password !== reenteredPassword) {
    message.textContent = "Passwords do not match";
    return;
  }

  // Check if user already exists
  const exists = users.some((user) => user.email === email);
  if (exists) {
    message.textContent = "User already exists with this email";
    return;
  }

  users.push({
    userName: name,
    email: email,
    password: password,
  });

  message.textContent = "Account created successfully! Please login.";
  message.style.display = "block";
  message.style.backgroundColor = "rgba(0, 255, 0, 0.1)";
  message.style.borderColor = "rgba(0, 255, 0, 0.3)";
  message.style.marginTop = "10px";
  message.style.fontWeight = "bold";

  setTimeout(() => {
    document.getElementById("registerCard").style.display = "none";
    document.getElementById("loginCard").style.display = "flex";
  }, 3000);
}

// Attach event listener to register form
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", handleCreateAccount);
}

document.getElementById('forgotPasswordForm').addEventListener("submit",function(event){
  const emailId = document.getElementById('forgotPasswordEmailId').value;
  const reEnteredPwd = document.getElementById('forgotPasswordReEnterPassword').value;
  const newPwd = document.getElementById('forgotPasswordNewPassword').value;

  if (reEnteredPwd !== newPwd) {
    const message = document.getElementById('forgotPasswordMessageBox');
    message.textContent = "Passwords do not match";
    message.style.display = "block";
    message.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
    message.style.borderColor = "rgba(255, 0, 0, 0.3)";
    return;
  }

  const userIndex = users.findIndex(user => user.email === emailId);
  if (userIndex !== -1) {
    users[userIndex].password = newPwd;
    const message = document.getElementById('forgotPasswordMessageBox');
    message.textContent = "Password updated successfully! Please login.";
    message.style.display = "block";
    message.style.backgroundColor = "rgba(0, 255, 0, 0.1)";
    message.style.borderColor = "rgba(0, 255, 0, 0.3)";
    setTimeout(() => {
      document.getElementById("forgotPasswordCard").style.display = "none";
      document.getElementById("loginCard").style.display = "flex";
    }, 2000);
  } else {
    const message = document.getElementById('forgotPasswordMessageBox');
    message.textContent = "Email not found";
    message.style.display = "block";
    message.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
    message.style.borderColor = "rgba(255, 0, 0, 0.3)";
  }


})
