//https://github.com/Cornerstone-CICCC/javascript-flowchart-exercises-miu-matsuki

// Write an algorithm and draw a flowchart to check the three number inputs whether a triangle is possible or not.

console.log("This is exercise4");

let num1 = 5;
let num2 = 5;
let num3 = 5;
let largestNum = null;
let message = null;

if( num1 < num2 + num3 &&
    num2 < num1 + num3 &&
    num3 < num1 + num2)
  {
  message = "Possible!!" ;
  }

else
  {
  message = "Inpossible" ;
  } 


console.log(num1 + ", " + num2 + ", " + num3 + ":" + message);