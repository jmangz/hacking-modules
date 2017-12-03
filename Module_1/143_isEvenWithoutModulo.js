/*
Write a function called "isEvenWithoutModulo".

Given a number, "isEvenWithoutModulo" returns whether it is even.

Notes:
* It does so without using the modulo operator (%).
* It should work for negative numbers and zero.

var output = isEvenWithoutModulo(8);
console.log(output); // --> true
*/

function isEvenWithoutModulo(num) {
  // your code here
  var isEven = num.toString().split('');

  if (isEven[isEven.length - 1] === '0' || isEven[isEven.length - 1] === '2' || isEven[isEven.length - 1] === '4' || isEven[isEven.length - 1] === '6' || isEven[isEven.length - 1] === '8') {
    return true;
  } else {
    return false;
  }
}

console.log(isEvenWithoutModulo(10));
