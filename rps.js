const score = {
    playerScore: 0,
    computerScore: 0
};

//function to get a random computer move
function getComputerMove() {
    let computerMove = Math.round(Math.random() * 10);

    if (computerMove >= 0 && computerMove < 4) {
        computerMove = 'rock';
    }
    else if (computerMove >= 4 && computerMove < 8) {
        computerMove = 'paper';
    }
    else  {
        computerMove = 'scissors';
    }

    return computerMove;
}

document.getElementById('rock').addEventListener('click', playRock);

function playRock() {
    const computerMove = getComputerMove();

    if(computerMove === 'rock') {
        return document.getElementById('output').innerHTML = `Tie. Player chose rock and computer chose ${computerMove}.`;
    }
    else if (computerMove === 'paper') {
        newComputerScore(1);
        return document.getElementById('output').innerHTML = `Computer Wins! Player chose rock and computer chose ${computerMove}.`;
    }
    else {
        newPlayerScore(1);
        return document.getElementById('output').innerHTML = `Player wins! Player chose rock and computer chose ${computerMove}.`;
    }
}

document.getElementById('paper').addEventListener('click', playPaper);

function playPaper() {
    const computerMove = getComputerMove();

    if(computerMove === 'paper') {
        return document.getElementById('output').innerHTML = `Tie. Player chose paper and computer chose ${computerMove}.`;
    }
    else if (computerMove === 'rock') {
        newPlayerScore(1)
        return document.getElementById('output').innerHTML = `Player wins! Player chose paper and computer chose ${computerMove}.`;
    }
    else {
        newComputerScore(1);
        return document.getElementById('output').innerHTML = `Computer Wins! Player chose paper and computer chose ${computerMove}.`
    }
}

document.getElementById('scissors').addEventListener('click', playScissors);

function playScissors() {
    const computerMove = getComputerMove();

    if(computerMove === 'scissors') {
        return document.getElementById('output').innerHTML = `Tie. Player chose scissors and computer chose ${computerMove}.`;
    }
    else if (computerMove === 'rock') {
        newComputerScore(1);
        return document.getElementById('output').innerHTML = `Computer Wins! Player chose scissors and computer chose ${computerMove}.`;
    }
    else {
        newPlayerScore(1)
        return document.getElementById('output').innerHTML = `Player wins! Player chose scissors and computer chose ${computerMove}.`;
    }
}

function newPlayerScore(x) {
    score.playerScore = score.playerScore + x;
    document.getElementById('score').innerHTML = `Score: User ${score.playerScore} to Computer ${score.computerScore}`;
}

function newComputerScore(x) {
    score.computerScore = score.computerScore + x;
    document.getElementById('score').innerHTML = `Score: User ${score.playerScore} to Computer ${score.computerScore}`;
}
