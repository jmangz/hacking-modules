/*
Write a function called "multiply".

Given 2 numbers, "multiply" returns their product.

Notes:
* It should not use the multiply operator (*).\

var output = multiply(4, 7);
console.log(output); // --> 28
*/

function multiply(num1, num2) {
  // your code here
  var sum = 0;
  if (num2 < 0) {
    num2 = num2 - num2 - num2;
    for (var i = 0; i < num2; i++) {
      sum += num1;
    }

    return sum - sum - sum;
  } else {
    for (var i = 0; i < num2; i++) {
      sum += num1;
    }

    return sum;
  }

}

console.log(multiply(5,-5));
