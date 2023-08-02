let weapons = ['rock', 'paper', 'scissors']

function getComputerChoice () {
    const randomChoice = weapons[Math.floor(Math.random()*weapons.length)]
    return console.log(randomChoice)
}

// function playSingleRound (playerSelection, computerSelection) {
//  switch (playerSelection, computerSelection) {
//     case ('rock','paper'):
//     case ('paper','scissors'):
//     case ('scissors','rock'):
//         return "You lose!";
//         break;
//     case ('rock', 'rock'):
//     case ('paper','paper'):
//     case ('scissors','scissors'):
//         return "Tie!";
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
    if (playerSelection === "rock"&& computerSelection === "rock") {
        return "Tie!";
    } 
    else if (playerSelection === "paper" && computerSelection === "paper"){
        return "Tie!";
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors"){
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

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playSingleRound(playerSelection, computerSelection));
// console.log(computerSelection)