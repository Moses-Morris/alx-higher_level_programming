#!/usr/bin/node
// A script that prints the number of movies where the character “Wedge Antille"

const request = require('request');

const apiUrl = process.argv[2];
const character = '18/';

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const films = JSON.parse(body).results;
    let count = 0;
    films.forEach(function (film) {
      if (film.characters.includes(`https://swapi-api.alx-tools.com/api/
	people/${character}`)) {
        count++;
      }
    });
    console.log(count);
  }
});
