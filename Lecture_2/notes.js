const fs = require("fs");

try {
  //  Create a file named "notes.txt" and write the phrase "The world has enough coders"
  //  to it using the synchronous write method of fs module.
  fs.writeFileSync("notes.txt", "The world has enough coders ");

  // Retrive the contents of notes.txt file utilising the fs module's
  // synchronous read method to display them on the console.
  const data = fs.readFileSync("notes.txt", { encoding: "utf8" });
  console.log("File content: ", data);

  // Expand the existing content of "notes.txt" by appending the text "BE A CODING NINJA!"
  // using the fs module's synchronous append method.
  fs.appendFileSync("notes.txt", "BE A CODING NINJA!");

  // Retrieve the updated contents of the "notes.txt" file and display them on the console.
  const updatedData = fs.readFileSync("notes.txt", { encoding: "utf8" });
  console.log("Updated File content: ", updatedData);
} catch (err) {
  console.error("Error: ", err);
}
