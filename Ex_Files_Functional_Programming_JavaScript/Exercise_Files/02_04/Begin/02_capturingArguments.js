// Learning Functional Programming with Javascript
// Chapter 02, Video 04, Exercise 02


const createCounter = (count) => {
  return {
    increment: function() {
      count += 1
    },
    currentValue: function() {
      return count
    }
  }
}

let myCounter = createCounter(5);

console.log(myCounter.currentValue())

myCounter.increment()

console.log(myCounter.currentValue())

myCounter.increment()

console.log(myCounter.currentValue())

