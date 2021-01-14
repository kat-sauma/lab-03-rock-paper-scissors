import { getRandomThrow, didUserWin } from './get-random-throw.js';


const currentThrow = document.getElementById('current-throw');
const winsSpan = document.getElementById('wins');
const lostSpan = document.getElementById('losses');
const drawSpan = document.getElementById('draw');
const totalSpan = document.getElementById('total');

let wins = 0;
let losses = 0;
let draw = 0;
let total = 0;

export function playGame() {
    total++;
    const computerThrow = Math.ceil(Math.random() * 3);
    const computerDraw = getRandomThrow(computerThrow);
    totalSpan.textContent = `Total: ${total}`;
    const chosenRadioButton = document.querySelector('input[type="radio"]:checked');

    const userChoice = chosenRadioButton.value;

    const player = userChoice;
    const computer = computerDraw;

    if (didUserWin(player, computer) === 'win') {
        wins++;
        winsSpan.textContent = `Won: ${wins}`;
        currentThrow.textContent = `eeeeggssscellent ${userChoice} is correct.`;
    }

    if (didUserWin(userChoice, computer) === 'lose') {
        losses++;
        lostSpan.textContent = `Lost: ${losses}`;
        currentThrow.textContent = `weakling, ${userChoice} is no match for ${computerDraw}.`;
    }

    if (didUserWin(userChoice, computer) === 'draw') {
        draw++;
        drawSpan.textContent = `Draw: ${draw}`;
        currentThrow.textContent = `${userChoice} & ${computerDraw} that's a draw, cowboy.`;
    }
}
