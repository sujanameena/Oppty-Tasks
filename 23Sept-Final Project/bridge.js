const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentSlide = 0;
const totalSlides = slides.length;

function showSlide(index) {
  // Handle wrapping around the slides
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));
  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

// Event listeners for navigation buttons
prevBtn.addEventListener("click", () => {
  showSlide(currentSlide - 1);
  resetAutoSlide();
});

nextBtn.addEventListener("click", () => {
  showSlide(currentSlide + 1);
  resetAutoSlide();
});

// Event listeners for dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    resetAutoSlide();
  });
});

// Automatic slideshow
let autoSlideInterval = setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000); // Change slide every 5 seconds

// Reset the timer when a button or dot is clicked
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
}
// tabs nav
const tabData = [
      {
        title: "About School",
        text: "Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros.",
        img: "assets/about1.jpg"
      },
      {
        title: "Popular Courses",
        text: "Computer Science, Business English, Photoshop Tutorial, Business Course.",
        img: "assets/certification.png"
      },
      {
        title: "Useful Links",
        text: "Building an Excellence, Choose Your Destination, Belive in Yourself, Fast Way of Learning!",
        img: "assets/europe-campus.png"
      },
      {
        title: "Our Place",
        text: "Langebrogade 1DK, Copenhagen. Visit us for more information.",
        img: "assets/footer-map-300x235.png"
      },
      {
        title: "Contact Us",
        text: "Phone: +0080-33-666-234<br>Email: bridge@example.com",
        img: "assets/notifications.png"
      }
    ];

    function showTab(idx) {
      // Update nav active state
      document.querySelectorAll('.tab-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === idx);
      });
      // Update content
      const tab = tabData[idx];
      document.getElementById('tabs-content').innerHTML = `
        <img src="${tab.img}" alt="${tab.title}" class="tab-image">
        <div class="tab-title">${tab.title}</div>
        <p class="tab-text">${tab.text}</p>
      `;
    }

    // Show first tab on load
    showTab(0);

function toggleTab(index) {
    // Remove 'active' from all tab buttons
    document.querySelectorAll('.tab-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
    // Show only the corresponding tab-pane
    document.querySelectorAll('.tab-content').forEach((pane, i) => {
        pane.classList.toggle('active', i === index);
        pane.style.display = i === index ? 'block' : 'none';
    });
}

