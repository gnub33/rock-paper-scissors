//Prototype first
/* The game: two players choose rock, paper or scissors
rock > scissors
scissors > paper
paper > rock */
//Write a function that plays a single round with player + computer input
//playRound function returns a string with winner
//make sure player input is case-insensitive 



const computerPlay = () => { 
    //Create function to randomly return rock/paper/scissors for computer
    const randomNumber = Math.floor(Math.random()*3) + 1;
    let computerInput;
    //console.log(num)
    switch(randomNumber) {
        case 1:
            computerInput = "rock";
            break;
        case 2:
            computerInput = "paper";
            break;
        case 3:
            computerInput = "scissors";
            break;
        default:
            break;
    }
    return computerInput;
}

const playRound = (playerSelection, computerSelection) => {
    // use comparison operators to compare both arguments, then decide winner
    if(playerSelection === "rock") { 
        if(computerSelection === "paper") {
            results.textContent = `Player: ${playerSelection}, Computer: ${computerSelection}. You Loose! Paper beats Rock`; //creates text inside div
            container.appendChild(results); // ads div to browser
            playerWin = "no"; // for the code global scope
        } else if(computerSelection === "scissors") {
            results.textContent = `Player: ${playerSelection}, Computer: ${computerSelection}. You Win! Rock beats Scissors`;
            container.appendChild(results);
            playerWin = "yes";
        } else if(playerSelection === computerSelection) {
            results.textContent = `Player: ${playerSelection}, Computer: ${computerSelection}. This was a tie`; 
            container.appendChild(results);
            playerWin = "tie"
        }
    } else if(playerSelection === "paper") {
        if(computerSelection ==="scissors") {
            results.textContent = `Player: ${playerSelection}, Computer: ${computerSelection}. You Loose! Scissors beats Paper`; 
            container.appendChild(results);
            playerWin = "no"; 
        } else if(computerSelection === "rock") {
            results.textContent = `Player: ${playerSelection}, Computer: ${computerSelection}. You Win! Paper beats Rock`;
            container.appendChild(results)
            playerWin = "yes";
        } else if(playerSelection === computerSelection) {
            results.textContent = `Player: ${playerSelection}, Computer: ${computerSelection}. This was a Tie`; 
            container.appendChild(results)
            playerWin = "tie"
        }
    } else if(playerSelection === "scissors") {
        if(computerSelection ==="rock") {
            results.textContent = `Player: ${playerSelection}, Computer: ${computerSelection}. You Loose! Rock beats Scissors`; 
            container.appendChild(results)
            playerWin = "no"; 
        } else if(computerSelection === "paper") {
            results.textContent = `Player: ${playerSelection}, Computer: ${computerSelection}. You Win! Scissors beats Paper`;
            container.appendChild(results)
            playerWin = "yes";
        } else if(playerSelection === computerSelection) {
            results.textContent = `Player: ${playerSelection}, Computer: ${computerSelection}. This was a tie`; 
            container.appendChild(results);
            playerWin = "tie";
        }
    } else {
        console.log("That's not a valid response.")
    }
}

function game() {
    //declare a winner once one player reaches five points

    if(playerWin == "yes") {
        playerWins++;
    } else if(playerWin == "no") {
        computerWins++;
    } 
    //targets scoreboard
    psco.textContent = `Player Score: ${playerWins}`;
    csco.textContent = `Computer Score: ${computerWins}`;

    //when a player achieves 5 wins
    if(playerWins === 5 || computerWins === 5) {
        //remove current button selection
        buttons.forEach((button) => {
            button.style.display = "none";
        })
        //erase results div
        //display final results
        if(playerWins > computerWins) {
            outcome = "You Win the Game!!!"
        } else if(playerWins < computerWins) {
            outcome = "Sorry you lost..."
        } else {
            outcome = "The Ultimate Tie"
        }
        //console.log(outcome);
        finalResult.textContent = `${outcome}`;
        container.appendChild(finalResult);

         //reveals play again button
         playAgainBtn.style.display = "block";
    }

}

///Global Variables///
let playerWin;
let playerWins = 0;
let computerWins = 0;
let outcome;

///Global DOM area///
const container = document.querySelector('#container');
const buttons = document.querySelectorAll('button');
//Creates play again button
const playAgainBtn = document.createElement("button");
playAgainBtn.innerHTML = "Play Again";
container.appendChild(playAgainBtn);
playAgainBtn.style.display = "none"; //hidden when game starts
//targets scoreboard
const psco = document.querySelector('.player')
const csco = document.querySelector('.computer')

//let playerWin; // variable that holds single round result
const results = document.createElement('div'); //creates a new div to hold round result
const finalResult = document.createElement('div'); //creates a new div to hold final result

//code runs when rock,paper, or scissors button is clicked
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id,computerPlay());
    game();
  });
});

playAgainBtn.addEventListener('click', () => {
    playAgainBtn.style.display = "none"; //hide again when clicked

    //reset score
    playerWins = 0;
    computerWins = 0;
    psco.textContent = `Player Score: ${playerWins}`;
    csco.textContent = `Computer Score: ${computerWins}`;

    //clear results log
    results.remove();
    finalResult.remove();

    //bring back button selection
    buttons.forEach((button) => {
        button.style.display = "inline";
    })
})
