// game result alerts
function playerWin() { 

    playerScore++;

    function removeChildNodes() {
        while (result.firstChild) {
            result.removeChild(result.firstChild);
        }
    }
    removeChildNodes();

    const playerWin = document.querySelector('#result');
    const winText = document.createElement('div');
    winText.textContent = "PLAYER WINS";
    playerWin.appendChild(winText);

    if (playerScore == 5) {
        whoWon(player);
    }
}

function cpuWin() {

    cpuScore++;

    function removeChildNodes() {
        while (result.firstChild) {
            result.removeChild(result.firstChild);
        }
    }
    removeChildNodes();

    const cpuWin = document.querySelector('#result');
    const winText = document.createElement('div');
    winText.textContent = "CPU WINS";
    cpuWin.appendChild(winText);

    if (cpuScore == 5) {
        whoWon(cpu);
    }
}

function tieGame() {

    tieGames++;

    function removeChildNodes() {
        while (result.firstChild) {
            result.removeChild(result.firstChild);
        }
    }

    removeChildNodes();

    const tieGame = document.querySelector('#result');
    const tieText = document.createElement('div');
    tieText.textContent = "TIE";
    tieGame.appendChild(tieText);
}

let playerScore = 0;
let cpuScore = 0;
let tieGames = 0;

let win;
let lose;

let player = "PLAYER";
let cpu = "CPU";

// computer's choice
function computerPlay(items) {
    return computerSelection = items[Math.floor(Math.random()*items.length)];
}
var items = ['rock', 'paper', 'scissors'];

// plays one round
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay(items); 

    if (computerSelection === 'rock' &&
    playerSelection.toLowerCase() === 'rock') {
        tieGame();
        win = 'Rock';
        lose = 'Rock';
    } else if (computerSelection === 'paper' &&
    playerSelection.toLowerCase() === 'paper') {
        tieGame();
        win = 'Paper';
        lose = 'Paper';
    } else if (computerSelection === 'scissors' &&
    playerSelection.toLowerCase() === 'scissors') {
        tieGame();
        win = 'Scissors';
        lose = 'Scissors';
    } else if (computerSelection === 'rock' &&
    playerSelection.toLowerCase() === 'paper') {
        playerWin();
        win = 'Paper';
        lose = 'Rock';
    } else if (computerSelection === 'paper' &&
    playerSelection.toLowerCase() === 'scissors') {
        playerWin();
        win = 'Scissors';
        lose = 'Paper';
    } else if (computerSelection === 'scissors' &&
    playerSelection.toLowerCase() === 'rock') {
        playerWin();
        win = 'Rock';
        lose = 'Scissors';
    } else if (computerSelection === 'rock' &&
    playerSelection.toLowerCase() === 'scissors') {
        cpuWin();
        win = 'Rock';
        lose = 'Scissors';
    } else if (computerSelection === 'paper' &&
    playerSelection.toLowerCase() === 'rock') {
        cpuWin();
        win = 'Rock';
        lose = 'Paper';
    } else if (computerSelection === 'scissors' &&
    playerSelection.toLowerCase() === 'paper') {
        cpuWin();
        win = 'Scissors';
        lose = 'Paper';
    } else if (playerSelection.toLowerCase() !== 'rock' &&
    playerSelection.toLowerCase() !== 'paper' 
        && playerSelection.toLowerCase() !== 'scissors') {
        alert('Please check spelling and re-enter.');
        playRound();
        return;    
    }
    whatIsScore();
    thePlay(win, lose);
    whatIsPlay();
}



function whoWon (theGoat) {
    const winner = document.querySelector('#theverdict');
    const victor = document.createElement('div');
    victor.textContent = `${theGoat} is the RPS Master!`;
    winner.appendChild(victor);
}


// player button choices
const buttonPushRock = document.querySelector("#rock");
buttonPushRock.addEventListener('click', ()=> {
    playRound('rock', computerPlay(items));
    scoreCount();
});

const buttonPushPaper = document.querySelector('#paper');
buttonPushPaper.addEventListener('click', ()=> {
    playRound('paper',computerPlay(items));
    scoreCount();
});

const buttonPushScissors = document.querySelector('#scissors');
buttonPushScissors.addEventListener('click', ()=> {
    playRound('scissors',computerPlay(items));
    scoreCount();
});

// score count
function scoreCount() {
    var playerPoint = ("Player: " + playerScore);
    var cpuPoint = ("CPU: " + cpuScore);
    var tiePoint = ("Tiegames: " + tieGames);

    return `The score is ${playerPoint}, ${cpuPoint}. ${tiePoint}.`;
}

function whatIsScore () {

    function removeChildNodes() {
        while (scoreboard.firstChild) {
            scoreboard.removeChild(scoreboard.firstChild);
        }
    }
    removeChildNodes();

    const scoreKeep = document.querySelector('#scoreboard');
    const score = document.createElement('div');
    score.textContent = scoreCount();
    scoreKeep.appendChild(score);
}

// play by play
function thePlay(win, lose) {    
    if (win === lose) {
        return `${win} can't beat ${lose}.`
    } else {
        return `${win} beats ${lose}.`;
    }
}

function whatIsPlay () { 

    function removeChildNodes() {
        while (gamedetail.firstChild) {
            gamedetail.removeChild(gamedetail.firstChild);
        }
    }
    removeChildNodes();

    const gameDetail = document.querySelector('#gamedetail');
    const gamePlay = document.createElement('div');
    gamePlay.textContent = thePlay(win, lose);
    gameDetail.appendChild(gamePlay);
}


// function game() {
//     for (let i = 0; i < 5; i++) {
//         playRound();
//     }

//     if (playerScore > cpuScore) {
//         alert('You beat the CPU.');
//     } else if (cpuScore > playerScore) {
//         alert('The CPU beat you.');
//     } else if (playerScore == cpuScore) {
//         alert('It\'s a tie. Play another set.');
//     }
// }
// game();



