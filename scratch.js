

//This was after let outcome inside of the game() function
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
    }
    console.log("player wins: " + playerWins + " computer wins: " + computerWins)
    //roundCounter ++;
}



//the game function

function game() {
    //five rounds
    //keeps score
    //declares winner at the end

    let playerWins = 0;
    let computerWins = 0;
    let outcome;

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
    }
    console.log("player wins: " + playerWins + " computer wins: " + computerWins)
    //roundCounter ++;

    if(playerWins > computerWins) {
        outcome = "You Win the Game!!!"
    } else if(playerWins < computerWins) {
        outcome = "Sorry you lost..."
    } else {
        outcome = "The Ultimate Tie"
    }
    return outcome;

}


//working DOM
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", () => {
    playRound("rock",computerPlay());
});

paper.addEventListener("click", () => {
    playRound("paper",computerPlay());
});

scissors.addEventListener("click", () => {
    playRound("scissors",computerPlay());
});
