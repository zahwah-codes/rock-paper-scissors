


const game = () => {

    let hScore = 0;
    let cScore = 0;

    const playMatch = () => {
        const options = document.querySelectorAll(".choices button");
        const humanHand = document.querySelector(".human-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.getElementById("hands");

        // Computer Options 
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function () {
                // Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                
                setTimeout(() => {
                // Compare Hands 
                compareHands(this.textContent, computerChoice);

                // Update Images
                humanHand.src = `./human/${this.textContent}.svg`;
                computerHand.src = `./computer/${computerChoice}.svg`; 
                }, 300);

            });
        });
    };
    
    const updateScore = () => {
        const humanScore = document.querySelector('.human-score p');
        const computerScore = document.querySelector('.computer-score p');
        const winner = document.getElementById('result');
        humanScore.textContent = hScore;
        computerScore.textContent = cScore;

        const startOver = document.querySelector(".start-over button");

        startOver.addEventListener('click', () => {
            humanScore.innerHTML = "0";
            computerScore.innerHTML = "0";
            winner.textContent = "CHOOSE ONE \u2193" 
        })

    };


    const compareHands = (humanChoice, computerChoice) => {
        // Update Text
        const winner = document.getElementById('result');

        // Check for Tie
        if(humanChoice === computerChoice) {
            winner.textContent = "IT'S A DRAW😝";
            return;
        }
        // Check for Rock
        if(humanChoice === 'rock') {
            if(computerChoice === 'scissors') {
                winner.textContent = "WINNER!🥳";
                hScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "YOU LOST🥲";
                cScore++;
                updateScore();
                return;
            }
        }
        // Check for Paper
        if(humanChoice === 'paper') {
            if(computerChoice === 'rock') {
                winner.textContent = "WINNER!🥳";
                hScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "YOU LOST🥲";
                cScore++;
                updateScore();
                return;
            }
        }
        // Check for Scissors 
        if(humanChoice === 'scissors') {
            if(computerChoice === 'paper') {
                winner.textContent = "WINNER!🥳";
                hScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "YOU LOST🥲";
                cScore++;
                updateScore();
                return;
            }
        }

    };
    //  Calling inner functions 
    playMatch();

};

    // Start the game function 
game();