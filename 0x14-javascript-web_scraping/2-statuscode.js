#!/usr/bin/node
// A script that display the status code of a GET request.

const request = require('request');
const Request_url = process.argv[2];
request(Request_url, (err, res, body) => {
  if (err) console.error(err);
  console.log('code:', res.statusCode);
});

