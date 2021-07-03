<<<<<<< HEAD
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

=======
>>>>>>> 0cbff2a6eaae1911f3c84ebb86a45283e02fe424
const figures = {
    ROCK: 'rock',
    SCISSORS: 'scissors',
    PAPER: 'paper'
}
<<<<<<< HEAD

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
      removeTie();

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
        console.log('Tie');
        return;
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
        return 'rock';
    }
    else if (computerChoise == '1') {
        return 'paper';
    }
    else {
        return 'scissors';
    }
};

=======

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



    function game() {

    let computerScore = 0;
    let playerScore = 0;

    for (i = 0; computerScore < 3 && playerScore <3; i++) {

        function computerPlay() {
            const randomFigures = [1, 2, 3]
            computerChoise = Math.floor(Math.random()*randomFigures.length);
            if ( computerChoise == '0') {
                return 'rock';
            }
            else if (computerChoise == '1') {
                return 'paper';
            }
            else {
                return 'scissors';
            }
        
        }

        let computerSelection = computerPlay();

         let playerSelection = prompt('What will you choose?', 'Rock? Paper? Scissors?').toLowerCase();
            console.log(playRound(playerSelection, computerSelection));

        function playRound(playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
            return 'It\'s a tie!'
        } else if (beatFigure(playerSelection) == computerSelection) {
            playerScore = ++playerScore;
            console.log(playerScore);
            return 'You won!'
        } else {
            computerScore = ++computerScore;
            console.log(computerScore);
            return 'You lose! :('
        }
      }
    }

        
      
};
>>>>>>> 0cbff2a6eaae1911f3c84ebb86a45283e02fe424
