
function computerPlay(items) {
    return computerSelection = items[Math.floor(Math.random()*items.length)];
}
var items = ['rock', 'paper', 'scissors'];

//'bad input' are properly recognized > alert msg > restart function (only once)
//getting correct winner announcement

function playGame(playerSelection = prompt('Rock? Paper? or Scissors?'), computerSelection) {
    console.log(playerSelection);

    computerSelection = computerPlay(items);
    console.log(computerSelection);    

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
    } else if (playerSelection.toLowerCase() !== 'rock' && playerSelection.toLowerCase() !== 'paper' 
        && playerSelection.toLowerCase() !== 'scissors') {
        alert('Please check spelling.');
        playGame();
        return;    
     }
}

playGame();