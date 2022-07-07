//computer's input for game. temporarily commented out until user side is ready.
// function computerPlay() {
//     return items[Math.floor(Math.random()*items.length)];
// }

// var items = ['rock', 'paper', 'scissors'];

//user side needs to make sure only correct inputs are received (rock, paper, scissors)
//if correct input = move on to game. if incorrect = prompt again until correct
function playGame
(playerSelection = prompt('Rock? Paper? or Scissors?'), computerSelection) {
    let playerInput = playerSelection.toUpperCase();
    console.log(playerInput);
    if (playerInput == "ROCK", "PAPER", "SCISSORS") {
        let computerPlay = computerSelection;
        console.log(computerPlay);
    } else {
        prompt ("Please check spelling; Rock? Paper? or Scissors?")
    }
}

playGame();

