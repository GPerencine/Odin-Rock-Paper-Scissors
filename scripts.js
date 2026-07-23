// Match Score
let humanScore = 0;
let computerScore = 0;

// Score Interface
const playerScoreText = document.querySelector("#playerScoreText");
const computerScoreText = document.querySelector("#computerScoreText");

// Choice Interface
const playerChoiceText = document.querySelector("#playerChoiceText");
const computerChoiceText = document.querySelector("#computerChoiceText");

// Choice Cards
const playerChoiceCard = document.querySelector("#playerChoice");
const computerChoiceCard = document.querySelector("#computerChoice");

// Buttons
const buttons = document.querySelector("#buttons");

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

buttons.addEventListener('click', (event) => {
    const target = event.target;

    if (target.tagName !== 'BUTTON') return;
    
    const humanChoice = target.id;

    const computerChoice = getComputerChoice();

    playerChoiceText.textContent = (humanChoice)
    computerChoiceText.textContent = (computerChoice)

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
        playerScoreText.textContent = (humanScore)
    }else{
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
        computerScore +=1;
        computerScoreText.textContent = (computerScore)
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

//playerScoreCard.classList.add("winner");
//computerScoreCard.classList.add("loser");

//playerScoreCard.classList.add("loser");
//computerScoreCard.classList.add("winner");

//const playerScoreCard = document.querySelector("#playerScore");
//const computerScoreCard = document.querySelector("#computerScore");
