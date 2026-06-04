const fs = require("fs");

fs.readFile("notes.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("Error reading file", err);
  } else {
    console.log("File content", data);
  }
});

console.log("This will be printed before the file is read");

fs.writeFile("output.txt", "This is some output text", (err) => {
  if (err) {
    console.log("Error writing file", err);
  } else {
    console.log("File written successfully");
  }
});

console.log("This will be printed before the file is written");

fs.appendFile("output.txt", "\nThis is some additional text", (err) => {
  if (err) {
    console.log("Error appending to file", err);
  } else {
    console.log("File appended successfully");
    fs.readFile("output.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log("Error reading file", err);
      } else {
        console.log("File content", data);
      }
    });
  }
});

  fs.unlink("output.txt", (err) => {
    if (err) {
      console.log("Error deleting file", err);
    } else {
      console.log("File deleted successfully");
    }
  });
