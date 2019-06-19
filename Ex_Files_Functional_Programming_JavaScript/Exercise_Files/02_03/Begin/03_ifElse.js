// Learning Functional Programming with Javascript
// Chapter 02, Video 03, Exercise 03

function doIf(condition, func1, func2) {
  if (condition) {
    func1()
  } else {
    func2()
  }
}

doIf(true, () => console.log('Functional is fun!'), () => console.log('So is Imperative!'))

doIf(5 > 10, () => console.log('5 is greater than 10.'), () => console.log('5 is less than 10.'))
