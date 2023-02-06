// ======================================================
// BASIC QUESTION
// ======================================================
//[Qus-1] Write a function that takes an array of numbers as input and logs each number to the console using forEach().

function numberArr(num) {
  num.forEach((numArr) => {
    // console.log(numArr);
  });
}

numberArr([100, 10, 20, 50, 30]);

// ====================================================================
// [Qus-2] Write a function that takes an array of names and returns an array of greetings using forEach() and a callback function.

function nameArr(name) {
  name.forEach((nameLoop) => {
    // console.log(`Welcome ${nameLoop} to our family group`);
  });
}

nameArr(["kunal", "karan", "kusum", "jaya", "suraj", "ankit"]);

// ==================================================================================
