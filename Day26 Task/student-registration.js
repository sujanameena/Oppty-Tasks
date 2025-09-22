var studentsList = [];
 let isEditing = false;

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const submitBtn = document.getElementById("submit-btn");
  const noParentsCheckbox = document.getElementById("no-parents");
  const guardianInfo = document.getElementById("guardian-info");
  const dobDay = document.getElementById("dob-day");
  const dobMonth = document.getElementById("dob-month");
  const dobYear = document.getElementById("dob-year");
  const ageInput = document.getElementById("age");
  const imageUpload = document.getElementById("upload-image");
  const imagePreview = document.getElementById("image-preview");
  const modal = document.getElementById("modal");
  const modalData = document.getElementById("modal-data");
  const modalClose = document.querySelector(".modal-close");
  const messageBox = document.getElementById("message-box");

  // Read localStorage for studentRegistrationData and populate studentsList
  const storedData = localStorage.getItem("studentRegistrationData");
  if (storedData) {
    studentsList = JSON.parse(storedData);
    updateStudentsList();
  }
  let savedImageBase64 = null;

  // Show guardian fields if no parents checkbox is checked
  noParentsCheckbox.addEventListener("change", () => {
    guardianInfo.classList.toggle("hidden", !noParentsCheckbox.checked);
  });

  // Calculate age dynamically
  function calculateAge() {
    const day = parseInt(dobDay.value);
    const month = parseInt(dobMonth.value);
    const year = parseInt(dobYear.value);

    if (day && month && year) {
      const today = new Date();
      const birthDate = new Date(year, month - 1, day);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      ageInput.value = age >= 0 ? `${age} years` : "";
    } else {
      ageInput.value = "";
    }
  }

  dobDay.addEventListener("input", calculateAge);
  dobMonth.addEventListener("input", calculateAge);
  dobYear.addEventListener("input", calculateAge);

  // Handle image upload and preview
  imageUpload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        imagePreview.src = e.target.result;
        imagePreview.classList.remove("hidden");
        savedImageBase64 = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      imagePreview.classList.add("hidden");
    }
  });

  // Display message to the user
  function showMessage(message) {
    messageBox.textContent = message;
    messageBox.style.display = "flex";
    messageBox.style.opacity = 1;
    setTimeout(() => {
      messageBox.style.opacity = 0;
      setTimeout(() => {
        messageBox.style.display = "none";
      }, 500);
    }, 3000);
  }

  // Save data to localStorage (Create & Update)
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const noParentsCheckbox = document.getElementById("no-parents");
    const uid = document.getElementById("uid");
    const existingStudent = studentsList.find((student) => student.uid === uid.value);

    let data = {};
    if (isEditing) {
        if (existingStudent) {
            data = existingStudent;
        }
    }else {
        if(existingStudent) {
            showMessage("Student with uid already exist");
        }
    }

    // Get all form data
    const formData = new FormData(form);
    
    formData.forEach((value, key) => {
      data[key] = value;
    });
    data["no-parents"] = noParentsCheckbox.checked;
    data["age"] = ageInput.value;
    if(savedImageBase64) {
        data["image"] = savedImageBase64;
    }


    const existingIndex = studentsList.findIndex(student => student.uid === data.uid);
    if (existingIndex !== -1) {
      studentsList[existingIndex] = data;
    } else {
      studentsList.push(data);
    }

    localStorage.setItem(
      "studentRegistrationData",
      JSON.stringify(studentsList)
    );

    if (isEditing) {
      showMessage("Form data updated successfully!");
      isEditing = false;
      editBtn.textContent = "Edit";
      submitBtn.textContent = "Submit";
      submitBtn.classList.remove("hidden");
      deleteBtn.classList.remove("hidden");
      form
        .querySelectorAll("input, select, textarea")
        .forEach((el) => (el.disabled = false));
    } else {
      showMessage("Form data submitted successfully!");
    }

    form.reset();
    ageInput.value = "";
    imagePreview.classList.add("hidden");
    savedImageBase64 = null;
    updateStudentsList();
  });


  function updateStudentsList() {
    const tableBody = document.getElementById("student-details-table-body");
    tableBody.innerHTML = "";
    studentsList.forEach((student, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
            <td class="table-data">${index + 1}</td>
            <td>
                <div>
                    ${
                      student["name"]
                        ? `<img src="${student["image"]}" alt="Student Image" style="width:40px;height:40px;border-radius:50%;">`
                        : ""
                    }
                    <span style="margin-right:10px;"></span>
                    ${student["title"]}. ${student["name"] || ""}
                </div>
            </td>
            <td class="table-data">${student["mobile"] || ""}</td>
            <td class="table-data">${student["age"] || ""}</td>
            <td class="table-data">${student["nationality"] || ""}</td>
            <td class="table-data">
                <div style="d-flex justify-content-center align-items-center">
                    <button class="btn btn-outline-secondary p-0" title="View" id="viewBtn" onclick="viewBtnClick(${
                      student.uid
                    })">
                        <img src="assets/view-icon.png" alt="View" style="width:24px;height:24px;">
                    </button>
                    <button class="btn btn-outline-secondary p-0" title="Edit" id="editBtn" onclick="editBtnClick(${
                      student.uid
                    })">
                        <img src="assets/edit-icon.png" alt="Edit" style="width:24px;height:24px;">
                    </button>
                    <button class="btn btn-outline-secondary p-0" title="Delete" id="deleteBtn" onclick="deleteBtnClick(${
                      student.uid
                    })">
                        <img src="assets/delete-icon.png" alt="Delete" style="width:24px;height:24px">
                    </button>
                </div>
            </td>
        `;
      tableBody.appendChild(row);
    });
  }

  // Close modal
  //   modalClose.addEventListener("click", () => {
  //     modal.style.display = "none";
  //   });
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
// BUTTON OPERATIONS

// View form data (Read)
function viewBtnClick(studentId) {
  const storedData = localStorage.getItem("studentRegistrationData");
  let studentsList = storedData ? JSON.parse(storedData) : [];
  const student = studentsList.find((s) => s.uid == studentId);

  if (student) {
    let detailsHtml = `
        <h3>Student Details</h3>
        <form class="student-details-form">
            <div>
                <label>Name:</label>
                <input type="text" value="${student.name || ""}" disabled>
            </div>
            <div>
                <label>Title:</label>
                <input type="text" value="${student.title || ""}" disabled>
            </div>
            <div>
                <label>Mobile:</label>
                <input type="text" value="${student.mobile || ""}" disabled>
            </div>
            <div>
                <label>Age:</label>
                <input type="text" value="${student.age || ""}" disabled>
            </div>
            <div>
                <label>Nationality:</label>
                <input type="text" value="${
                  student.nationality || ""
                }" disabled>
            </div>
            <div>
                <label>Image:</label>
                ${
                  student.image
                    ? `<img src="${student.image}" style="width:100px;height:100px;border-radius:10%;">`
                    : ""
                }
            </div>
        </form>
    `;
    document.getElementById("student-details-popup-body").innerHTML =
      detailsHtml;
    document.getElementById("student-details-popup").style.display = "block";
  }
}

// Handle edit mode
function editBtnClick(studentId) {
  const form = document.getElementById("registration-form");
  isEditing = true;
  const storedData = localStorage.getItem("studentRegistrationData");
  let studentsList = storedData ? JSON.parse(storedData) : [];
  const student = studentsList.find((s) => s.uid == studentId);

  if (student) {
    // Fill form fields with student data
    document.getElementById("uid").value = student.uid || "";
    document.getElementById("name").value = student.name || "";
    document.getElementById("title").value = student.title || "";
    document.getElementById("mobile").value = student.mobile || "";
    document.getElementById("nationality").value = student.nationality || "";
    document.getElementById("dob-day").value = student["dob-day"] || "";
    document.getElementById("dob-month").value = student["dob-month"] || "";
    document.getElementById("dob-year").value = student["dob-year"] || "";
    document.getElementById("age").value = student.age || "";
    document.getElementById("aadhaar").value = student.aadhar || "";
    document.getElementById("address").value = student.address || "";
    document.getElementById("city").value = student.city || "";
    document.getElementById("state").value = student.state || "";
    document.getElementById("country").value = student.country || "";
    document.getElementById("Pin").value = student.Pin || "";

    imagePreview = document.getElementById("image-preview");
    if (student.image) {
      imagePreview.src = student.image;
      imagePreview.classList.remove("hidden");
      savedImageBase64 = student.image;
    } else {
      imagePreview.classList.add("hidden");
      savedImageBase64 = null;
    }
    const guardianInfo = document.getElementById("guardian-info");
    const noParentsCheckbox = document.getElementById("no-parents");
    noParentsCheckbox.checked = student["no-parents"] || "";

    if (student["guardian-name"] || student["guardian-mobile"]) {
      guardianInfo.classList.remove("hidden");
      document.getElementById("guardian-name").value =
        student["guardian-name"] || "";
      document.getElementById("guardian-mobile").value =
        student["guardian-mobile"] || "";
      document.getElementById("father-name").disabled = true;
      document.getElementById("father-mobile").disabled = true;
    } else {
      guardianInfo.classList.add("hidden");
      document.getElementById("guardian-name").value = "";
      document.getElementById("guardian-mobile").value = "";
    }
    // Disable all fields except submit/update
    form
      .querySelectorAll("input, select, textarea")
      .forEach((el) => (el.disabled = false));
  }
  editBtn.textContent = "Save Changes";
  submitBtn.textContent = "Update";
  submitBtn.classList.remove("hidden");
}

// Delete form data (Delete)
function deleteBtnClick() {
  if (confirm("Are you sure you want to delete this data?")) {
    localStorage.removeItem("studentRegistrationData");
    form.reset();
    ageInput.value = "";
    imagePreview.classList.add("hidden");
    showMessage("Form data deleted successfully!");

    // Reset UI
    submitBtn.classList.remove("hidden");
    viewBtn.classList.remove("hidden");
    form
      .querySelectorAll("input, select, textarea")
      .forEach((el) => (el.disabled = false));
  }
}
// CURD OPERATIONS
function handleNoParentsCheckbox(isChecked) {
  const fatherMobile = document.getElementById("father-mobile");
  const fatherName = document.getElementById("father-name");
  fatherMobile.disabled = isChecked;
  fatherName.disabled = isChecked;
  if (isChecked) {
    fatherMobile.style.backgroundColor = "#e0e0e0";
    fatherName.style.backgroundColor = "#e0e0e0";
  } else {
    fatherMobile.style.backgroundColor = "";
    fatherName.style.backgroundColor = "";
  }
}
