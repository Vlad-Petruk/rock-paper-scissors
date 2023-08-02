let weapons = ['Rock', 'Paper', 'Scissors']

function getComputerChoice () {
    const randomChoice = weapons[Math.floor(Math.random()*weapons.length)]
    return console.log(round)
}

function playSingleRound (playerSelection, computerSelection) {
 switch (playerSelection, computerSelection) {
    case ('rock', 'rock'):
    case ('paper','paper'):
    case ('scissors','scissors'):
        return "Tie!";
        break;
    case ('rock','paper'):
    case ('paper','scissors'):
    case ('scissors','rock'):
        return "You lose!";
        break;
    case ('paper','rock'):
    case ('scissors','paper'):
    case ('rock','scissors'):
        return "You win!"
 }
}