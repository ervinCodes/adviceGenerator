'use strict';

let current_rotation = 0;

document.querySelector('.rotate').addEventListener('click', function () {
  current_rotation += 90;
  document.querySelector(
    '.rotate'
  ).getElementsByClassName.transform = `'rotate(${current_rotation} deg)'`;
});

document.querySelector('button').addEventListener('click', getFetch);

function generateRandomID() {
  return Math.floor(Math.random() * 244) + 1;
}

function getFetch() {
  const url = `https://api.adviceslip.com/advice/${generateRandomID()}`;

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data);
      document.querySelector('h3').innerText = `advice #${data.slip.id}`;
      document.querySelector('p').innerText = `"${data.slip.advice}"`;
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}
