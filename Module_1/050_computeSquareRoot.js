
/*
Write a function called "computeSquareRoot".
Given a number, "computeSquareRoot" returns its square root.
var output = computeSquareRoot(9);
console.log(output); // --> 3

Do not use Math.sqrt(); for this problem. Instead, use this iterative way of solving the problem:

https://www.deltacollege.edu/dept/basicmath/Babylonian.htm
*/

function computeSquareRoot(num) {
  // your code here
  var start = num;
  var error = 0.00000001;

  while ((start - num/start) > error) {
    start = (start + num/start) / 2;
  }

  return start;
}
