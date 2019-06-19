// Learning Functional Programming with Javascript
// Chapter 02, Video 04, Exercise 01

const createCounter = () => {
  count = 0;
  return {
    increment: function() {
      count += 1
    },
    currentValue: function() {
      return count
    }
  }
}

let myCounter = createCounter();

console.log(myCounter.currentValue())

myCounter.increment()

console.log(myCounter.currentValue())

myCounter.increment()

myCounter.count = 900 // Doesn't work

console.log(myCounter.currentValue())
