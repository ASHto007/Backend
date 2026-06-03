//  import readline module
const readline = require("readline");

//  connect terminal to readline interface

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// reading values

// rl.question("Enter first num: ", (num1) => {
//   rl.question("Enter Second Num: ", (num2) => {
//     // sum of two nums
//     let sum = Number(num1) + Number(num2);
//     console.log(`Sum of ${num1} and ${num2} is: ${sum}`);
//   });
// });

rl.question("Enter first num:", (num1) => {
  rl.question("Enter Second Num:", (num2) => {
    // maximum of two nums
    let max = Number(num1) > Number(num2) ? Number(num1) : Number(num2);
    console.log(`Maximum of ${num1} and ${num2} is: ${max}`);
  });
});
