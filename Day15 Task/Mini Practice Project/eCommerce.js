// DASHBOARD FUNCTION
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}

// COMPLETE LOGIN FUNCTION
let users = [{ username: "user", password: "pass" }];
let currentUser = null;

function showLogin() {
  closeModal();
  document.getElementById("login-modal").style.display = "flex";
}
function showRegister() {
  closeModal();
  document.getElementById("register-modal").style.display = "flex";
}
function showForgot() {
  closeModal();
  document.getElementById("forgot-modal").style.display = "flex";
}
function closeModal() {
  document.getElementById("login-modal").style.display = "none";
  document.getElementById("register-modal").style.display = "none";
  document.getElementById("forgot-modal").style.display = "none";
}

function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  for (i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      currentUser = users[i];
      updateHeader();
      alert("Login successful!");
      closeModal();
      return;
    }
  }
  alert("invalid cred");
}

function register() {
  const username = document.getElementById("register-username").value;
  const password = document.getElementById("register-password").value;
  if (!username || !password) {
    alert("Please fill all fields!");
    return;
  }
  if (users.find((u) => u.username === username)) {
    alert("Username already exists!");
    return;
  }
  users.push({ username, password });
  alert("Registration successful! Please login.");
  showLogin();
}

function forgotPassword() {
  const username = document.getElementById("forgot-username").value;
  if (users.find((u) => u.username === username)) {
    alert("Password reset link sent to your email (simulated).");
  } else {
    alert("Username not found!");
  }
  showLogin();
}

function updateHeader() {
  const headerUser = document.getElementById("login-info");
  if (currentUser) {
    headerUser.innerHTML = `
          <span class="logout-btn" >Hello, ${currentUser.username}</span>
          <button class="logout-btn" onclick="logout()">Logout</button>
        `;
  } else {
    headerUser.innerHTML = `<button class="login-btn" onclick="showLogin()">Login</button>`;
  }
}

function logout() {
  currentUser = null;
  updateHeader();
  alert("Logged out!");
}

// ADDING CONSTANT IMAGES
const products = [
      {
        id: 1,
        name: "Wireless Headphones",
        category: "electronics",
        price: 1499,
        stock: 10,
        img: "..../Day15 Task/Mini Practice Project/assets/realme_earbuds.jpg",
        desc: "High quality wireless headphones with noise cancellation."
      },
      {
        id: 2,
        name: "Smartphone",
        category: "mobiles",
        price: 150000,
        stock: 5,
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
        desc: "Latest smartphone with advanced features."
      },
      {
        id: 3,
        name: "T-Shirt",
        category: "fashion",
        price: 499,
        stock: 20,
        img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
        desc: "Comfortable cotton t-shirt in various sizes."
      },
      {
        id: 4,
        name: "Sofa",
        category: "furniture",
        price: 2999,
        stock: 2,
        img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80",
        desc: "Modern sofa for your living room."
      }
    ];
    // Render product cards
      for (let i = 0; i < filtered.length; i++) {
        const p = filtered[i];
        productsDiv.innerHTML += `
          <div class="product-card">
            <img src="${p.img}" alt="${p.name}" />
            <div class="product-title">${p.name}</div>
            <div class="product-desc">${p.desc}</div>
            <div class="product-price">₹${p.price}</div>
            <div class="product-stock">${p.stock > 0 ? "In Stock: " + p.stock : "<span style='color:red'>Out of Stock</span>"}</div>
            <button class="add-to-cart-btn" onclick="addToCart(${p.id})" ${p.stock === 0 ? "disabled" : ""}>Add to Cart</button>
          </div>
        `;
      }
  

    function addToCart(id) {
      const product = products.find(p => p.id === id);
      if (product && product.stock > 0) {
        product.stock--;
        orders++;
        updateOrders();
        renderProducts();
      }
    }

    function updateOrders() {
      document.getElementById('order-count').textContent = orders;
      document.getElementById('order-count2').textContent = orders;
    }

    // Event listeners for filters
    document.getElementById('category').addEventListener('change', renderProducts);
    document.getElementById('priceRange').addEventListener('input', function() {
      document.getElementById('price-value').textContent = this.value;
      renderProducts();
    });

    // Initial render
    renderProducts();
    updateOrders();
