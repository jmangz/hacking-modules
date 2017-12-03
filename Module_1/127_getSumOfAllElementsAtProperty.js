/*
Write a function called "getSumOfAllElementsAtProperty".

Given an object and a key, "getSumOfAllElementsAtProperty" returns the sum of all the elements in the array located at the given key.

Notes:
* If the array is empty, it should return 0.
* If the property at the given key is not an array, it should return 0.
* If there is no property at the key, it should return 0.

var obj = {
  key: [4, 1, 8]
};
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
*/

function getSumOfAllElementsAtProperty(obj, key) {
  // your code here
  var array = obj[key];
  var sum = 0;

  if (!Array.isArray(array) || array === undefined) {
    return 0;
  } else if (array.length === 0) {
    return 0;
  }

  for (var i = 0; i < array.length; i++) {
    var el = array[i];
    sum += el;
  }

  return sum;
}
