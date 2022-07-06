'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// if the first letter is a vowel add "yay"


const pigLatin = (word) => {
// let vowelArr = ["a", "e", "i", "o", "u"]
// let newWord = cleanword + "yay"
// let secondletter =cleanword.slice(1,2)
// let firstletter= cleanword.slice(0,1)
// let newerWord = cleanword.substring(1) + firstletter +"ay"  
// let newestWord = cleanword.substring(2) + cleanword.slice(0,2) +"ay"
let groupOfWords = word.split(" ")
let newlistwords = ""
for (let value of groupOfWords) {
  let cleanwords = value.trim().toLowerCase()
  let vowelArr = ["a", "e", "i", "o", "u"]
  let newWord = cleanwords + "yay"
  let secondletter =cleanwords.slice(1,2)
  let firstletter= cleanwords.slice(0,1)
  let newerWord = cleanwords.substring(1) + firstletter +"ay"  
  let newestWord = cleanwords.substring(2) + cleanwords.slice(0,2) +"ay"
if (vowelArr.includes(firstletter)) {
   newlistwords += newWord + " "
}
else if (vowelArr.includes(secondletter)) {
   newlistwords += newerWord + " "
}
else if (cleanwords= typeof(string)){
   newlistwords += newestWord +" "
}

  // Your code here
}
console.log(newlistwords)
}


// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    pigLatin(answer);
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
