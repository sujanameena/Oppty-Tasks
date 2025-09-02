function checkEligibility() {
    const attendance = document.getElementById("attendance").value;
    const medicalCert = document.getElementById("option1").checked;
    const sportsPlayer = document.getElementById("option2").checked;
    const result = document.getElementById("result");

    if (attendance === "" || attendance < 0 || attendance > 100) {
        result.textContent = "⚠️ Please enter a valid percentage (0-100).";
        result.style.color = "orange";
        return;
    }

    if (attendance >= 75) {
        result.textContent = "✅ Eligible for exam (Attendance: " + attendance + "%)";
        result.style.color = "green";
    }
    else {
        if (medicalCert === true || sportsPlayer === true) {
            result.textContent = "✅ Eligible for exam (Attendance: " + attendance + "%)";
            result.style.color = "green";
        } else {
            result.textContent = "❌ Not Eligible (Attendance: " + attendance + "%)";
            result.style.color = "red";
        }
    }
}
