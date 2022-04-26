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
    //Create a variable that randomly stores 1,2 or 3
    //make a switch statement to select rock, paper or scissors depending on number generated
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

let playerWin;

const playRound = (playerSelection, computerSelection) => {
    //let playerWin; // variable that holds single round result
    const results = document.createElement('div'); //creates a new div to hold round result


    // use comparison operators to compare both arguments, then decide winner
    //const sunny = "sunny day hooray!";

    if(playerSelection === "rock") { 
        if(computerSelection === "paper") {
            results.textContent = `Player: ${playerSelection} Computer: ${computerSelection}. You Loose! Paper beats Rock`; //creates text inside div
            container.appendChild(results); // ads div to browser
            playerWin = "no"; // for the code global scope
            //const subject = document.querySelector('.subject');
            //var scoreP = 77;
            //subject.insertAdjacentHTML('afterend', `${scoreP}`);
        } else if(computerSelection === "scissors") {
            results.textContent = `Player: ${playerSelection} Computer: ${computerSelection}. You Win! Rock beats Scissors`;
            container.appendChild(results);
            playerWin = "yes";
        } else if(playerSelection === computerSelection) {
            results.textContent = `Player: ${playerSelection} Computer: ${computerSelection}. This was a tie`; 
            container.appendChild(results);
            playerWin = "tie"
        }
    } else if(playerSelection === "paper") {
        if(computerSelection ==="scissors") {
            results.textContent = `Player: ${playerSelection} Computer: ${computerSelection}. You Loose! Scissors beats Paper`; 
            container.appendChild(results);
            playerWin = "no"; 
        } else if(computerSelection === "rock") {
            results.textContent = `Player: ${playerSelection} Computer: ${computerSelection}. You Win! Paper beats Rock`;
            container.appendChild(results)
            playerWin = "yes";
        } else if(playerSelection === computerSelection) {
            results.textContent = `Player: ${playerSelection} Computer: ${computerSelection}. This was a Tie`; 
            container.appendChild(results)
            playerWin = "tie"
        }
    } else if(playerSelection === "scissors") {
        if(computerSelection ==="rock") {
            results.textContent = `Player: ${playerSelection} Computer: ${computerSelection}. You Loose! Rock beats Scissors`; 
            container.appendChild(results)
            playerWin = "no"; 
        } else if(computerSelection === "paper") {
            results.textContent = `Player: ${playerSelection} Computer: ${computerSelection}. You Win! Scissors beats Paper`;
            container.appendChild(results)
            playerWin = "yes";
        } else if(playerSelection === computerSelection) {
            results.textContent = `Player: ${playerSelection} Computer: ${computerSelection}. This was a tie`; 
            container.appendChild(results);
            playerWin = "tie";
        }
    } else {
        console.log("That's not a valid response.")
    }
}

//the game function
let playerWins = 0;
let computerWins = 0;
let outcome = 'balloon';

function game() {
    //five rounds
    //keeps score
    //declares winner at the end

    //let playerWins = 0;
    //let computerWins = 0;
    //let outcome;

    const psco = document.querySelector('.player')
    const csco = document.querySelector('.computer')

    
    //playRound(button.id, computerPlay());
    //console.log("player input is " + playerSelection + " and " + "computer input is " + computerSelection)
    //console.log(playRound(playerSelection,computerSelection))
    //console.log("Match is, You: " + playerSelection + " vs computer: " + computerSelection)

    if(playerWin == "yes") {
        console.log("playerWin: " + playerWin);
        playerWins++;
    } else if(playerWin == "no") {
        console.log("playerWin: " + playerWin);
        computerWins++;
    } else {
        console.log("playerWin: " + playerWin);
    }
    console.log("player wins: " + playerWins + " computer wins: " + computerWins)
    //roundCounter ++;

    psco.textContent = `Player Score: ${playerWins}`;
    csco.textContent = `Computer Score: ${computerWins}`;

    const finalResult = document.createElement('div'); //creates a new div to hold final result


    if(playerWins + computerWins >= 3) {
        if(playerWins > computerWins) {
            outcome = "You Win the Game!!!"
        } else if(playerWins < computerWins) {
            outcome = "Sorry you lost..."
        } else {
            outcome = "The Ultimate Tie"
        }
        console.log(outcome);
        finalResult.textContent = `${outcome}`;
        container.appendChild(finalResult);
    }

}

//DOM area
const container = document.querySelector('#container');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id,computerPlay());
    game();
    //create another function that returns results string
  });
});




console.log(outcome);
console.log("hello \nthere big guy");