// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';

const shootButton = document.getElementById('go-button');
const currentThrow = document.getElementById('current-throw');
const winsSpan = document.getElementById('wins');
const lostSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');

// initialize state
let wins = 0;
let losses = 0;
let total = 0;

// set event listeners to update state and DOM
shootButton.addEventListener('click', () => {
    total++;
    const computerThrow = Math.ceil(Math.random() * 3);
    const computerDraw = getRandomThrow(computerThrow);
    totalSpan.textContent = `Total: ${total}`;
    const chosenRadioButton = document.querySelector('input[type="radio"]:checked');

    const userChoice = chosenRadioButton.value;


    if (userChoice === computerDraw) {
        wins++;
        winsSpan.textContent = `Won: ${wins}`;
        currentThrow.textContent = `eeeeggssscellent ${userChoice} is correct.`;
    } else {
        losses++;
        lostSpan.textContent = `Lost: ${losses}`;
        currentThrow.textContent = `weakling, ${userChoice} is no match for ${computerDraw}.`;
    }
});