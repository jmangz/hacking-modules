/*
Write a function called "getProductOfAllElementsAtProperty".

Given an object and a key, "getProductOfAllElementsAtProperty" returns the product of all the elements in the array located at the given key.

Notes:
* If the array is empty, it should return 0.
* If the property at the given key is not an array, it should return 0.
* If there is no property at the given key, it should return 0.

var obj = {
  key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
*/

function getProductOfAllElementsAtProperty(obj, key) {
  // your code here
  var array = obj[key];

  if (!Array.isArray(array) || array === undefined) {
    return 0;
  } else if (array.length === 0) {
    return 0;
  }

  var result = array[0];
  
  for (var i = 1; i < array.length; i++) {
    var el = array[i];
    result *= el;
  }

  return result;
}
