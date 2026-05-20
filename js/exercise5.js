//https://github.com/Cornerstone-CICCC/javascript-flowchart-exercises-miu-matsuki

// Draw the flowchart for the following:

// Accept the name and marks obtained by a student in Computer Project.

// Display the grades as per the table given below:

// Marks obtained	Grade
// 80% or more	A
// 60% or more but less than 80%	B
// 40% or more but less than 60%	C
// Less than 40%	No Grade


console.log("This is exercise5");

let name  = "Miu";
let score = 60;
let message = null;

switch(true){

case 80 < score:
  message = "A";
  break;
case 60 <= score && score < 80:
  message = "B";
  break;
case 40 <= score && score < 60:
  message = "C";
  break;
case score < 40:
  message = "No Grade";
  break;
}


console.log("Name: " + name + "\n" + "Grade: " + message);