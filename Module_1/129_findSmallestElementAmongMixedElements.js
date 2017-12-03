/*
Write a function called "findSmallestNumberAmongMixedElements".

Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
*/

function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  var smallest = null;

  if (arr.length === 0) {
    return 0;
  }

  for (var i = 0; i < arr.length; i++) {
    var el = arr[i];
    if (typeof el === 'number' && (smallest === null || smallest > el)) {
      smallest = el;
    }
  }

  if (smallest === null) {
    return 0;
  }

  return smallest;
}


var p1 = [1,23,3];
console.log(findSmallestNumberAmongMixedElements(p1));
