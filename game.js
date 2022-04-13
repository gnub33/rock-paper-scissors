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
    const num = Math.floor(Math.random()*3) + 1;
    let computer = "";
    //console.log(num)
    switch(num) {
        case 1:
            computer = "rock";
            break;
        case 2:
            computer = "paper";
            break;
        case 3:
            computer = "scissors";
            break;
        default:
            break;
    }
    return computer;
}

const playRound = (playerSelection, computerSelection) => {
    //insert code here
    // use comparison operators to compare both arguments, then decide winner
    let result;
    //const sunny = "sunny day hooray!";

    if(playerSelection === "rock") {
        if(computerSelection === "paper") {
            result = "You Loose! Paper beats Rock"
            playerWin = false;
        } else if(computerSelection === "scissors") {
            result = "You Win! Rock beats Scissors"
            playerWin = true;
        } else if(playerSelection === computerSelection) {
            result = "This was a Tie"
        } else {
            result = "Please choose rock, paper or scissors"
        }
    }

    if(playerSelection === "paper") {
        if(computerSelection ==="scissors") {
            return "You Loose! Scissors beats Paper!"
        } else if(computerSelection === "rock") {
            return "You Win! Paper beats Rock!"
        } else {
            return "This was a Tie"
        }
    }

    if(playerSelection === "scissors") {
        if(computerSelection ==="rock") {
            return "You Loose! Rock beats Scissors"
        } else if(computerSelection === "paper") {
            return "You Win! Scissors beats Paper!"
        } else {
            return "This was a Tie"
        }
    }
    return result;
}

function game() {
    //five rounds
    //keeps score
    //declares winner at the end
    //let roundCounter = 1;
    let playerWins = 0;
    let computerWins = 0;
    let tieCounter = 0;
    let outcome;
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
       // console.log(computerSelection);
        console.log("player input is " + playerSelection)
        console.log("computer input is " + computerSelection);
        //console.log(playRound(playerSelection,computerSelection))
        //console.log("Match is, You: " + playerSelection + " vs computer: " + computerSelection)

        if(playerWin) {
            console.log("playerWin: " + playerWin);
            playerWins++;
        } else if(!playerWin) {
            console.log("playerWin: " + playerWin);
            computerWins++;
        } else {
            console.log("playerWin: " + playerWin);
            tieCounter++;
        }
        console.log("player wins: " + playerWins + " computer wins: " + computerWins)
        //roundCounter ++;
    }

    if(playerWins > computerWins) {
        outcome = "You Win the Game!!!"
    } else if(playerWins < computerWins) {
        outcome = "Sorry you lost..."
    } else {
        outcome = "The Ultimate Tie"
    }
    return outcome;

}


const playerSelection = "rock";
let playerWin;
//const computerSelection = computerPlay();
//console.log("Match is, You: " + playerSelection + " vs computer: " + computerSelection)
//console.log(playRound(playerSelection,computerSelection))
console.log(game());