//computer's input for game. temporarily commented out until user side is ready.
function computerPlay() {
    return items[Math.floor(Math.random()*items.length)];
}

var items = ['rock', 'paper', 'scissors'];

console.log(computerPlay(items) + ' comp input');


function promptUser() {
    prompt ('Please check spelling: Rock? Paper? or Scissors?');
}

// user side needs to make sure only correct inputs are received (rock, paper, scissors)
// if correct input = move on to game. if incorrect = prompt again until correct

function playGame() {
    let playerSelection = prompt('Rock? Paper? or Scissors?');
    let playerInput = playerSelection.toLowerCase();   
    console.log(playerInput);

    if (playerInput === 'rock' || playerInput === 'paper' || playerInput === 'scissors') {
        console.log('correct input');
    } else {         
        


        // (playerInput !== 'rock' || playerInput !== 'paper' || playerInput !== 'scissors')
        // console.log('incorrect input');
        
    }
}

playGame();

