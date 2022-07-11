// function computerPlay(items) {
//     return items[Math.floor(Math.random() * items.length)];
// }

// var items = ['rock', 'paper', 'scissors'];
// let computerSelection = computerPlay(items);


function computerPlay(items) {
    return computerSelection = items[Math.floor(Math.random()*items.length)];
}
var items = ['rock', 'paper', 'scissors'];

//keeps getting 'bad input'
function playGame(playerSelection = prompt('Rock? Paper? or Scissors?'), computerSelection) {
    console.log(playerSelection);
    console.log(computerPlay(items));

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
//switching the || to && recognizes a 'bad input'. but doing this will always trigger 'what happened'
    } else if (playerSelection.toLowerCase() !== 'rock' && playerSelection.toLowerCase() !== 'paper' 
        && playerSelection.toLowerCase() !== 'scissors') {
        console.log('bad input');
    } else {
        // prompt('Rock? Paper? or Scissors?');
    }
}

playGame();