let numberGuess = Math.floor(Math.random() * 20) + 1;
let tries = 0;
let limitTries = 6;
let score = 0;
let highScore = 0;
let guessedNumbers = [];

function numbercheck() {
    const inputElement = parseInt(document.getElementById("number-input").value);

    if (!isNaN(inputElement)) {
        guessedNumbers.push(inputElement);
        tries++;

        document.getElementById("number-try").innerText = tries;
      
        if(tries > limitTries){
            document.getElementById("start-guessing").innerText = "Too many attempts! Please play again.";
            document.body.style.backgroundColor = "#9A2826"; 
            // Disable input
            document.getElementById("number-input").disabled = true; 
            return;
        }

        if (inputElement === numberGuess) {
            document.getElementById("start-guessing").innerText = "Congratulations! You've guessed the number.";
            document.body.style.backgroundColor = "#1B470F";
            score++;
            document.getElementById("number-correct").innerText = numberGuess;
            document.getElementById("score").innerText = score;

            if (score > highScore) {
                highScore = score;
                document.getElementById("high-score").innerText = highScore;
            }
        } 
        else if (inputElement < numberGuess) {
            document.getElementById("start-guessing").innerText = "Higher";
        }
         else {
            document.getElementById("start-guessing").innerText = "Lower";
        }
    } 
    else {
        alert("Please enter a valid number.");
    }
}

function playAgain() {
    numberGuess = Math.floor(Math.random() * 20) + 1;
    tries = 0;

    limitTries = numberGuess/2;
    guessedNumbers = [];
    document.getElementById("number-input").value = "";
    document.getElementById("start-guessing").innerText = "In game";
    document.body.style.backgroundColor = "#555A69";
    document.getElementById("number-input").disabled = false; // Enable input for new game
    document.getElementById("number-try").innerText = tries;
}
