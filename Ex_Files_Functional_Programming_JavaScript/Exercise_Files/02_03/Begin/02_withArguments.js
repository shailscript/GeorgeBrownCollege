// Learning Functional Programming with Javascript
// Chapter 02, Video 03, Exercise 02

whatToDo = (_arg1, _arg2, func) => {
  func(_arg1, _arg2);
}

let x = 1, y = 2;

whatToDo(2, 3, () => console.log(x + y)) // 3 - accessing global scope, confusing :)

whatToDo(x, y, (arbitraryName1, arbitraryName2) => console.log(arbitraryName1 + arbitraryName2))

whatToDo(x, y, (arg1, arg2) =>  console.log(arg1 - arg2))

whatToDo(x, y, (x, y) => console.log(`I can do anything with ${x} and ${y}!`))