/*
Write a function called "getLengthOfShortestElement".

Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
*/

function getLengthOfShortestElement(arr) {
  // your code here
  if (arr.length === 0) {
    return 0;
  }

  var shortest = arr[0].length;

  for (var i = 1; i < arr.length; i++) {
    var el = arr[i];
    if (el.length <= shortest) {
      shortest = el.length;
    }
  }

  return shortest;
}

getLengthOfShortestElement(['one', 'two', 'three'])
