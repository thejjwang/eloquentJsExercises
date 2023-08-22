// minimum
const min = (...arguments) => {
  if (arguments.length === 0) {
    return undefined;
  }
    let minimum = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      if (arguments[i] < minimum) {
        minimum = arguments[i];
      } 
    } 
    return minimum;
};
console.log(min(11, 10));

// function min() {
//     if (arguments.length === 0) {
//       return undefined; 
//     }
//     let minValue = arguments[0]; 
//     for (let i = 1; i < arguments.length; i++) {
//       if (arguments[i] < minValue) {
//         minValue = arguments[i]; 
//       }
//     }
//     return minValue;
//   }
//   console.log(min(0, -10));

// recursion
const isEven = (number) => {
  return number % 2 === 0 ? true : false;
};
console.log(isEven(-1));

// bean counting
const countChar = (input, char) => {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === char) {
      count++;
    }
  }
  return count;
};

function countBs(input) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "B") {
      count++;
    }
  }
  return count;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

// function takes in base and exponent
// returns base to the power of exponent

function power(base, exponent) {
  let answer = 1;
  if (exponent === 0) {
    return 1;
  } else {
    for (let i = 0; i < exponent; i++) {
      answer *= base;
    }
  }
  return answer;
}
console.log(power(2, 6));
