let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (humanGuess, computerGuess, target) => {
    if(humanGuess === computerGuess) {
        return true;
    };
    if(Math.abs(target - humanGuess) <= Math.abs(target - computerGuess)) {
        return true;
    } else {
        return false;
    };
};

const updateScore = (winner) => {
    if (winner === 'human') {
        return humanScore += 1;
    }
    if (winner === 'computer') {
        return computerScore += 1;
    };
};

const advanceRound = () => currentRoundNumber += 1;
