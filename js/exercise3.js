// //https://github.com/Cornerstone-CICCC/javascript-flowchart-exercises-miu-matsuki

// Write an algorithm and draw a flowchart that will read three numbers and prints the value of the largest number.

// Given that the three numbers are not equal to each other)
console.log("This is exercise3");

let num1 = 1;
let num2 = 2;
let num3 = 3;
let largestNum = null;

if(num1 > num2)
{
  if(num1 > num3)
  {
    largestNum = num1;
  }
  else
  {
    largestNum = num3;
  }
}
else // num2> num1
{
  if(num2 > num3)
  {
    largestNum = num2;
  }
  else
  {
    largestNum = num3;
  }
}

console.log("largest number is " +  largestNum);