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

function thePlay(win, lose) {
    const phrase = `${win} beats ${lose}.`;
    const gameDetail = document.querySelector('#gamedetail');
    const gamePlay = document.createElement('div');
    gamePlay.textContent = phrase;
    gameDetail.appendChild(gamePlay);
}



//score count
function scoreCount() {
    var player = ("Player: " + playerScore);
    var cpu = ("CPU: " + cpuScore);
    var tie = ("Tiegames: " + tieGames);

    return `The score is ${player}, ${cpu}. ${tie}.`;
}

// computer's choice
function computerPlay(items) {
    return computerSelection = items[Math.floor(Math.random()*items.length)];
}
var items = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let cpuScore = 0;
let tieGames = 0;

function playRound(playerSelection = prompt ("rock? paper? scissors?"), computerSelection) {
    computerSelection = computerPlay(items); 

    let Rock;
    let Paper;
    let Scissors;

    if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'rock') {
        return tieGame();
    } else if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'paper') {
        tieGame();
    } else if (computerSelection === 'scissors' && playerSelection.toLowerCase() === 'scissors') {
        tieGame();
    } else if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'paper') {
        playerWin();
        thePlay(Paper, Rock);
    } else if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'scissors') {
        playerWin();
        thePlay(Scissors, Paper);
    } else if (computerSelection === 'scissors' && playerSelection.toLowerCase() === 'rock') {
        playerWin();
        thePlay(Rock, Scissors);
    } else if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'scissors') {
        cpuWin();
        thePlay(Rock, Scissors);
    } else if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'rock') {
        cpuWin();
        thePlay(Paper, Rock);
    } else if (computerSelection === 'scissors' && playerSelection.toLowerCase() === 'paper') {
        cpuWin();
        thePlay(Scissors, Paper);
    } else if (playerSelection.toLowerCase() !== 'rock' && playerSelection.toLowerCase() !== 'paper' 
        && playerSelection.toLowerCase() !== 'scissors') {
        alert('Please check spelling and re-enter.');
        playRound();
        return;    
    }
    whatIsScore();
}

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



