// Match Score
let humanScore = 0;
let computerScore = 0;

// Score Interface
const playerScoreText = document.querySelector("#playerScoreText");
const computerScoreText = document.querySelector("#computerScoreText");

const playerScoreCard = document.querySelector("#playerScore");
const computerScoreCard = document.querySelector("#computerScore");

// Choice Interface
const playerChoiceText = document.querySelector("#playerChoiceText");
const computerChoiceText = document.querySelector("#computerChoiceText");

const playerChoiceCard = document.querySelector("#playerChoice");
const computerChoiceCard = document.querySelector("#computerChoice");

// Buttons
const buttons = document.querySelector("#buttons");

alert("Rock, paper, scissors! First to five wins!")

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

    if (humanScore >= 5 || computerScore >= 5){
        endGame()
        return;
    } 
    
    const humanChoice = target.id;

    const computerChoice = getComputerChoice();

    playerChoiceText.textContent = (humanChoice)
    computerChoiceText.textContent = (computerChoice)

    playRound(humanChoice, computerChoice)
});

function playRound(humanChoice, computerChoice){
    
    if(humanChoice === computerChoice){
        playerChoiceCard.classList.remove("winner", "loser", "draw");
        computerChoiceCard.classList.remove("winner", "loser", "draw");
        playerChoiceCard.classList.add("draw");
        computerChoiceCard.classList.add("draw");
    }else if(
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'rock' && computerChoice === 'scissors') || 
        (humanChoice === 'scissors' && computerChoice === 'paper')                
    ){
        humanScore +=1;
        playerScoreText.textContent = (humanScore)

        resetCard()
        playerChoiceCard.classList.add("winner");
        computerChoiceCard.classList.add("loser");
    }else{
        computerScore +=1;
        computerScoreText.textContent = (computerScore)

        resetCard()
        playerChoiceCard.classList.add("loser");
        computerChoiceCard.classList.add("winner");
    }
    
    if (computerScore >= 5 || humanScore >= 5){
        endGame()
    }
}

function resetCard(){
    playerChoiceCard.classList.remove("winner", "loser", "draw");
    computerChoiceCard.classList.remove("winner", "loser", "draw");
}

function endGame(){
    
    if (humanScore > computerScore){
        playerScoreCard.classList.add("winner");
        computerScoreCard.classList.add("loser");
        alert('You Won! Congratulations!')
    }else{
        playerScoreCard.classList.add("loser");
        computerScoreCard.classList.add("winner");
        alert('You Lose! :(')
    }

    const playAgain = confirm('Do you want to play again?');
    if (playAgain) {
        resetGame();
    }
}

function resetGame(){
    computerScore = 0
    humanScore = 0
    playerScoreText.textContent = computerScore;
    computerScoreText.textContent = humanScore;

    playerChoiceText.textContent = ('-')
    computerChoiceText.textContent = ('-')

    resetCard()

    playerScoreCard.classList.remove("winner", "loser", "draw");
    computerScoreCard.classList.remove("winner", "loser", "draw");

    alert("Rock, paper, scissors! First to five wins!");
}