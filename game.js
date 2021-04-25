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
    let prePlayerSelection = prompt('What will you choose?', 'Rock? Paper? Scissors?');
    let playerSelection = prePlayerSelection.toLowerCase();
    console.log(playRound(playerSelection, computerSelection));

    function playRound(playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
            return 'It\'s a tie!'
        } else if (beatFigure(playerSelection) == computerSelection) {
            return 'You won!'
        } else {
            return 'You lose! :('
        }
      }

