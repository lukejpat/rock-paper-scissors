function playGame (){
    const buttonContainer = document.querySelector(".buttons");
    buttonContainer.addEventListener("click", playRound)
    console.log()

    
}

function getComputerChoice() {
    let computerChoice = Math.random() * 3;
    computerChoice = Math.floor(computerChoice);
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

function playRound(event) {
    let humanScore;
    let computerScore;
    let humanSelection;
    let computerSelection;
    let outcome = "";

    event.preventDefault();

    humanSelection = event.target.textContent.toLowerCase();
    console.log(humanSelection);
    /*if (humanChoice === computerChoice) {
        outcome += `Tie! You both selected ${humanChoice}`;
        //Tie outcome check here means we only have to check for 2 states below
    } else {
        switch (humanChoice) {
            case "rock":
                if (computerChoice === "paper") {
                    outcome += "You lose! Paper beats rock";
                    
                } else {
                    outcome += "You win! Rock beats scissors";
                    
                }
                break;
            case "paper":
                if (computerChoice === "scissors") {
                    outcome += "You lose! Scissors beats Paper";
                    
                } else {
                    outcome += "You win! Paper beats Rock";
                    
                }
                break;
            case "scissors":
                if (computerChoice === "rock") {
                    outcome += "You lose! Rock beats Scissors";
                    
                } else {
                    outcome += "You win! Scissors beats Paper";
                    
                }
        }
    }
    if (outcome.includes("win")) {
        humanScore++;
    } else if (outcome.includes("lose")) {
        computerScore++;
    }
    console.log(`Score is: human-computer ${humanScore}-${computerScore}`)
    
    if (humanScore === 5) {
        console.log(`You win!`)
    } else {
        console.log('Game over, you lose')
    }
    console.log(outcome)*/
    return outcome;
}

playGame();