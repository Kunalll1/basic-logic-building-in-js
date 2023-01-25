// 1. Write a while loop that iterates from 0 to 10 and logs the numbers to the console, but only if they are even. [loop]

function whileLoop(evenNum) {
  // Initializing a variable 'i' to 0
  let i = 0;
  // Starting a while loop that will run as long as 'i' is less than the length of the evenNum array
  while (i < evenNum.length) {
    // Inside the loop, checking if the current number (evenNum[i]) is even && Always keep (comingValue[i]) to get the value from Initializing variable
    if (evenNum[i] % 2 === 0) {
      // If it is even, printing "it is even number"
      console.log(`${evenNum[i]} IS EVEN NUMBER`);
    }
    // incrementing the value of i by 1 && keep (i++) on the while-loop it self don't put it inside the condution on some thing else
    i++;
  }
}

// calling the function and passing an array of numbers

// whileLoop([1, 2, 4, 5, 7, 8, 9, 10, 12, 15, 22]); // OUTPUT:::: [2,4,8,10,12,22]

// ===========================================================================================================
