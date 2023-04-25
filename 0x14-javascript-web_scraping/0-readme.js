#!/usr/bin/node
//Read file content
let file = process.argv[2];
let fs = require('fs');
fs.readFile(file, 'utf8', function (err, data = err) {
  console.log(data);
});
