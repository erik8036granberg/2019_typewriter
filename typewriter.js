"use strict";

let text;
let counter;

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

    // start loop
    typeLoop();
}


function typeLoop() {
    console.log("loop");

    let tempText;
    let textLength = text.length;
    console.log(textLength);

    // find text content from 0 to counter
    tempText = text.slice(0, counter);
    console.log(tempText);

    // display text in div
    document.querySelector("#typewriter").textContent = tempText;

    // counter ++
    counter++;
    console.log(counter);

    // delay (400ms)

    // if text.length < counter .....keep looping
    if (textLength < counter) {
        typeLoop();
    } else {
        alert("done");
    }
}