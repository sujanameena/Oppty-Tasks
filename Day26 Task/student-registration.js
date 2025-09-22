document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const submitBtn = document.getElementById("submit-btn");
  const viewBtn = document.getElementById("view-btn");
  const editBtn = document.getElementById("edit-btn");
  const deleteBtn = document.getElementById("delete-btn");
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

  let isEditing = false;
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
    messageBox.style.display = "block";
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

    // Get all form data
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    data["age"] = ageInput.value;
    data["image"] = savedImageBase64;

    localStorage.setItem("studentRegistrationData", JSON.stringify(data));

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
  });

  // View form data (Read)
  viewBtn.addEventListener("click", () => {
    const storedData = localStorage.getItem("studentRegistrationData");
    if (storedData) {
      const data = JSON.parse(storedData);
      modalData.textContent = JSON.stringify(data, null, 2);
      modal.style.display = "flex";

      // Populate form fields for viewing
      for (const key in data) {
        const input = document.getElementById(key);
        if (input) {
          input.value = data[key];
        }
      }
      if (data.age) {
        ageInput.value = data.age;
      }
      if (data.image) {
        imagePreview.src = data.image;
        imagePreview.classList.remove("hidden");
      }

      // Disable all fields for viewing
      form
        .querySelectorAll("input, select, textarea")
        .forEach((el) => (el.disabled = true));
      submitBtn.classList.add("hidden");
      viewBtn.classList.add("hidden");
      editBtn.classList.remove("hidden");
      deleteBtn.classList.remove("hidden");

      // Show guardian info if needed
      noParentsCheckbox.checked = !!data["no-parents"];
      guardianInfo.classList.toggle("hidden", !noParentsCheckbox.checked);
    } else {
      showMessage("No data to view. Please submit the form first.");
    }
  });

  // Handle edit mode
  editBtn.addEventListener("click", () => {
    isEditing = true;
    form
      .querySelectorAll("input, select, textarea")
      .forEach((el) => (el.disabled = false));
    editBtn.textContent = "Save Changes";
    submitBtn.textContent = "Update";
    submitBtn.classList.remove("hidden");
    viewBtn.classList.remove("hidden");
    deleteBtn.classList.remove("hidden");
  });

  // Delete form data (Delete)
  deleteBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this data?")) {
      localStorage.removeItem("studentRegistrationData");
      form.reset();
      ageInput.value = "";
      imagePreview.classList.add("hidden");
      showMessage("Form data deleted successfully!");

      // Reset UI
      submitBtn.classList.remove("hidden");
      viewBtn.classList.remove("hidden");
      editBtn.classList.add("hidden");
      deleteBtn.classList.add("hidden");
      form
        .querySelectorAll("input, select, textarea")
        .forEach((el) => (el.disabled = false));
    }
  });

  // Close modal
  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
