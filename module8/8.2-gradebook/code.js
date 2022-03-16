let students = [
    {
        studentName: "Stacy", pointsEarned: 9, pointsPossible: 10, getPercent: function () {
            return (this.pointsEarned / this.pointsPossible) * 100 + "%";
        }
    },
    {
        studentName: "Gigi", pointsEarned: 7, pointsPossible: 10, getPercent: function () {
            return (this.pointsEarned / this.pointsPossible) * 100 + "%";
        }
    },
    {
        studentName: "Phil", pointsEarned: 8, pointsPossible: 10, getPercent: function () {
            return (this.pointsEarned / this.pointsPossible) * 100 + "%";
        }
    }
];

function addStudent(event) {
    event.preventDefault();

    // read form data
    let name = $("input#name").val();
    let earned = Number($("input#earned").val());
    let possible = Number($("input#possible").val());

    // create an object
    let aStudent = {
        studentName: name,
        pointsEarned: earned,
        pointsPossible: possible,
        getPercent: function () {
            return (this.pointsEarned / this.pointsPossible) * 100 + "%";
        }
    };

    // add student object to array
    students.push(aStudent);

    // print all students in array
    printAllStudents();
}

function printAllStudents() {
    $("div#output").empty();

    // loop through student array
    for (let student of students) {
        // create a string that says "Name Percent%"
        let display = `${student.studentName} ${student.getPercent()}`;
        // append string to div#output
        $("div#output").append(display + "<br>");
    }
}

function sortByName() {
    // sort student array by studentName property
    students.sort(compareStudentsByName);

    // print all students in array
    printAllStudents();
}

function compareStudentsByName(a, b) {
    if (a.studentName.toLowerCase() < b.studentName.toLowerCase())
        return -1;
    if (a.studentName.toLowerCase() > b.studentName.toLowerCase())
        return 1;
    return 0;
}

function sortByGrade() {
    // sort student array by pointsEarned / pointsPossible
    students.sort(function (a, b) {
        let percentA = a.pointsEarned / a.pointsPossible;
        let percentB = b.pointsEarned / b.pointsPossible;

        if (percentA > percentB)
            return -1;
        if (percentA < percentB)
            return 1;
        return 0;
    });


    // print all students in array
    printAllStudents();
}


$("form").on("submit", addStudent);
$("button#sortName").on("click", sortByName);
$("button#sortGrade").on("click", sortByGrade);
