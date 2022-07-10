//created cpuInput as a variable to hold the value of the computerPlay() function
function computerPlay() {
    const items = ['rock', 'paper', 'scissors'];   
    var cpuInput = [Math.floor(Math.random()*items.length)];
    return cpuInput;
}

//bad inputs and ties are not accurately caught
//TypeError at the end of line 10 - "computerPlay() is not a function"
function playGame(playerSelection = prompt('Rock? Paper? or Scissors?'), computerPlay()) {
    console.log(playerSelection);
    console.log(computerPlay());
    // if (playerSelection.toLowerCase() === computerPlay()) {
    //     console.log('tie');
    // } else if ((playerSelection.toLowerCase() === 'rock')|| (playerSelection.toLowerCase() === 'paper')|| 
    // (playerSelection.toLowerCase() === 'scissors')) {
    //     console.log('good input - move on to game');
    // } else if ((playerSelection.toLowerCase() !== 'rock')|| (playerSelection.toLowerCase() !== 'paper')|| 
    // (playerSelection.toLowerCase() !== 'scissors')) {
    //     console.log('bad input = prompt user again');
    //     alert('Please re-enter your choice.');
    //     playGame();
    // }    
    const playerInput = playerSelection.toLowerCase();

    if (computerPlay() === 'rock' && playerInput === 'rock') {
        console.log('tie');
    } else if (computerPlay() === 'rock' && playerInput === 'scissors') {
        console.log('CPU wins');
    } else if (computerPlay() === 'rock' && playerInput === 'paper') {
        console.log('player wins');
    } else if (playerInput !== 'rock' || playerInput !== 'paper' || playerInput !== 'scissors') {
        console.log('bad input');
    } else {
        console.log('what happened?');
    }

}

playGame();