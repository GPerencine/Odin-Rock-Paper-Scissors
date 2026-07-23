// Pontuação da partida
let humanScore = 0;
let computerScore = 0;

// Elementos da Interface (Placar)
const playerScoreText = document.querySelector("#playerScoreText");
const computerScoreText = document.querySelector("#computerScoreText");

// Elementos da Interface (Escolhas)
const playerChoiceText = document.querySelector("#playerChoiceText");
const computerChoiceText = document.querySelector("#computerChoiceText");

// Containers dos Cards
const playerChoiceCard = document.querySelector("#playerChoice");
const computerChoiceCard = document.querySelector("#computerChoice");

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

const buttons = document.querySelector("#buttons");

buttons.addEventListener('click', (event) => {
    const target = event.target;

    if (target.tagName !== 'BUTTON') return;
    
    const humanChoice = target.id;

    const computerChoice = getComputerChoice();
    
    playRound(humanChoice, computerChoice)
});

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

function playGame(){
    alert("Rock, Papers or Scissors! Best of five!")
    for (let rounds = 0; rounds < 5; rounds++){
        let humanSelection = getHumanChoice();
        

        playRound(humanSelection, computerSelection);
    }
    if (humanScore === computerScore){
        console.log(`OMG! That's a Tie! \nHuman: ${humanScore} X Computer: ${computerScore}`)
    }else if (humanScore > computerScore){
        console.log(`You Won! Congratulations! \nHuman: ${humanScore} X Computer: ${computerScore}`)
    }else{
        console.log(`You Lose! :( \nHuman: ${humanScore} X Computer: ${computerScore}`)
    }
}
