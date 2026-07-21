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
    let humanChoice;
    while (
        (humanChoice !== "rock") &&
        (humanChoice !== "paper") &&
        (humanChoice !== "scissors")
    ){
        let input = prompt("Choose: Rock, Paper or Scissors");
        humanChoice = input ? input.toLowerCase().trim() : "";
    }
    
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

function playGame(){
    alert("Rock, Papers or Scissors! Best of five!")
    for (let rounds = 0; rounds < 5; rounds++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

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

playGame()
