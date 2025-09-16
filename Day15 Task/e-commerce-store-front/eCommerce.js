category = "All";
price = 300000;

const products = [
  {
    image: "e-commerce-store-front/assets/appleLaptop.jpeg",
    name: "Mac book Air",
    description: "Short description of product 3.",
    rating: 4.0,
    price: 130000,
    category: "Electronics",
  },
  {
    image: "e-commerce-store-front/assets/apple-iphone-14-pro-5.jpg",
    name: "Apple iPhone 14 Pro",
    description: "Latest Apple iPhone with advanced features.",
    rating: 4.8,
    price: 100000,
    category: "Mobiles",
  },
  {
    image: "e-commerce-store-front/assets/bed1.jpeg",
    name: "Classic Wooden Bed",
    description: "Elegant wooden bed for a comfortable sleep.",
    rating: 4.6,
    price: 29999,
    category: "Furniture",
  },
  {
    image: "e-commerce-store-front/assets/bed2.jpg",
    name: "Luxury King Bed",
    description: "Spacious king size bed with premium finish.",
    rating: 4.7,
    price: 39999,
    category: "Furniture",
  },
  {
    image: "e-commerce-store-front/assets/chair1.jpg",
    name: "Office Chair",
    description: "Ergonomic office chair for daily use.",
    rating: 4.3,
    price: 8999,
    category: "Furniture",
  },
  {
    image: "e-commerce-store-front/assets/chair2.jpg",
    name: "Dining Chair",
    description: "Stylish dining chair for your home.",
    rating: 4.1,
    price: 4999,
    category: "Furniture",
  },
  {
    image: "e-commerce-store-front/assets/chair3.jpeg",
    name: "Lounge Chair",
    description: "Comfortable lounge chair for relaxation.",
    rating: 4.5,
    price: 12999,
    category: "Furniture",
  },
  {
    image: "e-commerce-store-front/assets/frock.jpeg",
    name: "Kids Frock",
    description: "Cute frock for kids, available in all sizes.",
    rating: 4.4,
    price: 2499,
    category: "Fashion",
  },
  {
    image: "e-commerce-store-front/assets/lenovo laptop.jpg",
    name: "Lenovo Laptop",
    description: "High performance Lenovo laptop for work and play.",
    rating: 4.6,
    price: 74999,
    category: "Electronics",
  },
  {
    image: "e-commerce-store-front/assets/realme_earbuds.jpg",
    name: "Realme Earbuds",
    description: "Wireless earbuds with long battery life.",
    rating: 4.2,
    price: 3999,
    category: "Electronics",
  },
  {
    image: "e-commerce-store-front/assets/samsung-galaxy-a34-5g-500x500.webp",
    name: "Samsung Galaxy A34 5G",
    description: "Affordable 5G smartphone from Samsung.",
    rating: 4.3,
    price: 29999,
    category: "Mobiles",
  },
  {
    image: "e-commerce-store-front/assets/sareeImage.jpeg",
    name: "Designer Saree",
    description: "Elegant saree for festive occasions.",
    rating: 4.7,
    price: 7999,
    category: "Fashion",
  },
  {
    image: "e-commerce-store-front/assets/sofa.jpg",
    name: "3-Seater Sofa",
    description: "Comfortable 3-seater sofa for your living room.",
    rating: 4.5,
    price: 49999,
    category: "Furniture",
  },
  {
    image: "e-commerce-store-front/assets/sofa1.webp",
    name: "Modern Sofa",
    description: "Stylish modern sofa with premium fabric.",
    rating: 4.4,
    price: 59999,
    category: "Furniture",
  },
  {
    image: "e-commerce-store-front/assets/sofa2.webp",
    name: "L-Shaped Sofa",
    description: "Spacious L-shaped sofa for large families.",
    rating: 4.6,
    price: 69999,
    category: "Furniture",
  },
  {
    image: "e-commerce-store-front/assets/t-shirts.png",
    name: "Men's T-Shirt",
    description: "Comfortable cotton t-shirt for men.",
    rating: 4.2,
    price: 1999,
    category: "Fashion",
  },
];

// DASHBOARD FUNCTION
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}
function updatePriceValue(val) {
  document.getElementById("priceValue").textContent = val;
  price = val;
  showProducts();
}

// COMPLETE LOGIN FUNCTION STARTING
let users = [{ username: "user", password: "pass" }];
let currentUser = null;

function showLogin() {
  closeModal();
  window.location.href = "./login.html";
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
  let username = localStorage.getItem("adminUserName");
  const headerUser = document.getElementById("login-info");
  if (!username) {
    headerUser.innerHTML = `<button class="login-btn" onclick="showLogin()">Login</button>`;
  } else {
    headerUser.innerHTML = `
          <span class="login-user-name" >Hello, ${username}</span>
          <button class="logout-btn" onclick="logout()">Logout</button>
        `;
  }
}

function logout() {
  currentUser = null;
  localStorage.clear();
  updateHeader();
}
//LOGIN FUNCTION ENDING

// ADDING IMAGES STARTING

function createProductCard({ image, name, description, rating, price }) {
  const card = document.createElement("div");
  card.className = "product-card";
  name = name.trim();
  card.innerHTML = `
        <img src="${image}" alt="${name}" style="width:100%; border-radius: 8px;">
        <h2 style="margin: 10px 0 5px;">${name}</h2>
        <p style="color: #555;">${description}</p>
        <div style="margin: 8px 0;">
          <span style="color: #f5b50a;">${"&#9733;".repeat(
            Math.round(rating)
          )}</span>
          <span style="color: #888;">${rating.toFixed(1)}</span>
        </div>
        <div style="font-weight: bold; margin-bottom: 10px;">₹${price}</div>
        <button class="addToCartButton" onclick="addToCart('${name}')">Add to Cart</button>
        <button class="addToWishlistButton" onclick="addToWishlist('${name}')">Add to Wishlist</button>
      `;
  return card;
}

var wishlist = [];
function addToWishlist(name) {
  const product = products.find((p) => p.name === name);
  const wishlistItem = wishlist.find((item) => item.name === name);
  if (wishlistItem) {
    wishlistItem.qty += 1;
  } else {
    wishlist.push({ ...product, qty: 1 });
  }
}

function moveToCart() {
  wishlist.forEach((wishItem) => {
    const cartItem = cart.find((item) => item.name === wishItem.name);
    if (cartItem) {
      cartItem.qty += wishItem.qty;
    } else {
      cart.push({ ...wishItem });
    }
  });
  wishlist = [];
  renderWishlist();
  updateCartCount();
}

function renderWishlist() {
  const wishlistDiv = document.getElementById("wishlistItems");
  wishlistDiv.innerHTML = "";
  let total = 0;
  wishlist.forEach((item) => {
    total += item.price * item.qty;
    wishlistDiv.innerHTML += `
          <div class="cart-item">
            <span>${item.name} x${item.qty}</span>
            <span>₹${item.price * item.qty}</span>
            <button onclick="removeFromCart('${
              item.name
            }')" style="background:#f44336;color:#fff;border:none;border-radius:4px;padding:2px 8px;cursor:pointer;">-</button>
          </div>
        `;
  });
  if (wishlist.length === 0)
    wishlistDiv.innerHTML = "<em>Wishlist is empty</em>";
  document.getElementById("wishlistTotal").textContent = total;
}

function showProducts() {
  const container = document.getElementById("products-container");
  container.innerHTML = "";

  // Render the rest of the products
  products.forEach((product) => {
    if (
      product.price <= price &&
      (category === "All" || product.category === category)
    ) {
      container.appendChild(createProductCard(product));
    }
  });
}
function changeCategory(val) {
  category = val;
  showProducts();
}

// Add to cart
let cart = [];

function addToCart(name) {
  const product = products.find((p) => p.name === name);
  const cartItem = cart.find((item) => item.name === name);
  if (cartItem) {
    cartItem.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cartCount").textContent = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );
}

function openCart() {
  renderCart();
  document.getElementById("cartModalBg").style.display = "flex";
}

function openWishlist() {
  renderWishlist();
  document.getElementById("wishlistModalBg").style.display = "flex";
}

function closeCart() {
  document.getElementById("cartModalBg").style.display = "none";
}

function closeWishlist() {
  document.getElementById("wishlistModalBg").style.display = "none";
}
function renderCart() {
  const cartDiv = document.getElementById("cartItems");
  cartDiv.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.qty;
    cartDiv.innerHTML += `
          <div class="cart-item">
            <span>${item.name} x${item.qty}</span>
            <span>₹${item.price * item.qty}</span>
            <button onclick="removeFromCart('${
              item.name
            }')" style="background:#f44336;color:#fff;border:none;border-radius:4px;padding:2px 8px;cursor:pointer;">-</button>
          </div>
        `;
  });
  if (cart.length === 0) cartDiv.innerHTML = "<em>Cart is empty</em>";
  document.getElementById("cartTotal").textContent = total;
}

function removeFromCart(name) {
  const idx = cart.findIndex((item) => item.name === name);
  if (idx > -1) {
    if (cart[idx].qty > 1) {
      cart[idx].qty -= 1;
    } else {
      cart.splice(idx, 1);
    }
  }
  updateCartCount();
  renderCart();
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  closeCart();
  document.getElementById("customerFormBg").style.display = "flex";
}

function submitCustomer(event) {
  event.preventDefault();
  // You can process the order here (e.g., send to server)
  alert(
    "Order placed!\nThank you, " +
      document.getElementById("custName").value +
      "!"
  );
  cart = [];
  updateCartCount();
  document.getElementById("customerFormBg").style.display = "none";
}

updateCartCount();
