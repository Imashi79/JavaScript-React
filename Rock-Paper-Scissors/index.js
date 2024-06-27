const choices = ["rock", "paper", "scissor"];
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("result");
const playerScoredisplay = document.getElementById("playerScoredisplay"); // Corrected ID
const computerScoredisplay = document.getElementById("computerScoredisplay"); // Corrected ID
let playerScore = 0;
let computerScore = 0;

function play(playerchoice) {
    const computerchoice = choices[Math.floor(Math.random() * 3)];
    let answer = "";
    if (playerchoice === computerchoice) {
        answer = "It's a tie😣!";
    } else {
        switch (playerchoice) {
            case "rock":
                answer = computerchoice === "scissor" ? "You Win😊!" : "You Lose😔!";
                break;
            case "paper":
                answer = computerchoice === "rock" ? "You Win😊!" : "You Lose😔!";
                break;
            case "scissor":
                answer = computerchoice === "paper" ? "You Win😊!" : "You Lose😔!";
                break;
        }
    }
    player.textContent = `Player: ${playerchoice}`;
    computer.textContent = `Computer: ${computerchoice}`;
    result.textContent = answer;
    result.classList.remove("greenText", "redText");

    switch (answer) {
        case "You Win😊!":
            result.classList.add("greenText");
            playerScore++;
            playerScoredisplay.textContent = playerScore;
            break;
        case "You Lose😔!":
            result.classList.add("redText");
            computerScore++;
            computerScoredisplay.textContent = computerScore;
            break;
    }
}
