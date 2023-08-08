let weapons = ['rock', 'paper', 'scissors']

function getComputerChoice () {
    const randomChoice = weapons[Math.floor(Math.random()*weapons.length)]
    return randomChoice;
}


function playSingleRound (playerSelection, computerSelection) {
     
    if (playerSelection === computerSelection) {
        return "Tie!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! Rock beats Scissors";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You win! Scissors beat Paper";
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You win! Paper beats Rock";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
       return "You lose! Scissors beat Paper";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
       return "You lose! Rock beats Scissors";
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
       return "You lose! Paper beats Rock";
    } else { return "wrong"}
}
let container = document.querySelector('main-container');

let buttonBox = document.querySelector('.choice-buttons');
let btnRock = document.querySelector('.btn-rock');
let btnPaper = document.querySelector('.btn-paper');
let btnScissors = document.querySelector('.btn-scissors');

let buttons = document.querySelectorAll('button');

let resultbox = document.querySelector('.results');
let p = document.createElement('p');
p.textContent = "Round result: ";
resultbox.appendChild(p);

let playerScoreCount = document.querySelector('.player-score');
let computerScoreCount = document.querySelector('.computer-score');

let clickEvent = () => {
    p.textContent = "Round result: "
    let playerScore = 0;
    let computerScore = 0;
    // const playerSelection = 'rock'
    const computerSelection = getComputerChoice();
    let result = playSingleRound(playerSelection, computerSelection);
    if (result === "You win! Scissors beat Paper"||result === "You win! Rock beats Scissors"||result === "You win! Paper beats Rock") {
        playerScore++;
        } else if (result === "You lose! Scissors beat Paper"||result === "You lose! Rock beats Scissors"||result === "You lose! Paper beats Rock") {
         computerScore++;
         }
        p.textContent += result;
    playerScoreCount.textContent += playerScore;
    computerScoreCount.textContent += computerScore
}


btnRock.addEventListener('click', ()=>{
     playerSelection = 'rock';
    clickEvent()
    
})

btnPaper.addEventListener('click', ()=>{
     playerSelection = 'paper';
    clickEvent()
})

btnScissors.addEventListener('click', ()=>{
     playerSelection = 'scissors';
    clickEvent()
})
// function game () {
//     let result;
//     let playerScore = 0;
//     let computerScore = 0;
//     for (i=1; i <= 5; i++) {
//         const playerSelection = (prompt('Choose your weapon')).toLowerCase();
//         const computerSelection = getComputerChoice();
//         result = playSingleRound(playerSelection, computerSelection);
//         if (result === "You win!") {
//             playerScore++;
//         } else if (result === "You lose!") {
//             computerScore++;
//         }
//         console.log (result);
//     }
//     if (playerScore > computerScore) {
//         return console.log("Player win")
//     } else if (playerScore < computerScore) {
//         return console.log("Computer win")
//     } else return console.log("Tie! Try again")
// }
// game();