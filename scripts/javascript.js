function playGame (){
    let humanScore = 0;
    let computerScore = 0;
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`human: ${humanSelection}`)
    console.log(`comp: ${computerSelection}`)

    playRound(humanSelection, computerSelection);
}

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

function playRound(humanChoice, computerChoice) {

    let outcomeMessage = "";

    if (humanChoice === computerChoice) {
        outcomeMessage += `Tie! You both selected ${humanChoice}`;
        //Tie outcome check here means we only have to check for 2 states below
    } else {
        switch (humanChoice) {
            case "rock":
                if (computerChoice === "paper") {
                    outcomeMessage += "You lose! Paper beats rock";
                    computerScore++;
                } else {
                    outcomeMessage += "You win! Rcok beats scissors";
                    humanScore++;
                }
                break;
            case "paper":
                if (computerChoice === "scissors") {
                    outcomeMessage += "You lose! Scissors beats Paper";
                    computerScore++;
                } else {
                    outcomeMessage += "You win! Paper beats Rock";
                    humanScore++;
                }
                break;
            case "scissors":
                if (computerChoice === "rock") {
                    outcomeMessage += "You lose! Rock beats Scissors";
                    computerScore++;
                } else {
                    outcomeMessage += "You win! Scissors beats Paper";
                    humanScore++;
                }
        }
    }
    console.log(outcomeMessage)
}

