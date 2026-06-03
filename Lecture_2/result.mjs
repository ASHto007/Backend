// Common js module system
// const arithmeticModule = require("./arithmatic");

// const result = arithmeticModule.sum(5, 3);
// console.log(result);

// const divResult = arithmeticModule.div(10, 5);
// console.log(divResult);

// ES6 Module system
import * as arithmeticModule from "./arithmatic.mjs";
const result = arithmeticModule.sum(5, 3);
console.log(result);
const divResult = arithmeticModule.div(10, 5);
console.log(divResult);
