function setMood(mood) {
    let message = document.getElementById("message");

    if (mood === "happy") {
        document.body.style.backgroundColor = "yellow";
        document.body.style.fontSize = "25px";
        message.textContent = "Yay! Keep smiling 😊"
    }
    else if (mood === "sad") {
        document.body.style.backgroundColor = "lightBlue";
        document.body.style.fontSize = "25px";
        message.textContent = "It's okay to feel sad sometimes..,come back soon 😢"
    }
    else if (mood === "angry") {
        document.body.style.backgroundColor = "tomato";
        document.body.style.fontSize = "25px";
        message.textContent = "Calm down, don't be angry 😡";
    }
    else if (mood === "relaxed") {
        document.body.style.backgroundColor = "lightgreen", fontSize = "20px";
        document.body.style.fontSize = "25px";
        message.textContent = "Stay calm and relaxed 🧘‍♀️"
    }

}