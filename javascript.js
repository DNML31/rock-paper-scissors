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
    }


   // let computerSelection = computerPlay(items);

    // if (playerInput !== 'rock'||'paper'||'scissors') {
    //     promptUser();
    //     return;
    // } else {
    //     console.log('move on');
    // }


    // switch (playerInput) {
    //     case playerInput != 'rock':
    //     case playerInput != 'paper':
    //     case playerInput != 'scissors':
    //         promptUser();
    //         break;
    //     case playerInput = 'rock':
    //     case playerInput = 'paper':
    //     case playerInput = 'scissors':
    //         console.log('move on to game');
    //     default:
    //         promptUser();
    // }
}

playGame();

