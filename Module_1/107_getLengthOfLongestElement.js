/*
Write a function called "getLengthOfLongestElement".

Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
*/

function getLengthOfLongestElement(arr) {
  // your code here
  var longest = 0;

  for (var i = 0; i < arr.length; i++) {
    var el = arr[i];
    if (el.length > longest) {
      longest = el.length;
    }
  }

  return longest;
}
