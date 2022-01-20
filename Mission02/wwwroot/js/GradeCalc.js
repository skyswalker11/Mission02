// This file contains the javascript necessary to calculate the user's final grade given the user inputs.  It also displays a corresponding letter grade depending on the final numeric grade.
$("#btnSend").click(function () {
    let fNumGrade;
    let asLetterGrade = ["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "E"];

    fNumGrade = ($("#intAssign").val() * .55) +
        ($("#intGroup").val() * .05) +
        ($("#intQuiz").val() * .1) +
        ($("#intExam").val() * .2) +
        ($("#intINT").val() * .1)
    
    if (fNumGrade >= 94) {
        alert("Final Grade: " + fNumGrade + "%\n"
            + "Letter Grade: " + asLetterGrade[0])
    }
    else if (fNumGrade >= 90) {
        alert("Final Grade: " + fNumGrade + "%\n"
            + "Letter Grade: " + asLetterGrade[1])
    }
    else if (fNumGrade >= 87) {
        alert("Final Grade: " + fNumGrade + "%\n"
            + "Letter Grade: " + asLetterGrade[2])
    }
    else if (fNumGrade >= 84) {
        alert("Final Grade: " + fNumGrade + "%\n"
            + "Letter Grade: " + asLetterGrade[3])
    }
    else if (fNumGrade >= 80) {
        alert("Final Grade: " + fNumGrade + "%\n"
            + "Letter Grade: " + asLetterGrade[4])
    }
    else if (fNumGrade >= 77) {
        alert("Final Grade: " + fNumGrade + "%\n"
            + "Letter Grade: " + asLetterGrade[5])
    }
    else if (fNumGrade >= 74) {
        alert("Final Grade: " + fNumGrade + "%\n"
            + "Letter Grade: " + asLetterGrade[6])
    }
    else if (fNumGrade >= 70) {
        alert("Final Grade: " + fNumGrade + "%\n"
            + "Letter Grade: " + asLetterGrade[7])
    }
    else if (fNumGrade >= 67) {
        alert("Final Grade: " + fNumGrade + "%\n"
            + "Letter Grade: " + asLetterGrade[8])
    }
    else if (fNumGrade >= 64) {
        alert("Final Grade: " + fNumGrade + "%\n"
            + "Letter Grade: " + asLetterGrade[9])
    }
    else if (fNumGrade >= 60) {
        alert("Final Grade: " + fNumGrade + "%\n"
            + "Letter Grade: " + asLetterGrade[10])
    }
    else {
        alert("Final Grade: " + fNumGrade + "%\n"
            + "Letter Grade: " + asLetterGrade[11])
    }
    
})  

