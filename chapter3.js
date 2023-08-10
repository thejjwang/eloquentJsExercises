// minimum 
const findMinimum = (input) => {
    const min = Math.min(input);
    return min;
}
console.log(findMinimum(0, 10))

// recusion
const isEven = (number) => {
    return (number % 2 === 0 ? true : false);
}
console.log(isEven(-1))

// bean counting 
const countChar = (input, char) => {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        if ((input[i]) === char) {
            count++;
        }
    }
    return count;
}

function countBs(input) {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] === 'B') {
        count++;
      }
    }
    return count;

}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4