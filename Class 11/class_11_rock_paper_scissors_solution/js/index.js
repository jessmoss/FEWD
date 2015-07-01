// This function picks a move for the computer!
function computerMove(){
  var moves = ['rock', 'paper', 'scissors'];
  var choice = Math.round(Math.random() * 2);
  return moves[choice];
}

function clickRock(){
  doPlay('rock');
}

function clickPaper(){
  doPlay('paper');
}

function clickScissors(){
  doPlay('scissors');
}

function doPlay(pMove){
  var cMove = computerMove(),
      winText = 'You win!';

  if(pMove === cMove){
    showFinal('It\'s a tie!', pMove, cMove);
  }
  else if(pMove === 'rock' && cMove === 'scissors') {
    showFinal(winText, pMove, cMove);
  }
  else if(pMove === 'paper' && cMove === 'rock'){
    showFinal(winText, pMove, cMove);
  }
  else if(pMove === 'scissors' && cMove === 'paper'){
    showFinal(winText, pMove, cMove);
  }
  else {
    showFinal('You lose!', pMove, cMove);
  }
}

function showFinal(message, pMove, cMove){
  document.getElementById('status').innerHTML = '<strong>' + message + '</strong>' + '<br/> You picked: ' + pMove + '<br/> Computer picked: ' + cMove;
}

document.getElementById('rock').onclick = clickRock;
document.getElementById('paper').onclick = clickPaper;
document.getElementById('scissors').onclick = clickScissors;