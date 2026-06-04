// Do not change the pre-written code.
// Make the necessary imports here.
import fs from "fs";
import path from "path";

export const writeBlog = (filePath, name) => {
  // Write your code here.
//   fs.writeFileSync(filePath, name);
  fs.appendFileSync(filePath, name);
};

export const publishBlog = (filePath) => {
  // Write your code here.
  return fs.readFileSync(filePath, { encoding: "utf-8" });
};
