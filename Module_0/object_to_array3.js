/*
Write  a function called "convertObjectToList" which converts an object literal into an array of arrays, like this:
Argument:
{
  name: 'Holly',
  age: 35,
  role: 'producer'
}
Return value:
[['name', 'Holly'], ['age', 35], ['role', 'producer']]

Note that your function should be able to handle ANY object like this, not just the exact sample provided above.

E.g., it should also be able to handle this, or any other object containing simple key-value pairs.
{
  species: 'canine',
  name: 'Bowser',
  weight: 45
}

Starter Code:
*/

function convertObjectToList(obj) {
  // your code here
  var result = [];

  for (var key in obj) {
    var el1 = key;
    var el2 = obj[key];
    var pair = [el1, el2];
    result.push(pair);
  }

  return result;
}

console.log(convertObjectToList({
  name: 'Holly',
  age: 35,
  role: 'producer'
}));
