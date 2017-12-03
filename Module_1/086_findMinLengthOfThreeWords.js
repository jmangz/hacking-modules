/*
Write a function called "findMinLengthOfThreeWords".

Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1
*/

function findMinLengthOfThreeWords(word1, word2, word3) {
  // your code here
  var smallestWord = word1.length;

  if (word1.length > word2.length && word3.length > word2.length) {
    smallestWord = word2.length;
    return smallestWord;
  } else if (word3.length < word1.length && word3.length < word1.length) {
    smallestWord = word3.length;
    return smallestWord;
  } else {
    return smallestWord;
  }
}
