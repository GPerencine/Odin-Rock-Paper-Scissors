function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);

    switch(computerChoice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Choose: Rock, Paper or Scissors").toLowerCase();
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log(`You Tied! ${computerChoice} = ${humanChoice}`)
    }else if(
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'rock' && computerChoice === 'scissors') || 
        (humanChoice === 'scissors' && computerChoice === 'paper')                
    ){
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
        humanScore +=1;
    }else{
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
        computerScore +=1;
    }
    console.log(`Human: ${humanScore} X Computer: ${computerScore}`)
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);