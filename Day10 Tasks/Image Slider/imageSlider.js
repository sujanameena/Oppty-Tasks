let images = [
    "image1.jpeg",
    "images2.png",
    "images3.webp"
];
let index = 0;
let slider = document.getElementById("images");

function nextImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    slider.src = images[index];
}

function previousImage() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    slider.src = images[index];
}