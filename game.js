//первый играет компьютер, рандомный выбор фигуры
function computerPlay() {
    const figures = ['Rock', 'Paper', 'Scissors'];
    computerChoise = Math.floor(Math.random()*figures.length);
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

    //преобразовать return предыдущей функции в computerSelection
    let computerSelection = computerPlay();

    function playRound(playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
            return 'It\'s a tie!'
        } else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && +
         computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
            return 'You won!'
        } else {
            return 'You lose! :('
        }
      }

    let prePlayerSelection = prompt('What will you choose?', 'Rock? Paper? Scissors?');
    let playerSelection = prePlayerSelection.toLowerCase();
    console.log(playRound(playerSelection, computerSelection));

    
//функция game() до 5 реузльтативных выборов (попытаться сделать цикл)

function game() {

}