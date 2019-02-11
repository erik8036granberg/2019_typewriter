"use strict";

let text;
let counter;
let textLength;

window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("init");

  // save text in variable
  text = document.querySelector("#typewriter").textContent;
  console.log(text);

  // Clear text from the div
  document.querySelector("#typewriter").textContent = "";

  // reset counter
  counter = 0;

  // check length of text
  textLength = text.length;

  // start loop
  typeLoop();
}

function typeLoop() {
  console.log("loop");

  let tempText;
  let currentLetter;
  let typespace = document.getElementById("typespace");
  let typekey1 = document.getElementById("typekey1");
  let randomTime;

  // find text content from 0 to counter
  tempText = text.slice(0, counter);
  console.log(tempText);

  // display text in div
  document.querySelector("#typewriter").textContent = tempText;

  //   find current letter
  currentLetter = tempText.slice(-1);
  console.log(currentLetter);

  // sounds
  if (currentLetter == " ") {
    typespace.play();
  } else {
    typekey1.play();
  }

  // counter ++
  counter++;
  console.log(counter);

  // if text.length < counter .....keep looping
  if (counter <= textLength) {
    // delay (400ms)
    setTimeout(function() {
      typeLoop();
    }, 400);
  }
}
