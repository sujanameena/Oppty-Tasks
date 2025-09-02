let count = 0;
const counterDisplay = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

incrementButton.addEventListener("click", function() {
    count++;
    counterDisplay.textContent = count;
});

decrementButton.addEventListener("click", function() {
    count--;
    counterDisplay.textContent = count;
});