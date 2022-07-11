// function computerPlay(items) {
//     return items[Math.floor(Math.random() * items.length)];
// }

// var items = ['rock', 'paper', 'scissors'];
// let computerSelection = computerPlay(items);


function computerPlay(items) {
    let computerSelection = items[Math.floor(Math.random()*items.length)];
}
var items = ['rock', 'paper', 'scissors'];


//keeps getting 'bad input'
function playGame(playerSelection = prompt('Rock? Paper? or Scissors?'), computerSelection) {
    console.log(playerSelection);

    if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'rock') {
        console.log('tie');
    } else if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'paper') {
        console.log('tie');
    } else if (computerSelection === 'scissors' && playerSelection.toLowerCase() === 'scissors') {
        console.log('tie');
    } else if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'paper') {
        console.log('player wins');
    } else if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'scissors') {
        console.log('player wins');
    } else if (computerSelection === 'scissors' && playerSelection.toLowerCase() === 'rock') {
        console.log('player wins');
    } else if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'scissors') {
        console.log('CPU wins');
    } else if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'rock') {
        console.log('CPU wins');
    } else if (computerSelection === 'scissors' && playerSelection.toLowerCase() === 'paper') {
        console.log('CPU wins');
    } else if (playerSelection.toLowerCase() != 'rock' || playerSelection.toLowerCase() != 'paper' || playerSelection.toLowerCase() != 'scissors') {
        console.log('bad input');
    } else {
        console.log('what happened?');
    }
}

playGame();