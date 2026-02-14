function playGame (){
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection;
    let computerSelection;

    let outcome = "";
    console.log(`human: ${humanSelection}`)
    console.log(`comp: ${computerSelection}`)

    while ((humanScore < 5) && (computerScore < 5)) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        outcome = playRound(humanSelection, computerSelection);
        if (outcome.includes("win")) {
            humanScore++;
        } else if (outcome.includes("lose")) {
            computerScore++;
        }
        console.log(`Score is: human-computer ${humanScore}-${computerScore}`)
    }
    if (humanScore === 5) {
        console.log(`You win!`)
    } else {
        console.log('Game over, you lose')
    }
    
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
                    
                } else {
                    outcomeMessage += "You win! Rcok beats scissors";
                    
                }
                break;
            case "paper":
                if (computerChoice === "scissors") {
                    outcomeMessage += "You lose! Scissors beats Paper";
                    
                } else {
                    outcomeMessage += "You win! Paper beats Rock";
                    
                }
                break;
            case "scissors":
                if (computerChoice === "rock") {
                    outcomeMessage += "You lose! Rock beats Scissors";
                    
                } else {
                    outcomeMessage += "You win! Scissors beats Paper";
                    
                }
        }
    }
    console.log(outcomeMessage)
    return outcomeMessage;
}

playGame();