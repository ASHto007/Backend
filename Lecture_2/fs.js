const fs = require("fs");

// read file
console.log("Reading file...");

// const data = fs.readFileSync("fs.txt", { encoding: "utf8" });
// console.log("File content: ", data);

try {
  // write file
  fs.writeFileSync("fs.txt", "Name: JohnDoe\ndept: Acc\nposition: Manager\n");

  // append file
  fs.appendFileSync("fs.txt", "salary: 5000\n");

  // delete file
  fs.unlinkSync("fs2.txt");
} catch (err) {
  console.error("Error: ", err);
}
console.log("File written successfully!");
