import { playGame } from './handlers.js';

const shootButton = document.getElementById('go-button');
shootButton.addEventListener('click', playGame);
