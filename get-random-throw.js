
export function getRandomThrow(rockPaperScissor) {
    if (rockPaperScissor === 1) {
        return 'rock';
    } else if (rockPaperScissor === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


export function didUserWin(player, computer) {
    if (player === computer) return 'draw';
    if (player === 'scissors' && computer === 'paper') return 'win';
    if (player === 'paper' && computer === 'rock') return 'win';
    if (player === 'rock' && computer === 'scissors') return 'win';
    if (player === 'rock' && computer === 'paper') return 'lose';
    if (player === 'paper' && computer === 'scissors') return 'lose';
    if (player === 'scissors' && computer === 'rock') return 'lose';
}

