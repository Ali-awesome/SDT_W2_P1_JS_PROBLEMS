const prompt = require("prompt-sync")();
const number = prompt("What number do you have?: ");

if(number % 2 == 0){
    console.log(`Your number ${number} is Even!`)
}
else{
    console.log(`Your number ${number} is Odd!`)
}