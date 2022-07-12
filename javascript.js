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

function computerPlay(items) {
    return computerSelection = items[Math.floor(Math.random()*items.length)];
}
var items = ['rock', 'paper', 'scissors'];

//variables added to keep score
let playerScore = 0;
let cpuScore = 0;

function playRound(playerSelection = prompt('Rock? Paper? or Scissors?'), computerSelection) {
    console.log(playerSelection);

    computerSelection = computerPlay(items);
    console.log(computerSelection);    

    if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'rock') {
        // console.log('Tie.');
        // tieGame();
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
//this reports the score after every round
    console.log("Player: " + playerScore);
    console.log("CPU: " + cpuScore);

}
//playRound();

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }

    if (playerScore > cpuScore) {
        alert('You beat the CPU.');
    } else if (cpuScore > playerScore) {
        alert('The CPU beat you.');
    } else if (playerScore == cpuScore) {
        alert('It\'s a tie. Play another set.');
    }
}
game();
