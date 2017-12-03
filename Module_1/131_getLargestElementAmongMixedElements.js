/*
Write a function called "getLargestNumberAmongMixedElements".

Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

Notes:
* The array might contain values of a type other than numbers.
* If the array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
*/

function getLargestNumberAmongMixedElements(arr) {
  // your code here
  var largest = null;

  if (arr.length === 0) {
    return 0;
  }

  for (var i = 0; i < arr.length; i++) {
    var el = arr[i];
    if (typeof el === 'number' && (largest === null || largest < el)) {
      largest = el;
    }
  }

  if (largest === null) {
    return 0;
  }

  return largest;
}
