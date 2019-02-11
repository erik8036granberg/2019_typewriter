"use strict";

// variables
let text;
let tempText;
let textLength;
let counter;
let soundOn = false;
let currentLetter;
let randomVal = Math.random();

// sounds
let typespace = document.querySelector("#typespace");
let typekey1 = document.querySelector("#typekey1");
let typekey2 = document.querySelector("#typekey2");

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

  // check length of text
  document.querySelector("#sound").addEventListener("click", clickSoundOn);

  // start loop
  typeLoop();
}

function typeLoop() {
  console.log("loop");

  // find text content from 0 to counter
  tempText = text.slice(0, counter);
  console.log(tempText);

  // display text in div
  document.querySelector("#typewriter").textContent = tempText;

  //   find current letter
  currentLetter = tempText.slice(-1);
  console.log(currentLetter);

  //   check for sound
  if (soundOn == true) {
    typeSounds();
  } else {
    typeCounter();
  }
}

function typeSounds() {

  // sound types
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
  typeCounter();
}

function typeCounter() {

  // counter ++
  counter++;
  console.log(counter);


  let timeOut = Random_numbers(numbers);
  console.log("delay is: " + timeOut);

  // if for text-length
  if (counter <= textLength) {
    // delay
    setTimeout(function () {
      typeLoop();
    }, timeOut);
  }
}

function Random_numbers(numbers) {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

let numbers = [200, 300, 400, 500, 600];

function clickSoundOn() {
  if (soundOn == false) {
    soundOn = true;
    document.querySelector("#sound").classList.remove("off");
    document.querySelector("#sound").classList.add("on");
    document.querySelector("#sound span").textContent = "Sound";
    document.querySelector("#sound .fa-volume-mute").classList.add("hide");
    document.querySelector("#sound .fa-volume-up").classList.remove("hide");
  } else {
    soundOn = false;
    document.querySelector("#sound").classList.add("off");
    document.querySelector("#sound").classList.remove("on");
    document.querySelector("#sound span").textContent = "Click for sound";
    document.querySelector("#sound .fa-volume-mute").classList.remove("hide");
    document.querySelector("#sound .fa-volume-up").classList.add("hide");
  }
}