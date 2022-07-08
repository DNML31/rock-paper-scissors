//computer's input for game. temporarily commented out until user side is ready.
function computerPlay() {
    return items[Math.floor(Math.random()*items.length)];
}

var items = ['rock', 'paper', 'scissors'];

console.log(computerPlay(items) + ' comp input');


// user side needs to make sure only correct inputs are received (rock, paper, scissors)
// if correct input = move on to game. if incorrect = prompt again until correct

function playGame(playerSelection = prompt('Rock? Paper? or Scissors?'), computerSelection = computerPlay(items))
    { 
    console.log(playerSelection);

    if (playerSelection.toLowerCase() === 'rock'|| playerSelection.toLowerCase() === 'paper'|| playerSelection.toLowerCase() === 'scissors') {
        console.log('good input - move on to game');
    } else if (playerSelection !== 'rock'||'paper'||'scissors') {
        console.log('bad input = prompt user again');
        alert('Please re-enter your choice.');
        playGame();
    }
}

playGame();

