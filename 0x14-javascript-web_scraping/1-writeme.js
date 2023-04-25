#!/usr/bin/node
// a script that reads and prints the content of a file

const fs = require('fs');
const filePathName = process.argv[2];
const content = process.argv[3];
fs.writeFile(filePathName, content, err => {
  if (err) {
    console.error(err);
  }
});
