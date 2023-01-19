// TODO: Write a program that takes in a number and prints "even" if the number is even and "odd" if the number is odd.
function checkEvenAndOdd(num) {
  if (num % 2 == 0) {
    console.log(`${num} is Even`);
  } else {
    console.log(`${num} is Odd`);
  }
}

checkEvenAndOdd(4);

//TODO: Adding little bit complexity to this program :::: Now what i want we have a array on number and we want to check if its EVEN or ODD

function arrOfNumber(numb) {
  for (let listOfNum in numb) {
    if (listOfNum % 2 == 0) {
      console.log(`${listOfNum} is Even`);
    } else {
      console.log(`${listOfNum} is Odd`);
    }
  }
}

arrOfNumber([2, 3, 4, 5, 5, 7, 8, 9, 19]);
