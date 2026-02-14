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

let computerChoice = getComputerChoice();