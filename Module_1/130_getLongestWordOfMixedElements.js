/*
Write a function called "getLongestWordOfMixedElements".

Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.

Notes:
* If the array is empty, it should return an empty string ("").
* If the array contains no strings; it should return an empty string.

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
*/

function getLongestWordOfMixedElements(arr) {
  // your code here
  var longest = '';
  var longestLength = null;

  for (var i = 0; i < arr.length; i++) {
    var el = arr[i];
    if (typeof el === 'string' && (longestLength === null || longestLength < el.length)) {
      longestLength = el.length;
      longest = el;
    }
  }

  return longest;
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output);
