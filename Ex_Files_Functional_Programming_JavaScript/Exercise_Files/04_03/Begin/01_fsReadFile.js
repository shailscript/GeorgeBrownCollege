// Learning Functional Programming with Javascript
// Chapter 04, Video 03, Exercise 01
var fs = require('fs');

let fileContents = 'No content';

fs.readFile('message.txt', 'utf8', function(err, data) {
  if (err) throw err;
  fileContents = data;
  console.log(fileContents);
})

console.log(fileContents); // called first.