//computer's input for game. temporarily commented out until user side is ready.
function computerPlay() {
    return items[Math.floor(Math.random()*items.length)];
}

var items = ['rock', 'paper', 'scissors'];

console.log(computerPlay(items));


function promptUser() {
    prompt ('Please check spelling: Rock? Paper? or Scissors?');
}

// user side needs to make sure only correct inputs are received (rock, paper, scissors)
// if correct input = move on to game. if incorrect = prompt again until correct

function playGame
(playerSelection = prompt('Rock? Paper? or Scissors?'), computerSelection) {
    
    let playerInput = playerSelection.toLowerCase();   
    
    if (playerInput !== "rock" || playerInput !== "paper" || playerInput !== "scissors") {
        promptUser();
    } else if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
        console.log('user submitted correct input');
    } else {
        console.log('wrong input');
    } 
console.log(playerInput);
}


playGame();

