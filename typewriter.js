"use strict";

let text;
let counter;
let textLength;
let soundCheck = false;

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
  let typespace = document.querySelector("#typespace");
  let typekey1 = document.querySelector("#typekey1");
  let typekey2 = document.querySelector("#typekey2");
  let randomVal = Math.random();

  // find text content from 0 to counter
  tempText = text.slice(0, counter);
  console.log(tempText);

  // display text in div
  document.querySelector("#typewriter").textContent = tempText;

  //   find current letter
  currentLetter = tempText.slice(-1);
  console.log(currentLetter);

  //   check for sound
  if (soundCheck == false) {
    typeCounter();
  } else {
    typeSounds();
  }

  function typeSounds() {
    // sounds
    if (currentLetter == " ") {
      typespace.play();
      console.log("typespace");
    } else {
      // pick random sound
      if (randomVal > 0.5) {
        typekey1.play();
        console.log("typekey1");
      } else {
        typekey2.play();
        console.log("typekey2");
      }
    }
  }

  function typeCounter() {
    // counter ++
    counter++;
    console.log(counter);

    // if text.length < counter .....keep looping
    if (counter <= textLength) {
      // delay (400ms)
      setTimeout(function () {
        typeLoop();
      }, 400);
    }
  }
}