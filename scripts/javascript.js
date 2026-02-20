let humanScore = 0;
let computerScore = 0;

function playGame (){

    const buttonContainer = document.querySelector(".buttons");
    buttonContainer.addEventListener("click", playRound)

    
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

function getHumanChoice(event) {
    return event.target.textContent.toLowerCase()
}

function playRound(event) {
    let humanChoice;
    let computerChoice;
    let outcome = "";

    event.preventDefault();
    
    humanChoice = getHumanChoice(event);

    computerChoice = getComputerChoice();
    
    if (humanChoice === computerChoice) {
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

    const outcomeCard = document.querySelector(".outcome");
    outcomeCard.textContent = (`Outcome: ${outcome}`);

    const humanChoiceCard = document.querySelector('.humanChoice');
    humanChoiceCard.textContent = humanChoice;

    const computerChoiceCard = document.querySelector('.computerChoice');
    computerChoiceCard.textContent = computerChoice;

    const humanScoreCard = document.querySelector(".human");
    const computerScoreCard = document.querySelector(".comp")
    if (outcome.includes("win")) {
        humanScore++;
        humanScoreCard.textContent = humanScore;
    } else if (outcome.includes("lose")) {
        computerScore++;
        computerScoreCard.textContent = computerScore;
    }
    
    if (humanScore === 5) {
        alert(`You win! ----> You reached 5 wins first. Reload page to play again`)
    } else if (computerScore === 5) {
        alert('Game over, you lose ----> Computer reached 5 wins first. Reload page to play again')
    }

    
}

playGame();