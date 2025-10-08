courses = [
  {
    image: "assets/courses-img-1.jpg",
    name: "Computer Science",
    subText: "Brenda Harris",
    description:
      "Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit conse",
    price: "free",
    buttonName: "Software",
  },
   {
    image: "assets/courses-img-2.jpg",
    name: "Computer Science",
    subText: "Brenda Harris",
    description:
      "Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit conse",
    price: "$200",
    buttonName: "Languages", 
  },
   {
    image: "assets/courses-img-3.jpg",
    name: "Computer Science",
    subText: "Brenda Harris",
    description:
      "Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit conse",
    price: "$200",
    buttonName: "Business",
  },
   {
    image: "assets/courses-img-4.jpg",
    name: "Computer Science",
    subText: "Brenda Harris",
    description:
      "Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit conse",
    price: "$200",
    buttonName: "Business",
  },
   {
    image: "assets/courses-img-5.jpg",
    name: "Computer Science",
    subText: "Brenda Harris",
    description:
      "Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit conse",
    price: "$200",
    buttonName: "Languages",
  },
   {
    image: "assets/courses-img-6.jpg",
    name: "Computer Science",
    subText: "Brenda Harris",
    description:
      "Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit conse",
    price: "$200",
    buttonName: "Languages",
  },
   {
    image: "assets/courses-img-7.jpg",
    name: "Computer Science",
    subText: "Brenda Harris",
    description:
      "Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit conse",
    price: "$200",
    buttonName: "Software",
  },
   {
    image: "assets/courses-img-8.jpg",
    name: "Computer Science",
    subText: "Brenda Harris",
    description:
      "Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit conse",
    price: "$200",
    buttonName: "Software",
  },
   {
    image: "assets/courses-img-9.jpg",
    name: "Computer Science",
    subText: "Brenda Harris",
    description:
      "Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit conse",
    price: "$200",
    buttonName: "Design",
  },
];

function renderGridView() {
     const courseList = document.getElementById("courses-list");
    courseList.innerHTML = "";
  courses.forEach((course) => {

    const courseDiv = document.createElement("div");
    courseDiv.className = "third-page-item flexing";
    courseDiv.style.width = "280px";
    courseDiv.style.height = "480px";
    courseDiv.style.margin = "5px";
    courseDiv.innerHTML = `
        <div class="third-page-price-container" style="margin: 160px 0 0 200px; width="200px"><span>${course.price}</span></div>
        <img src=${course.image} alt="3rdPage-image" width="100%" height="40%">
        <div class="third-page-mini-container">
            <div style="margin: 20px">
                <h5 class="thirdPage-heading1">${course.name}</h5>
                <span class="thirdPage-heading2">${course.subText}</span>
                <p class="thirdPage-text">
                    ${course.description}
                </p>
            </div>
            <hr style="border: 0.3px solid #030202; margin: 0 30px; opacity: 0.2;">
            <div class="third-page-buttons-contianer">
                <div class="third-page-button" style="background-color: rgb(243, 172, 175);">
                    <a>${course.buttonName}</a>
                </div>
                <div>
                    <i class="dripicons dripicons-user"></i>
                </div>
            </div>
        </div>
    `;
    courseList.appendChild(courseDiv);
  });
}

function renderlistView() {
    const courseList = document.getElementById("courses-list");
    courseList.innerHTML = "";
  courses.forEach((course) => {
    const courseDiv = document.createElement("div");
    courseDiv.className = "course-item-list-view-parent";
    courseDiv.style.width = "100%";
    courseDiv.style.height = "262px";
    courseDiv.innerHTML = `
        <div class="course-item-list-view-price"><span>${course.price}</span></div>
        <img src=${course.image} alt="3rdPage-image" width="36%" height="100%">
        <div class="course-item-list-view-mini-container">
            <div style="margin: 20px">
                <h5 class="thirdPage-heading1">${course.name}</h5>
                <span class="thirdPage-heading2">${course.subText}</span>
                <p class="thirdPage-text">
                    ${course.description}
                </p>
            </div>
            <hr style="border: 0.3px solid #030202; margin: 0 30px; opacity: 0.2;">
            <div class="third-page-buttons-contianer">
                <div class="third-page-button" style="background-color: rgb(243, 172, 175);">
                    <a>${course.buttonName}</a>
                </div>
                <div>
                    <i class="dripicons dripicons-user"></i>
                </div>
            </div>
        </div>
    `;
    courseList.appendChild(courseDiv);
  });
}

window.addEventListener("DOMContentLoaded", renderGridView);
