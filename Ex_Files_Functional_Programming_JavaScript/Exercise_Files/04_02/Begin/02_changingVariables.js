// Learning Functional Programming with Javascript
// Chapter 04, Video 02, Exercise 02

let x = 1;

console.log(`x is equal to ${x}, to begin with.`);

// All at once.
setTimeout(() => {
    x = 2;
    console.log(`x is equal to ${x}`);
}, 3000)

setTimeout(() => {
    x = 3;
    console.log(`x is equal to ${x}`);
}, 3000)

setTimeout(() => {
    x = 4;
    console.log(`x is equal to ${x}`);
}, 3000)

//To call one after the other
setTimeout(() => {
    x = 2;
    console.log(`x is equal to ${x}`);
    setTimeout(() => {
        x = 3;
        console.log(`x is equal to ${x}`);
        setTimeout(() => {
            x = 4;
            console.log(`x is equal to ${x}`);
        }, 3000)
    }, 3000)
}, 3000)