$("#submit").click(function () {
    var gradePercent = calculateGrade($("#asn").val(), $("#gp").val(), $("#qz").val(), $("#ex").val(), $("#intx").val());
    var letterGrade = getLetterGrade(gradePercent);

    alert("Final Grade: " + gradePercent + "% " + letterGrade);
})

// This function receives as inputs the percentages scored of each grade category
// and outputs the final grade percentage
function calculateGrade(asn, gp, qz, ex, intx) {
    var grade = (asn * .55) + (gp * .05) + (qz * .1) + (ex * .2) + (intx * .1);
    grade = grade.toFixed(2);

    return grade;
}

// This function receives the grade percent and outputs the final letter grade
function getLetterGrade(gradePercent) {
    var letterGrade = "";

    if (gradePercent >= 94) {
        letterGrade = "A";
    }
    else if (gradePercent >= 90) {
        letterGrade = "A-";
    }
    else if (gradePercent >= 87) {
        letterGrade = "B+";
    }
    else if (gradePercent >= 84) {
        letterGrade = "B";
    }
    else if (gradePercent >= 80) {
        letterGrade = "B-";
    }
    else if (gradePercent >= 77) {
        letterGrade = "C+";
    }
    else if (gradePercent >= 74) {
        letterGrade = "C";
    }
    else if (gradePercent >= 70) {
        letterGrade = "C-";
    }
    else if (gradePercent >= 67) {
        letterGrade = "D+";
    }
    else if (gradePercent >= 64) {
        letterGrade = "D";
    }
    else if (gradePercent >= 60) {
        letterGrade = "D-";
    }
    else {
        letterGrade = "E";
    };

    return letterGrade;
}