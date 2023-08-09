// Build a simple guessing game that picks a random number and 
// has the user guess until they get it right

const input = document.getElementById('input');
const btn = document.getElementById('btn');
const number = Math.ceil(Math.random() * 10);


const checkNumber = () => { 
    console.log(number);
    if (parseInt(input.value) === number) {
        alert('you are correct');
    } else {
        console.log('You are wrong');
    }
}
btn.addEventListener('click', checkNumber);



