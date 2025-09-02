
function addInputTag() {
    let container = document.getElementById("cart-items");
    let newInput = document.createElement("input");
    newInput.classList.add("item");
    newInput.type = "number";
    newInput.placeholder = "Enter the value of the item";
    container.appendChild(newInput);
}


function checkDiscount() {

    let values =[];
    let allItems = document.querySelectorAll(".item");
    allItems.forEach(item => {
        values.push(item.value);
    })


    const premiumMember = document.getElementById('option1').checked;

    let total = 0;

    for (let index = 0; index < values.length; index++) {
        total = total + parseFloat(values[index]);
    }

    let discount = 0;
    if (premiumMember) {
        discount = 0.3;
    } else if (total > 1000) {
        discount = 0.2;
    } else if (total > 500) {
        discount = 0.1;
    }

    let finalPrice = total - (total * discount);

    const result = document.getElementById("result")
    result.textContent = `Total: ₹${total} → Final Price: ₹${finalPrice} (${discount * 100}% Discount)`;
}