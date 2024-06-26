function addCourseInput() {
    var courseInputs = document.getElementById("courseInputs");
    var courseCount = document.getElementById("courses").value;

    courseInputs.innerHTML = ""; // Clear previous inputs

    for (var i = 1; i <= courseCount; i++) {
        var div = document.createElement("div");
        div.innerHTML = `
            <label for="course${i}">Course ${i} Name:</label>
            <input type="text" id="course${i}" placeholder="Course Name">
            <label for="grade${i}">Grade:</label>
            <input type="text" id="grade${i}" placeholder="A, B, C, D, F">
        `;
        courseInputs.appendChild(div);
    }
}

function calculateCGPA() {
    var courseCount = document.getElementById("courses").value;
    var totalCreditHours = 0;
    var totalGradePoints = 0;

    for (var i = 1; i <= courseCount; i++) {
        var courseName = document.getElementById(`course${i}`).value;
        var grade = document.getElementById(`grade${i}`).value.toUpperCase();

        // Assuming each course is 3 credit hours
        totalCreditHours += 3;

        switch (grade) {
            case "A":
                totalGradePoints += 4 * 3; // 4 grade points per credit hour
                break;
            case "B":
                totalGradePoints += 3 * 3;
                break;
            case "C":
                totalGradePoints += 2 * 3;
                break;
            case "D":
                totalGradePoints += 1 * 3;
                break;
            case "F":
                totalGradePoints += 0 * 3;
                break;
            default:
                alert("Invalid grade for course " + courseName);
                return;
        }
    }

    var cgpa = totalGradePoints / totalCreditHours;
    document.getElementById("result").innerHTML = "Your CGPA is: " + cgpa.toFixed(2);
}

// Add course inputs when the number of courses is changed
document.getElementById("courses").addEventListener("change", addCourseInput);

// Add initial course inputs
addCourseInput();