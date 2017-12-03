/*
Write a function called "findShortestOfOfThreeWords".

Given 3 strings, "findShortestOfOfThreeWords" returns the shortest of the given strings.

Notes:
* If there are ties, it should return the first word in the parameters list.

var output = findShortestOfOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
*/

function findShortestOfOfThreeWords(word1, word2, word3) {
  // your code here
  if (word2.length < word1.length && word2.length < word3.length) {
    return word2;
  } else if (word3.length < word1.length && word3.length < word2.length) {
    return word3;
  } else {
    return word1;
  }
}
