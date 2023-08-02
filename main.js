let weapons = ['rock', 'paper', 'scissors']

function getComputerChoice () {
    const randomChoice = weapons[Math.floor(Math.random()*weapons.length)]
    return randomChoice;
}

// function playSingleRound (playerSelection, computerSelection) {
//  switch (playerSelection, computerSelection) {
//     case ('rock', 'rock'):
//     case ('paper','paper'):
//     case ('scissors','scissors'):
//         return "Tie!";
//         break;
//     case ('rock','paper'):
//     case ('paper','scissors'):
//     case ('scissors','rock'):
//         return "You lose!";
//         break;
//     case ('paper','rock'):
//     case ('scissors','paper'):
//     case ('rock','scissors'):
//         return "You win!"
//         break;
//     default:
//         return "Wrong weapons"
//  }
// }

function playSingleRound (playerSelection, computerSelection) {
     
    if (playerSelection === computerSelection) {
        return "Tie!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You win!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You win!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You win!";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
       return "You lose!";
    }
    else if (playerSelection === "scissiors" && computerSelection === "rock"){
       return "You lose!";
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
       return "You lose!";
    } else { return "wrong"}
}

// const playerSelection = (prompt('Choose your weapon'))
// const computerSelection = getComputerChoice();
// console.log(playSingleRound(playerSelection, computerSelection));
// console.log(computerSelection)
function game () {
    let result;
    let playerScore = 0;
    let computerScore = 0;
    for (i=1; i <= 5; i++) {
        const playerSelection = (prompt('Choose your weapon')).toLowerCase();
        const computerSelection = getComputerChoice();
        result = playSingleRound(playerSelection, computerSelection);
        if (result === "You win!") {
            playerScore++;
        } else if (result === "You lose!") {
            computerScore++;
        }
        console.log (result);
    }
    if (playerScore > computerScore) {
        return console.log("Player win")
    } else if (playerScore < computerScore) {
        return console.log("Computer win")
    } else return console.log("Tie! Try again")
}
game();