// Divisible by 3 ==> Fizz
// Divisible by 5 ==> Buzz
// Divisible by 15 ==> FizzBuzz
// Not Divisible by 3 or 5 ==> input
// Not number ==> Input not a number

const output = fizzbuzz(15);
console.log(output);

function fizzbuzz(input){
    if (typeof input !== 'number'){
        return "Input Not Number";
    }
    if ((input % 3 === 0) && (input % 5 === 0)){
        return "FuzzBuzz";
    } 
    if (input % 3 === 0) {
        return "Fizz";
    }   
    if (input % 5 === 0) {
        return "Buzz";
    }
    else {
        return input;  
    }
}


