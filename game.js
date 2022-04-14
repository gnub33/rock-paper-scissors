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
    // use comparison operators to compare both arguments, then decide winner
    //const sunny = "sunny day hooray!";

    if(playerSelection === "rock") {
        if(computerSelection === "paper") {
            console.log("You Loose! Paper beats Rock") //for the player local scope
            playerWin = "no"; // for the code global scope
        } else if(computerSelection === "scissors") {
            console.log("You Win! Rock beats Scissors")
            playerWin = "yes";
        } else if(playerSelection === computerSelection) {
            console.log("This was a Tie") 
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
        let playerSelection = prompt("Please type rock, paper, or scissors").toLowerCase(); // NEED to find a way for user to choose a different answer upon EACH round
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
       // console.log(computerSelection);
        console.log("player input is " + playerSelection + " and " + "computer input is " + computerSelection)
        console.log();
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


let playerWin;
console.log(game());