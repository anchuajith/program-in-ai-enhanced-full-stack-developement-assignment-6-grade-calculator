let mark_maths;
let mark_english;
let mark_computer;
let mark_chemistry;
let mark_physics;

let total;
let average;
let grade;

function getMark() {
  mark_maths = prompt("Marks of maths");
  mark_english = prompt("Marks of english");
  mark_physics = prompt("Marks of physics");
  mark_computer = prompt("Marks of computer");
  mark_chemistry = prompt("Marks of chemistry");

  console.log(mark_maths);
  console.log(mark_english);
  console.log(mark_computer);
  console.log(mark_physics);
  console.log(mark_chemistry);

  if (mark_english == null) {
    alert("please enter marks of english");
  }
  if (mark_maths == null) {
    alert("please enter marks of maths");
  }
  if (mark_computer == null) {
    alert("please enter marks of computer");
  }
  if (mark_physics == null) {
    alert("please enter marks of physics");
  }
  if (mark_chemistry == null) {
    alert("please enter marks of chemistry");
  }

  total =
    parseFloat(mark_maths) +
    parseFloat(mark_english) +
    parseFloat(mark_computer) +
    parseFloat(mark_physics) +
    parseFloat(mark_chemistry);

  average = total / 5;

  if (average > 0) {
    if (average >= 90) {
      console.log("A+");
      grade = "A+";
    } else if (average >= 80) {
      console.log("A");
      grade = "A";
    } else if (average >= 70) {
      console.log("B");
      grade = "B";
    } else if (average >= 60) {
      console.log("C");
      grade = "C";
    } else if (average >= 50) {
      console.log("D");
      grade = "D";
    } else if (average < 50) {
      console.log("F");
      grade = "F";
    }

    alert(
      "Total Mark : " +
        total +
        "\n Average : " +
        average +
        "\n Grade : " +
        grade,
    );
  }
}
