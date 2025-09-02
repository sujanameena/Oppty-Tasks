function calculateGrade(average) {
    if (average >= 90) return "A";
    else if (average >= 75) return "B";
    else if (average >= 50) return "C";
    else return "Fail";
}

function checkLimit(input) {
    if (input.value > 100) input.value = 100;
    if (input.value < 0) input.value = 0;
  }

function generateReport() {
    let name = document.getElementById("studentName").value;
    let marks = document.querySelectorAll(".marks");

    let total = 0;
    let count = 0;


    marks.forEach(input => {
        let mark = parseFloat(input.value);
        if (!isNaN(mark)) {
            total += mark;
            count++;
        }
    });

    if (name.trim() === "" || count < 6) {
        document.getElementById("output").innerHTML =
            "<span class='fail'>⚠️ Please enter student name and all 6 subject marks!</span>";
        return;
    }

    let average = total / count;
    let grade = calculateGrade(average);

    let gradeClass = "";
    if (grade === "A") gradeClass = "grade-A";
    else if (grade === "B") gradeClass = "grade-B";
    else if (grade === "C") gradeClass = "grade-C";
    else gradeClass = "fail";


    document.getElementById("output").innerHTML = `
         Student Name: <b>${name}</b><br>
        Subjects: ${count}<br>
         Average Marks: ${average.toFixed(2)}%<br>
        Result: <span class="${gradeClass}">Grade ${grade}</span>
      `;
}