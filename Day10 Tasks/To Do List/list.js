const nameInput = document.getElementById("name");
const button = document.getElementById("addName");
const nameList = document.getElementById("namelist");

button.addEventListener("click", function () {
    const taskText = nameInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;

        nameList.appendChild(li);

        nameInput.value = "";
    } else {
        alert("Please enter a task!");
    }
});