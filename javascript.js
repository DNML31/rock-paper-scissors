//computer's input for game. temporarily commented out until user side is ready.
function computerPlay() {
    return items[Math.floor(Math.random()*items.length)];
}

var items = ['rock', 'paper', 'scissors'];

console.log(computerPlay(items) + ' <- comp input');

//bad inputs recognized, then re-prompt.
//ties are not accurately caught
function playGame(playerSelection = prompt('Rock? Paper? or Scissors?'), computerSelection = computerPlay(items)) {
    
    if (playerSelection.toLowerCase() === computerPlay()) {
        console.log('tie');
    } else if (playerSelection.toLowerCase() === 'rock'|| playerSelection.toLowerCase() === 'paper'|| playerSelection.toLowerCase() === 'scissors') {
        console.log('good input - move on to game');
    } else if (playerSelection.toLowerCase() !== 'rock'|| playerSelection.toLowerCase() !== 'paper'|| playerSelection.toLowerCase() !== 'scissors') {
        console.log('bad input = prompt user again');
        alert('Please re-enter your choice.');
        playGame();
    }    
}


playGame();