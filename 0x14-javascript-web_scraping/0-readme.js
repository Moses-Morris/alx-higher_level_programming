#!/usr/bin/node
// A script that reads from a file.

const fs = require('fs');
const fileName = process.argv[2];
fs.readFile(fileName, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
