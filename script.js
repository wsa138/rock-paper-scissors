var won = 0;
var lost = 0;

document.querySelector('#rock').addEventListener("click", function() {
    game('rock');
});
document.querySelector('#paper').addEventListener("click", function() {
    game('paper');
});
document.querySelector('#scissors').addEventListener("click", function() {
    game('scissors');
});
document.getElementById('score').innerHTML = `Wins: ${won}   Losses: ${lost}`;


function computerSelect() {
    //Randomly selects either rock, paper, or scissors//
    let pick = Math.floor(Math.random() * 3);
    let computerPick = " ";
    if (pick == 0) {
        computerPick = "rock";
    } else if (pick == 1) {
        computerPick = "paper";          
    } else if (pick == 2) {
        computerPick = "scissors";
    }
    return computerPick;
}

function playerSelect() {
    //Gets selection from user//
    playerInput = prompt("Pick Rock, Paper or Scissors");
    return playerInput.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    //Takes user and computer input to play a round of the game, display round results.
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            let result = (document.querySelector('#result').textContent = 'Winner!\
            Rock beats Scissors');
            won++;
        } else if (computerSelection == "paper") {
            let result = (document.querySelector('#result').textContent = 'Loser, \
            Paper beats Rock');
            lost++;
        } else if (computerSelection == "rock") {
            let result = (document.querySelector('#result').textContent = 'Tie! \
            You both picked Rock');
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            let result = (document.querySelector('#result').textContent = 'Winner! \
            Paper beats Rock');
            won++;
        } else if (computerSelection == "scissors") {
            let result = (document.querySelector('#result').textContent = 'Loser, \
            Scissors beats Paper');
            lost++;
        } else if (computerSelection == "paper") {
            let result = (document.querySelector('#result').textContent = 'Tie! \
            You both picked Paper');
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            let result = (document.querySelector('#result').textContent = 'Winner! \
            Scissors beats Paper');
            won++;
        } else if (computerSelection == "rock") {
            let result = (document.querySelector('#result').textContent = 'Loser, \
            Rock beats Scissors');
            lost++;
        } else if (computerSelection == "scissors") {
            let result = (document.querySelector('#result').textContent = 'Tie! \
            You both picked Scissors');
        }
    }
}


function game(pick) {
    //Main game function. Plays 5 rounds and displays winner or loses.
    wins = 0;
    losses = 0;
    ties = 0;
    for (i = 0; i < 1; i++) {
        //Loops playRound(), keeps track of wins.
        let player1 = pick;
        let computer1 = computerSelect();
        let round = playRound(player1, computer1);
        document.getElementById('score').innerHTML = `Wins: ${won}  Losses: ${lost}`;
    }   
}


