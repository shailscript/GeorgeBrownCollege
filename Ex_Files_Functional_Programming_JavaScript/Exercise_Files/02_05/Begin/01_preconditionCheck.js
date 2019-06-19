// Learning Functional Programming with Javascript
// Chapter 02, Video 05, Exercise 01

const doIf = (n, message, func) => {
  if (n != null && typeof n === 'number') {
    if (message != null && typeof message === 'string') {
      return func(n, message);
    }
  }
}


printMessageNTimes = (n, message) => {
  for (var i = 0; i < n; i++) 
    console.log(message)
}

getNthLetter = (n, string) => { console.log(string.charAt(n)) }


getSubstringOfLength = (n, string) => { console.log(string.substring(0, n))}

doIf(4, "Banana", printMessageNTimes) // prints "Banana Banana Banana Banana"
doIf(2, "Javascript", getNthLetter) // 'v'
doIf(5, "Hello and welcome", getSubstringOfLength) // "Hello"
doIf('five', "Hello and welcome", getSubstringOfLength) // does nothing
