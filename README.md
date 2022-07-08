# Frontend Mentor - Advice Generator API App

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Table of contents](#table-of-contents)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice on load page and by clicking the dice icon

### Screenshot

![](./design/active-states.jpg)

### Links

- Code Source: (https://github.com/ervn12/adviceGenerator)
- Live Site URL: (https://advice-generatorapi.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- Javascript

### What I learned

This API was a little tricky to use because I needed to fetch data on a click event and on page load.  To fetch data on click I found that there are max 224 different advices.  On page load I had to create a seperate function.  Additionally, adding and removing a class to a rotating image on click gave me some trouble.  To solve the issues I did the following: 



```js
function generateRandomID() {
  return Math.floor(Math.random() * 224) + 1;
}

function getFetch() {
  const url = `https://api.adviceslip.com/advice/${generateRandomID()}`;
  }

```

To fetch data on load I did the following: 
```js
window.onload = function () {
  const url = `https://api.adviceslip.com/advice`;
  }
```

I wanted the button image to rotate 360 degrees on every click so I did the following: 
```js
let btn = document.querySelector('.image');

document.querySelector('.image').addEventListener('click', rotate);

function rotate() {
  btn.classList.add('onclick');
}
  }
  
function getFetch() {
  const url = `https://api.adviceslip.com/advice/${generateRandomID()}`;

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data);
      document.querySelector('h3').innerText = `advice #${data.slip.id}`;
      document.querySelector('p').innerText = `"${data.slip.advice}"`;
      btn.classList.remove('onclick'); // class removed after fetch occurs
    })
```

```css
.onclick {
  cursor: pointer;
  background-color: #52ffa8;
  box-shadow: hsl(150deg 100% 66%) 0px 0px 36px;
  transform: rotate(360deg);
  transition: transform 0.5s ease-in-out;
}
```

### Continued development

As I do more projects, I want to be able to type less code to avoid repeating code.  In this project I could have created a single function that fetched data on page load and on a click event, however I was not able to solve this issue.

## Author

- Website - [Ervin Natareno](https://www.dev-ervin.netlify.app)
- Frontend Mentor - [@ervn12](https://www.frontendmentor.io/profile/ervn12)
- Twitter - [@ervn](https://www.twitter.com/ervn_)


