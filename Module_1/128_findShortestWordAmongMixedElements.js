/*
Write a function called "findShortestWordAmongMixedElements".

Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear in the given array.
* Expect the given array to have values other than strings.
* If the given array is empty, it should return an empty string.
* If the given array contains no strings, it should return an empty string.

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
*/

function findShortestWordAmongMixedElements(arr) {
  // your code here
  var shortest = null;
  var shortWord = '';

  for (var i = 0; i < arr.length; i++) {
    var el = arr[i];
    if (typeof el === 'string' && (shortest === null || el.length < shortest)) {
      shortest = el.length;
      shortWord = el;
    }
  }

  return shortWord;
}

var p1 = [1,2,3,'word','poop'];
console.log(findShortestWordAmongMixedElements(p1));
