/*
Write a function called "filterEvenLengthWords".

Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
*/

function filterEvenLengthWords(words) {
  // your code here
  var results = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (word.length % 2 === 0) {
      results.push(word);
    }
  }

  return results;
}
