//created cpuInput as a variable to hold the value of the computerPlay() function
function computerPlay(items) {
    // const items = ['rock', 'paper', 'scissors'];   
    // var cpuInput = [Math.floor(Math.random()*items.length)];
    // return cpuInput;
    return items[Math.floor(Math.random() * items.length)];
}
var items = ['rock', 'paper', 'scissors'];
console.log(computerPlay(items));

function playGame(playerSelection = prompt('Rock? Paper? or Scissors?'), computerSelection = computerPlay(items)) {
    console.log(playerSelection);

    //const playerInput = playerSelection.toLowerCase();

    if (computerSelection === 'rock' && playerSelection === 'rock') {
        console.log('tie');
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        console.log('CPU wins');
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        console.log('player wins');
    } else if (playerSelection !== 'rock' || playerSelection !== 'paper' || playerSelection !== 'scissors') {
        console.log('bad input');
    } else {
        console.log('what happened?');
    }
}

playGame();