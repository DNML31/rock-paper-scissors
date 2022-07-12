function playerWin() {
    alert('You win!');
}

function cpuWin() {
    alert('CPU win.');
}

function tieGame() {
    alert('Tiegame.');
}


function computerPlay(items) {
    return computerSelection = items[Math.floor(Math.random()*items.length)];
}
var items = ['rock', 'paper', 'scissors'];

function playRound(playerSelection = prompt('Rock? Paper? or Scissors?'), computerSelection) {
    console.log(playerSelection);

    computerSelection = computerPlay(items);
    console.log(computerSelection);    

    if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'rock') {
        console.log('Tie.');
        tieGame();
    } else if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'paper') {
        console.log('Tie.');
        tieGame();
    } else if (computerSelection === 'scissors' && playerSelection.toLowerCase() === 'scissors') {
        console.log('Tie.');
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
}
//playRound();

function game() {
//executes playRound() five times
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    // console.count(player);
    // console.count(cpu);
    // console.count(tie);
}
game();
