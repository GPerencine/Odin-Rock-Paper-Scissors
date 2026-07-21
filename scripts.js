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
