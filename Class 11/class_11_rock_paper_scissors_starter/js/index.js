// This function picks a move for the computer!
function computerMove(){
  var moves = ['rock', 'paper', 'scissors'];
  var choice = Math.round(Math.random() * 2);
  return moves[choice];
}

/* each function does something similar: get move from player adn decide if comp has won. so create a 4th function that makes a round of RPS happen*/

function playRound(playerMove){
	console.log(playerMove)

	var cMove = computerMove()
	/*assigns value of cMove to whatever computerMove is this time*/
}


function handleRockClick() {
	playRound('rock');

	var playerMove = rock;
	var cMove = computerMove()

	if (cMove === playerMove)
		document.getElementById.status.innerHTML = "Tie!"
	else if (cMove = scissors)
		document.getElementById.status.innerHTML = "You WIN!"
	else (cMove = paper)
		document.getElementById.status.innerHTML = "You suck at this game.";
}

function handlePaperClick() {
	playRound('paper');

	var playerMove = paper;
	var cMove = computerMove()

if (cMove === playerMove)
		document.getElementById.status.innerHTML = Tie!
	else if (cMove = rock)
		document.getElementById.status.innerHTML = You WIN!
	else (cMove = scissors)
		document.getElementById.status.innerHTML = You suck at this game.;

}

function handleScissorsClick() {
	playRound('scissors');

	var playerMove = scissors;
	var cMove = computerMove()

if (cMove === playerMove)
		document.getElementById.status.innerHTML = "Tie!"
	else if (cMove = paper)
		document.getElementById.status.innerHTML = "You WIN!"
	else (cMove = rock)
		document.getElementById.status.innerHTML = "You suck at this game.";

}


/*There are 3 options, so we're going to add click listeners to each */

document.getElementById('rock').onclick = handleRockClick;
document.getElementById('paper').onclick = handlePaperClick;
document.getElementById('scissors').onclick = handleScissorsClick;









/*
Write javascript code to:
1 - Handle the player clicking on an option ... need click handlers for each of the 3 buttons
2 - Get a new move from the computer each time (call the above function) .... call "computer move"
3 - Figure out who the winner is ... between what computer move returns and what user clicked on
4 - Display who won and what the moves were

REMINDERS:
- Try to keep your code DRY
- Make use of functions that can take arguments
*/