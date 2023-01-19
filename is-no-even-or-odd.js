// TODO: Write a program that takes in a number and prints "even" if the number is even and "odd" if the number is odd.
function checkEvenAndOdd(num) {
  if (num % 2 == 0) {
    console.log(`${num} is Even`);
  } else {
    console.log(`${num} is Odd`);
  }
}

checkEvenAndOdd(5);
