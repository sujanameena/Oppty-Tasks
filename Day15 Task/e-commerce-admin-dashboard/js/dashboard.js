document.addEventListener("DOMContentLoaded", function () {
  var email = localStorage.getItem("adminEmailId") || "admin@example.com";
  document.getElementById("admin-user-email").textContent = email;
  var adminUserName =
    localStorage.getItem("adminUserName") || "admin@example.com";
  document.getElementById("admin-user-name").textContent = adminUserName;
});

// Get navigation links
const ordersLink = document.getElementById("ordersLink");
const productsLink = document.getElementById("productsLink");

// Get content views
const ordersView = document.getElementById("ordersView");
const addProductView = document.getElementById("addProductView");

// Function to switch views
function switchView(activeLink, activeView) {
  // Deactivate all links
  [ordersLink, productsLink].forEach((link) => link.classList.remove("active"));
  // Hide all views
  [ordersView, addProductView].forEach((view) => (view.style.display = "none"));

  // Activate the correct link and show the correct view
  activeLink.classList.add("active");
  activeView.style.display = "block";
}

// Event Listeners for navigation
ordersLink.addEventListener("click", (e) => {
  e.preventDefault();
  switchView(ordersLink, ordersView);
});

productsLink.addEventListener("click", (e) => {
  e.preventDefault();
  switchView(productsLink, addProductView);
});

// Event Listener for Add Product form
const addProductForm = document.getElementById("addProductForm");
addProductForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Product Added:", {
    name: document.getElementById("productName").value,
    sku: document.getElementById("productSKU").value,
    price: document.getElementById("productPrice").value,
    stock: document.getElementById("productStock").value,
    description: document.getElementById("productDescription").value,
  });
  alert("Product added successfully! (Check console for data)");
  addProductForm.reset();
});

// --- Enhanced Order Filtering & Search ---
const orderSearch = document.getElementById("orderSearch");
const fromDateInput = document.getElementById("fromDate");
const toDateInput = document.getElementById("toDate");
const ordersTableBody = document.querySelector("#ordersView .table tbody");
const allOrderRows = Array.from(ordersTableBody.querySelectorAll("tr"));
const quickFilterBtns = document.querySelectorAll(".quick-filter-btn");
let currentStatusFilter = "all";

// --- Widget and Chart Logic ---
const totalOrdersValue = document.getElementById("totalOrdersValue");
const filteredOrdersValue = document.getElementById("filteredOrdersValue");
const returnedOrdersValue = document.getElementById("returnedOrdersValue");
const successfulOrdersValue = document.getElementById("successfulOrdersValue");

function renderTrendGraph(svgElement, dataPoints, color) {
  const svg = document.getElementById(svgElement);
  if (!svg) return;

  const width = 80;
  const height = 40;
  const maxData = Math.max(...dataPoints);
  const points = dataPoints
    .map((point, i) => {
      const x = (i / (dataPoints.length - 1)) * width;
      const y = height - (point / maxData) * (height - 5); // -5 for padding
      return `${x},${y}`;
    })
    .join(" ");

  svg.innerHTML = `<polyline points="${points}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>`;
}

function updateStaticWidgets() {
  totalOrdersValue.textContent = allOrderRows.length;

  const returnedCount = allOrderRows.filter((row) =>
    row.cells[4].textContent.toLowerCase().includes("refunded")
  ).length;
  returnedOrdersValue.textContent = returnedCount;

  const successfulCount = allOrderRows.filter((row) =>
    row.cells[5].textContent.toLowerCase().includes("delivered")
  ).length;
  successfulOrdersValue.textContent = successfulCount;

  // Mock data for graphs
  renderTrendGraph("totalOrdersChart", [5, 8, 6, 10, 7, 12, 10], "#ffffff");
  renderTrendGraph("filteredOrdersChart", [3, 4, 2, 5, 4, 6, 5], "#ffffff");
  renderTrendGraph(
    "returnedOrdersChart",
    [2, 1, 2, 1, 3, 1, 2],
    "var(--warning-color)"
  );
  renderTrendGraph(
    "successfulOrdersChart",
    [3, 5, 4, 7, 5, 9, 8],
    "var(--success-color)"
  );
}

function filterAndDisplayOrders() {
  const searchTerm = orderSearch.value.toLowerCase().trim();
  const fromDate = fromDateInput.value;
  const toDate = toDateInput.value;
  let visibleRowCount = 0;

  allOrderRows.forEach((row) => {
    const paymentStatusText = row.cells[4].textContent.toLowerCase();
    const deliveryStatusText = row.cells[5].textContent.toLowerCase();
    const orderIdText = row.cells[0].textContent.toLowerCase();
    const customerText = row.cells[1].textContent.toLowerCase();
    const orderDateText = row.cells[2].textContent; // YYYY-MM-DD format

    let statusMatch = false;
    switch (currentStatusFilter) {
      case "all":
        statusMatch = true;
        break;
      case "payment-pending":
        statusMatch = paymentStatusText.includes("pending");
        break;
      case "delivery-pending":
        statusMatch =
          deliveryStatusText.includes("pending") ||
          deliveryStatusText.includes("shipped");
        break;
      case "completed":
        statusMatch = deliveryStatusText.includes("delivered");
        break;
    }

    const searchMatch =
      orderIdText.includes(searchTerm) || customerText.includes(searchTerm);
    const fromMatch = !fromDate || orderDateText >= fromDate;
    const toMatch = !toDate || orderDateText <= toDate;

    if (statusMatch && searchMatch && fromMatch && toMatch) {
      row.style.display = "";
      visibleRowCount++;
    } else {
      row.style.display = "none";
    }
  });

  // Update filtered orders widget
  filteredOrdersValue.textContent = visibleRowCount;
}

// --- Initial Setup ---
updateStaticWidgets();
filterAndDisplayOrders();

// Event listener for the search bar
orderSearch.addEventListener("keyup", filterAndDisplayOrders);

// Event listeners for date filters
fromDateInput.addEventListener("change", filterAndDisplayOrders);
toDateInput.addEventListener("change", filterAndDisplayOrders);

// Event listeners for quick filter buttons
quickFilterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    quickFilterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentStatusFilter = btn.dataset.filter;
    filterAndDisplayOrders();
  });
});
