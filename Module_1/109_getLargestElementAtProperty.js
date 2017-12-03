/*
Write a function called "getLargestElementAtProperty".

Given an object and a key, "getLargestElementAtProperty" returns the largest element in the array located at the given key.

Notes:
* If the array is empty, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.

var obj = {
  key: [1, 2, 4]
};
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
*/

function getLargestElementAtProperty(obj, key) {
  // your code here
  var array = obj[key];
  var largest = null;

  if (!Array.isArray(array) || array === undefined) {
    return undefined;
  } else if (array.length === 0) {
    return undefined;
  }

  for (var i = 0; i < array.length; i++) {
    var el = array[i];
    if (largest === null || el > largest) {
      largest = el;
    }
  }

  return largest;
}
