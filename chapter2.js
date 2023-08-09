// looping a triangle 
// Write a loop that makes seven calls to console.log to output the following triangle:


const loopingTriangle = () => {
    let number= "";
    for (let i = 0; i < 7; i++) {
        console.log(number += "#");
        
    }

}
loopingTriangle();

// fizzbuzz

const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0 && i % 3 === 0){
            console.log("FizzBuzz");
        } else if(i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz();

// chessboard

