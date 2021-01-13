// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';

const shootButton = document.getElementById('go-button');
const currentThrow = document.getElementById('current-throw');
const winsSpan = document.getElementById('wins');
const lostSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');

// initialize state
let wins = 0;
let total = 0;
// set event listeners to update state and DOM
shootButton.addEventListener('click', () => {
    total++
    const computerThrow = Math.ceil(Math.random() * 3);
    const computerDraw = getRandomThrow(computerThrow);
    // const chosenButton = document.querySelector('input[type="radio"] :checked');
    console.log('computerThrow');


});