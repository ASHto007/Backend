const path = require("path");

const filePath = path.join("Backend", "Lecture_2", "output.txt");
const absolutePath = path.resolve(filePath);
console.log("File path:", filePath);
console.log("Absolute path:", absolutePath);
console.log("extension:", path.extname(filePath));

