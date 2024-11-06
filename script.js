let level = 1;
let currentNumber = "";
let timeSpent = 0;
let timer;

document.getElementById("startButton").addEventListener("click", startGame);

function startGame() {
    level = 1;
    nextLevel();
}

function nextLevel() {
    currentNumber = generateNumber(level);
    document.getElementById("numberDisplay").textContent = currentNumber;
    document.getElementById("numberDisplay").classList.remove("hidden");
    document.getElementById("numberInput").value = "";
    document.getElementById("numberInput").classList.remove("hidden");
    document.getElementById("resultDisplay").classList.add("hidden");
    timeSpent = Date.now();
    
    // Hide the number after 2 seconds
    timer = setTimeout(hideNumber, 2000);
}

function hideNumber() {
    document.getElementById("numberDisplay").classList.add("hidden");
    document.getElementById("numberInput").focus();
}

function generateNumber(level) {
    let number = '';
    for (let i = 0; i < level; i++) {
        number += Math.floor(Math.random() * 10);
    }
    return number;
}

document.getElementById("numberInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});

function checkAnswer() {
    const answer = document.getElementById("numberInput").value;
    clearTimeout(timer); // Stop the timer if the user answers
    if (answer === currentNumber) {
        level++;
        nextLevel();
    } else {
        showTimeSpent();
    }
}

function showTimeSpent() {
    const timeTaken = ((Date.now() - timeSpent) / 1000).toFixed(2);
    document.getElementById("resultDisplay").textContent = `Tijd besteed: ${timeTaken} seconden`;
    document.getElementById("resultDisplay").classList.remove("hidden");
    document.getElementById("numberInput").classList.add("hidden");
    document.getElementById("numberDisplay").classList.add("hidden");
}