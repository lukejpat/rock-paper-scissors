# rock-paper-scissors

The Odin Project: Rock Paper Scissors project:

Problem:
Write a rock-paper-scissors game played against the computer. The game will consist of 5 rounds. The user enters a either rock, paper, or scissors, and the computer randomly selects one of the  options as well. The winner of each round is declared and score is kept tally. The game will be played entirely in the console

Plan:
GUI: No
Inputs: 
    - user enters a string: rock, paper, and scissors should be accepted (case    insensitive)
Outputs:
    - (per round):
        - The computer selection (rock, paper, scissors)
        - the round winner
        - the current score
    - (per game):
        - the overall winner
        - the final score

Pseudocode:
- Initialise score counters to 0 (one for computer one for user)
- While both score counters are less than 5:
    - User prompted to enter 'rock, paper, or scissors'
    - computer selects 'rock, paper, or scissors'
    - winner determined:
        - Rock beats scissors
        - Scissors beats paper
        - Paper beats rock
    - increment score counter of winner
