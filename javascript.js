// game result alerts
function playerWin() {
    alert('You win!');
    console.log('PLAYER WIN');  
    playerScore++;
}

function cpuWin() {
    alert('CPU win.');
    console.log('CPU WIN')
    cpuScore++;
}

function tieGame() {
    alert('Tiegame.');
    console.log('TIE')
}

//score count
function scoreCount() {
    console.log ("Player: " + playerScore);
    console.log ("CPU: " + cpuScore);
}

// computer's choice
function computerPlay(items) {
    return computerSelection = items[Math.floor(Math.random()*items.length)];
}
var items = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let cpuScore = 0;

function playRound(playerSelection = prompt ("rock? paper? scissors?"), computerSelection) {
    computerSelection = computerPlay(items); 

    // console.log(playerSelection);
    // console.log(computerSelection);

    if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'rock') {
        return tieGame();

    } else if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'paper') {
        tieGame();
    } else if (computerSelection === 'scissors' && playerSelection.toLowerCase() === 'scissors') {
        tieGame();
    } else if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'paper') {
        console.log('Paper beats rock. You win.');
        playerWin();
    } else if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'scissors') {
        console.log('Scissors beats paper. You win.');
        playerWin();
    } else if (computerSelection === 'scissors' && playerSelection.toLowerCase() === 'rock') {
        console.log('Rock beats scissors. You win.');
        playerWin();
    } else if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'scissors') {
        console.log('Rock beats scissors. CPU wins.');
        cpuWin();
    } else if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'rock') {
        console.log('Paper beats rock. CPU wins.');
        cpuWin();
    } else if (computerSelection === 'scissors' && playerSelection.toLowerCase() === 'paper') {
        console.log('Scissors beats paper. CPU wins');
        cpuWin();
    } else if (playerSelection.toLowerCase() !== 'rock' && playerSelection.toLowerCase() !== 'paper' 
        && playerSelection.toLowerCase() !== 'scissors') {
        alert('Please check spelling and re-enter.');
        playRound();
        return;    
    }

    scoreCount();
}

const buttonPushRock = document.querySelector("#rock");
buttonPushRock.addEventListener('click', ()=> {
    playRound('rock', computerPlay(items));
});

const buttonPushPaper = document.querySelector('#paper');
buttonPushPaper.addEventListener('click', ()=> {
    playRound('paper',computerPlay(items));
});

const buttonPushScissors = document.querySelector('#scissors');
buttonPushScissors.addEventListener('click', ()=> {
    playRound('scissors',computerPlay(items));
});


const scoreBoard = document.querySelector('#score');
let score = document.createElement('div');
scoreBoard.append(scoreCount());




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



