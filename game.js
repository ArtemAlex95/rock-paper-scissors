let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

const figures = {
    ROCK: '✊',
    SCISSORS: '✌',
    PAPER: '✋'
}

function beatFigure (figure) {
    switch (figure) {
        case figures.ROCK:
            return figures.SCISSORS;
            break;
        case figures.PAPER:
            return figures.ROCK;
            break;
        case figures.SCISSORS:
            return figures.PAPER;
            break;
    }
}

const buttons = document.querySelectorAll('button');
const tieScore = document.getElementById('tie-score');
      tieScore.style.visibility = 'hidden';

buttons.forEach (button => button.addEventListener('click', game));

function gameOver() {
    return playerScore === 5 || computerScore === 5;
  }

  function game(e) {
      if (gameOver()) { 
        (playerScore === 5) ? alert('You win! Press F5 to play again') : alert('You lost :( Press F5 to play again');
        button.disabled = 'disabled';
    }
      playerSelection = e.target.id;
      computerSelection = computerPlay();
      playRound(playerSelection, computerSelection);
      updateScore();
      updateChoices();
  }

  function updateScore () {
    const scoreForPlayer = document.querySelector('.player-score');
    const scoreForComputer = document.querySelector('.computer-score');

    scoreForPlayer.textContent = `${playerScore}`;
    scoreForComputer.textContent = `${computerScore}`;
  };

  function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        tieScore.style.visibility = 'visible';
    } else if (beatFigure(playerSelection) == computerSelection) {
        tieScore.style.visibility = 'hidden';
        playerScore = ++playerScore;
    } else {
        tieScore.style.visibility = 'hidden';
        computerScore = ++computerScore;
    }
  }

  function computerPlay() {
    const randomFigures = [1, 2, 3]
    computerChoise = Math.floor(Math.random()*randomFigures.length);
    if ( computerChoise == '0') {
        return '✊';
    }
    else if (computerChoise == '1') {
        return '✋';
    }
    else {
        return '✌';
    }
};

function updateChoices() {
    let containerForPlayer = document.getElementById('player-selection');
    let containerForComputer = document.getElementById('computer-selection');

    let forPlayer = document.createElement('div');
    let forComputer = document.createElement('div');

    forPlayer.className = 'player-selection';
    forComputer.className = 'computer-selection';

    forPlayer.textContent = `${playerSelection}`;
    forComputer.textContent = `${computerSelection}`;

    containerForPlayer.after(forPlayer);
    containerForComputer.after(forComputer);

};