// Learning Functional Programming with Javascript
// Chapter 04, Video 02, Exercise 01

console.log('Before setTimeout is called.')

setTimeout(() => {
    console.log('After 3 seconds.')
}, 3000);

console.log('After setTimeout but async magic :)');