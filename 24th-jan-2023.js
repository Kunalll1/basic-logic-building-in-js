// TODO: Create an array of your favorite foods and then use a loop to print each item to the console. [Arrays and Loops]

function foodFun(name) {
  for (let foodLoopName of name) {
    // console.log(`This ${foodLoopName} is most famous in India`);
  }
}

foodFun([
  "Samosas",
  "Biryani",
  "Tikka-Masala",
  "Dosa",
  "Naan",
  "Palak-Paneer",
  "Chana-Masala",
  "Butter-Chicken",
  "Vada-Pav",
  "Idli",
]);

// =================================================================================================
// TODO: Write a function that takes an array of numbers and returns the sum of all the numbers. [Function || Arrays || Loops]
function loopfun(storeArr) {
  let ins = 0;
  for (let i = 0; i < storeArr.length; i++) {
    console.log((ins += storeArr[i]));
  }
}
// loopfun([2, 4, 6, 7, 9]);

// ========================================================================================================
// 3.Write a program that takes in a number and prints "positive" if the number is positive, "negative" if the number is negative, and "zero" if the number is zero. [condutation]

function check(num) {
  if (num >= 1) {
    console.log("It's a positive number");
  } else if (num === 0) {
    console.log("It's a Zero");
  } else {
    console.log("It's a Negative number");
  }
}
// check(10); OUTPUT:::: [POSITIVE ]
// check(0); OUTPUT:::: [ZERO]
// check(-10);OUTPUT:::: [NEGATIVE]
