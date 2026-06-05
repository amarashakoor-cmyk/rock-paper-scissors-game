let userScore = 0;
let computerScore = 0;
let gameOver = false;

function play(userChoice) {

    if(gameOver){
        return;
    }

    const choices = ["rock", "paper", "scissors"];

    const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];

    let result = "";

    if (userChoice === computerChoice) {
        result = "😐 It's a Draw!";
    }
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "🎉 You Win!";
        userScore++;
    }
    else {
        result = "😂 Computer Wins!";
        computerScore++;
    }

    document.getElementById("result").innerHTML =
        `You: ${userChoice} | Computer: ${computerChoice}<br>${result}`;

    document.getElementById("userScore").textContent = userScore;
    document.getElementById("computerScore").textContent = computerScore;

    const funnyMessages = [
        "💜 Purple power!",
        "😎 Nice move!",
        "🦄 You're awesome!",
        "✨ Keep going!",
        "🎀 Cute choice!",
        "🌸 Lucky round!"
    ];

    document.getElementById("funny").textContent =
        funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

    if(userScore === 5){
        gameOver = true;

        document.getElementById("celebration").innerHTML =
        "🎁 🏆 🎉 💜 🌸";

        document.getElementById("result").innerHTML =
        "🏆 Congratulations! You reached 5 wins and unlocked a cute gift! 🎁";
    }

    if(computerScore === 5){
        gameOver = true;

        document.getElementById("celebration").innerHTML =
        "🤖 👑 😂";

        document.getElementById("result").innerHTML =
        "🤖 Computer reached 5 wins!";
    }
}

function restartGame(){

    userScore = 0;
    computerScore = 0;
    gameOver = false;

    document.getElementById("userScore").textContent = 0;
    document.getElementById("computerScore").textContent = 0;

    document.getElementById("result").innerHTML =
    "Choose your move!";

    document.getElementById("funny").innerHTML = "";

    document.getElementById("celebration").innerHTML = "";
}