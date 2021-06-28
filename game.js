const figures = {
    ROCK: 'rock',
    SCISSORS: 'scissors',
    PAPER: 'paper'
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

 const button = document.querySelector('button');
       button.addEventListener('click', game);