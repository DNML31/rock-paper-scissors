
function computerPlay(items) {
    return computerSelection = items[Math.floor(Math.random()*items.length)];
}
var items = ['rock', 'paper', 'scissors'];

function playRound(playerSelection = prompt('Rock? Paper? or Scissors?'), computerSelection) {
    console.log(playerSelection);

    computerSelection = computerPlay(items);
    console.log(computerSelection);    

    if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'rock') {
        console.log('Tiegame.');
    } else if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'paper') {
        console.log('Tiegame.');
    } else if (computerSelection === 'scissors' && playerSelection.toLowerCase() === 'scissors') {
        console.log('Tiegame.');
    } else if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'paper') {
        console.log('Paper beats rock.');
        console.log('Player wins.');
    } else if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'scissors') {
        console.log('Scissors beats paper.');
        console.log('Player wins.');
    } else if (computerSelection === 'scissors' && playerSelection.toLowerCase() === 'rock') {
        console.log('Rock beats scissors.');
        console.log('Player wins.');
    } else if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'scissors') {
        console.log('Rock beats scissors.');
        console.log('CPU wins.');
    } else if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'rock') {
        console.log('Paper beats rock.');
        console.log('CPU wins.');
    } else if (computerSelection === 'scissors' && playerSelection.toLowerCase() === 'paper') {
        console.log('Scissors beats paper.');
        console.log('CPU wins.');
    } else if (playerSelection.toLowerCase() !== 'rock' && playerSelection.toLowerCase() !== 'paper' 
        && playerSelection.toLowerCase() !== 'scissors') {
        alert('Please check spelling and re-enter.');
        playRound();
        return;    
     }
}
playRound();

function game() {
//need to utilize a loop to make playRound() execute 5 times and keep score
    // playRound();
    // playRound();
    // playRound();

}

//game();
