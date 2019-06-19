// Learning Functional Programming with Javascript
// Chapter 02, Video 05, Exercise 02

function createSafeVersion(func) {
  return function(n, message) {
    if (n != null && typeof n === 'number') {
      if (message != null && typeof message === 'string') {
        return func(n, message);
      }
    }
  }
}

function printMessageNTimes(n, message) {
  for (var i = 0; i < n; i++) { console.log(message); }
}

function getNthLetter(n, string) {
  return console.log(string.charAt(n));
}

function getSubstringOfLength(n, string) {
  return console.log(string.substring(0, n));
}

const safelyPrintMessageNTimes = createSafeVersion(printMessageNTimes);
const safelyGetNthLetter = createSafeVersion(getNthLetter);
const safelyGetSubstringOfLength = createSafeVersion(getSubstringOfLength);

safelyPrintMessageNTimes(4, "Banana"); // prints "Banana Banana Banana Banana"
safelyGetNthLetter(2, "Javascript"); // 'v'
safelyGetSubstringOfLength(5, "Hello and welcome"); // "Hello"
safelyGetSubstringOfLength('five', "Hello and welcome") // does nothing
