let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorsButton = document.querySelector('#scissors');

rockButton.addEventListener("click", function() {
    game('rock');
});
paperButton.addEventListener("click", function() {
    game('paper');
});
scissorsButton.addEventListener("click", function() {
    game('scissors');
});




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
    //Takes user and computer input to play a round of the game
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            let result = (document.querySelector('#result').textContent = 'Winner!\
            Rock beats Scissors');
            return result;
        } else if (computerSelection == "paper") {
            let result = (document.querySelector('#result').textContent = 'Loser, \
            Paper beats Rock');
            return result;
        } else if (computerSelection == "rock") {
            let result = (document.querySelector('#result').textContent = 'Tie! \
            You both picked Rock');
            return result;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            let result = (document.querySelector('#result').textContent = 'Winner! \
            Paper beats Rock');
            return result;
        } else if (computerSelection == "scissors") {
            let result = (document.querySelector('#result').textContent = 'Loser, \
            Scissors beats Paper');
            return result;
        } else if (computerSelection == "paper") {
            let result = (document.querySelector('#result').textContent = 'Tie! \
            You both picked Paper');
            return result;
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            let result = (document.querySelector('#result').textContent = 'Winner! \
            Scissors beats Paper');
            return result;
        } else if (computerSelection == "rock") {
            let result = (document.querySelector('#result').textContent = 'Loser, \
            Rock beats Scissors');
            return result;
        } else if (computerSelection == "scissors") {
            let result = (document.querySelector('#result').textContent = 'Tie! \
            You both picked Scissors');
            return result;
        }
    }
}


function game(pick) {
    //Main game function. Plays 5 rounds and displays winner or loses.
    wins = 0;
    losses = 0;
    ties = 0;
    for (i = 0; i < 1; i++) {
        //Loops playRound() five times//
        let player1 = pick;
        let computer1 = computerSelect();
        let round = playRound(player1, computer1);
        incrementScore(round);
    }
    displayWinner(wins, losses)      
}

function displayWinner(w, l) {
    //Takes wins and losses record and displays the winner//
    if (w > l) {
        console.log("You are the Winner!");
    } else if (w < l) {
        console.log("You lost");
    } else {
        console.log("It is a tie!");
    }
}

function incrementScore(s) {
    //Increments wins, losses or ties.
    if (s.charAt(0) === "W") {
        wins += 1;
        console.log(s);
    } else if (s.charAt(0) === "L") {
        losses += 1;
        console.log(s);
    } else if (s.charAt(0) === "T") {
        ties += 1;
        console.log(s);
    }
}