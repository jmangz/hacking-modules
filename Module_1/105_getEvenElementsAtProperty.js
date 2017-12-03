/*
Write a function called "getEvenElementsAtProperty".

Given an object and a key, "getEvenElementsAtProperty" returns an array containing all the even elements of the array located at the given key.

Notes:
* If the array is empty, it should return an empty array.
* If the array contains no even elements, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the given key, it should return an empty array.

var obj = {
  key: [1000, 11, 50, 17]
};
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
*/

function getEvenElementsAtProperty(obj, key) {
  // your code here
  var results = [];
  var array = obj[key];

  if (!Array.isArray(array) || array === undefined) {
    return [];
  }

  for (var i = 0; i < array.length; i++) {
    var el = array[i];
    if (el % 2 === 0) {
      results.push(el);
    }
  }

  return results;
}
