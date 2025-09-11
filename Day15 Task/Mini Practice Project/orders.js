let from_date = new Date();
from_date.setMonth(from_date.getMonth() - 1);
let to_date = new Date();

let order_status = "all";

function onpageload() {
  populateOrders();
}

let orders = [
  {
    id: "ORD001",
    date: "2025-09-09",
    customer: "prabhu",
    payment: "Success",
    total: "12000",
    delivery: "Shipped",
    items: 3,
    fulfilment: "Completed",
  },
  {
    id: "ORD002",
    date: "2025-09-08",
    customer: "suresh",
    payment: "Pending",
    total: "8000",
    delivery: "Pending",
    items: 2,
    fulfilment: "Processing",
  },
  {
    id: "ORD003",
    date: "2025-09-07",
    customer: "sandhya",
    payment: "Success",
    total: "25000",
    delivery: "Delivered",
    items: 5,
    fulfilment: "Shipped",
  },
];

var isUnfulfilledSelected = false;
var inUnpaidSelected = false;
var isOpenSelected = false;
var isClosedSelected = false;

function unPaidSelected() {
  document.getElementById("unpaid").classList.add('filter-button-slected');
  document.getElementById("open").classList = "filter-button";
  document.getElementById("Closed").classList = "filter-button";

  isUnfulfilledSelected = true;
  isOpenSelected = false;
  isClosedSelected = false;
  populateOrders();
}

function openSelected() {
  document.getElementById("unpaid").classList = "filter-button";
  document.getElementById("open").classList.add('filter-button-slected');
  document.getElementById("Closed").classList = "filter-button";

  isUnfulfilledSelected = false;
  isOpenSelected = true;
  isClosedSelected = false;
  populateOrders();
}

function closedSelected() {
  document.getElementById("unpaid").classList = "filter-button";
  document.getElementById("open").classList = "filter-button";
  document.getElementById("Closed").classList.add('filter-button-slected');

  isUnfulfilledSelected = false;
  isOpenSelected = false;
  isClosedSelected = true;
  populateOrders();
}

function allSelected(){
  document.getElementById("unpaid").classList = "filter-button";
  document.getElementById("open").classList = "filter-button";
  document.getElementById("Closed").classList.add('filter-button');
  document.getElementById("all").classList.add('filter-button-selected');

  isUnfulfilledSelected = false;
  isOpenSelected = false;
  isClosedSelected = false;
  populateOrders();
}

function populateOrders() {
  document.getElementById("orders").classList.add("orders-button-selected");
  const tbody = document.getElementById("orders-table-body");
  tbody.innerHTML = "";

  // Convert to_date to Date object for comparison
  orders.forEach((order) => {
    const orderDate = new Date(order.date);
    const statusMatch = order_status === "all" || order.status === order_status;
    const dateMatch = orderDate >= from_date && orderDate <= to_date;

    if (isUnfulfilledSelected && order.delivery == "Shipped") {
      return;
    }
    if (inUnpaidSelected && order.payment == "Success") {
      return;
    }
    if (isOpenSelected && order.delivery == "Delivered") {
      return;
    }
    if (isClosedSelected && order.delivery != "Delivered") {
      return;
    }

    if (statusMatch && dateMatch) {
      const row = document.createElement("tr");
      row.innerHTML = `
                    <td class="orders-table-body-data">${order.id}</td>
                    <td class="orders-table-body-data">${order.date}</td>
                    <td class="orders-table-body-data">${order.customer}</td>
                    <td class="orders-table-body-data">${order.payment}</td>
                    <td class="orders-table-body-data">${order.total}</td>
                    <td class="orders-table-body-data">${order.delivery}</td>
                    <td class="orders-table-body-data">${order.items}</td>
                    <td class="orders-table-body-data-button"><button class="action-btn" onclick="alert('Viewing ${order.id}')">View</button></td>
                `;
      tbody.appendChild(row);
    }
  });
}

function addProducts() {
  // Get form elements
  const form = document.getElementById("add-product-form");
  const name = form.elements["product-name"].value;
  const price = parseFloat(form.elements["product-price"].value);
  const category = form.elements["product-category"].value;
  const stock = parseInt(form.elements["product-stock"].value, 10);
  const rating = parseFloat(form.elements["product-rating"].value);
  // Create product object
  const product = {
    // image: "assets/bed1.jpeg",
    name: name,
    description: description,
    rating: rating,
    price: price,
    category: category,
  };

  // Assuming products array is defined in eCommerce.js and accessible here
  if (window.products && Array.isArray(window.products)) {
    window.products.push(product);
  } else {
    window.products = [product];
  }

  // Optionally reset form
  form.reset();
}

function onToDateChange(toDate) {
  to_date = new Date(toDate);
  populateOrders();
}

function onFromDateChange(fromDate) {
  from_date = new Date(fromDate);
  populateOrders();
}
