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

const playRound = (playerSelection, computerSelection) => {
    let playerWin; // variable that holds single round result

    // use comparison operators to compare both arguments, then decide winner
    //const sunny = "sunny day hooray!";

    if(playerSelection === "rock") {
        if(computerSelection === "paper") {
            const results = document.createElement('div');
            results.textContent = "You Loose! Paper beats Rock";
            container.appendChild(results);
            playerWin = "no"; // for the code global scope
        } else if(computerSelection === "scissors") {
            const results = document.createElement('div');
            results.textContent = "You Win! Rock beats Scissors";
            container.appendChild(results);
            playerWin = "yes";
        } else if(playerSelection === computerSelection) {
            const results = document.createElement('div');
            results.textContent = "This was a Tie"; 
            container.appendChild(results);
            playerWin = "tie"
        }
    } else if(playerSelection === "paper") {
        if(computerSelection ==="scissors") {
            console.log("You Loose! Scissors beats Paper") 
            playerWin = "no"; 
        } else if(computerSelection === "rock") {
            console.log("You Win! Paper beats Rock")
            playerWin = "yes";
        } else if(playerSelection === computerSelection) {
            console.log("This was a Tie") 
            playerWin = "tie"
        }
    } else if(playerSelection === "scissors") {
        if(computerSelection ==="rock") {
            console.log("You Loose! Rock beats Scissors") 
            playerWin = "no"; 
        } else if(computerSelection === "paper") {
            console.log("You Win! Scissors beats Paper")
            playerWin = "yes";
        } else if(playerSelection === computerSelection) {
            console.log("This was a Tie") 
            playerWin = "tie"
        }
    } else {
        console.log("That's not a valid response.")
    }
}


//DOM area
const container = document.querySelector('#container');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id,computerPlay());
    //create another function that returns results string
  });
});





//console.log(playRound());