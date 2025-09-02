function checkDiscount() {
    const isPremium = document.getElementById('option1').checked;
    const cartValue = document.getElementById('bill').value;

    if (isPremium === true) {
        if (cartValue > 0) {
            document.getElementById('checkboxResult').textContent = "Discount Added";
        } else {
            document.getElementById('checkboxResult').textContent = "No Discount";
        }
    } else {
        if (cartValue > 500) {
            document.getElementById('checkboxResult').textContent = "Discount Added";
        } else {
            document.getElementById('checkboxResult').textContent = "No Discount";
        }
    }
}