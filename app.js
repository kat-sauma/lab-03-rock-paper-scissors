import { playGame, replayGame } from './handlers.js';

const shootButton = document.getElementById('go-button');
shootButton.addEventListener('click', playGame);

const replayButton = document.getElementById('replay-button');
replayButton.addEventListener('click', replayGame);