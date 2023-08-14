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
let btnStart = document.querySelector('.start-game')
let btnStartAgain = document.querySelector('.start-again')

let buttons = document.querySelectorAll('button');

let resultbox = document.querySelector('.results');
let p = document.createElement('p');
p.textContent = "Round result: ";
resultbox.appendChild(p);

let playerScoreCount = document.querySelector('.player-score');
let updatePlayerScore = 0;
let computerScoreCount = document.querySelector('.computer-score');
let updateComputerScore = 0;

let winner = document.querySelector('.winner');

btnStart.addEventListener('click', ()=>{
    updatePlayerScore = 0;
    updateComputerScore = 0;
    game();
    btnStart.classList.toggle("hide")
})

let clickEvent = () => {
    p.textContent = "Round result: "
    let playerScore = 0;
    let computerScore = 0;
    const computerSelection = getComputerChoice();
    let result = playSingleRound(playerSelection, computerSelection);
    if (result === "You win! Scissors beat Paper"||result === "You win! Rock beats Scissors"||result === "You win! Paper beats Rock") {
        playerScore++;
        } else if (result === "You lose! Scissors beat Paper"||result === "You lose! Rock beats Scissors"||result === "You lose! Paper beats Rock") {
         computerScore++;
         }
        p.textContent += result;
        
    updatePlayerScore += playerScore;
    playerScoreCount.innerHTML = updatePlayerScore;
    updateComputerScore += computerScore;
    computerScoreCount.textContent = updateComputerScore;
    
    if (updatePlayerScore >= 5) {
        winner.textContent = 'YOU WIN!!!'
    }
    if (updateComputerScore >= 5) {
        winner.textContent = 'COMPUTER WIN!!!'
    }
    if (winner.innerHTML === 'YOU WIN!!!'||winner.innerHTML === 'COMPUTER WIN!!!') {
        gameOver();
    }
}

function rock (){
    playerSelection = 'rock';
   clickEvent()  
}

function paper(){
    playerSelection = 'paper';
   clickEvent()
}

function scissors(){
    playerSelection = 'scissors';
   clickEvent()
}

function game() {
btnRock.addEventListener('click', rock)

btnPaper.addEventListener('click',paper)

btnScissors.addEventListener('click', scissors)

}



function gameOver() {
    p.textContent = "Round result: ";
    btnRock.removeEventListener('click', rock);
    btnPaper.removeEventListener('click',paper);
    btnScissors.removeEventListener('click', scissors);
    btnStartAgain.classList.remove('hide');
    btnStartAgain.addEventListener('click',()=>{
        winner.innerHTML = '';
        playerScoreCount.innerHTML = 0;
        computerScoreCount.innerHTML = 0;
        btnStart.classList.remove('hide');
        btnStartAgain.classList.add('hide');
    })
}