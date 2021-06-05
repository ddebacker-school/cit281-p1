/*
    CIT 281 Project 1
    Name: Devin
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//Create Array with random length
let randAlphabet = Array(getRandomInteger(5,25+1))

//fill Array with random number
for (let i = 0; i < randAlphabet.length; i++) {
    randAlphabet[i] = getRandomInteger(97,122+1);}

//Convert Random Number to Random UTF-16 Character and Stringify
let randString = String.fromCharCode(...randAlphabet)

console.log(randString);
//UTF-16 lowercase alphabet range 97-122