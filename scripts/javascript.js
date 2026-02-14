let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.random();
    computerChoice = Math.round(computerChoice);
    switch (computerChoice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors"
            break;
    }
    return null
}

function getHumanChoice() {
    let humanChoice = prompt("Please type 'rock', 'paper', or 'scissors'");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

