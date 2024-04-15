
let button = document.body.querySelector("button");
let gameResult = document.getElementById("resultOfGame");

let computerChoiceText = document.getElementById("computerChoice");

// Function that will generate computers output 
function getComputerOutput(){
    let randomNum = Math.floor(Math.random() * 3)
    let giveText = ""

    if(randomNum == 0){
        giveText = "Rock"
    } else if(randomNum == 1){
        giveText = "Paper"
    } else if(randomNum == 2){
        giveText = "Scissors"
    }

    computerChoiceText.innerText = "Computer choice: " + giveText
    
    return giveText
}

gameResult.innerText = "Game Result will go here"

// pick winner between player and computer
function decideWhoWon(){

    let computerChoice = getComputerOutput();

    let playerChoice = document.getElementById("playerChoice").value

    // declaring tie
    if(playerChoice == computerChoice){
        giveText = "Tie! You both chose the same option!";
    } else if(playerChoice == "Rock" && computerChoice == "Scissors"){
        giveText = "You Won " + playerChoice + " Beats " + computerChoice;
    } else if(playerChoice == "Scissors" && computerChoice == "Paper"){
        giveText = "You Won " + playerChoice + " Beats " + computerChoice;
    } else if(playerChoice == "Paper" && computerChoice == "Rock"){
        giveText = "You Won " + playerChoice + " Beats " + computerChoice;
    } else {
        giveText = "You Lost " + playerChoice + " Loses to " + computerChoice;
    }
 
    gameResult.innerText = giveText
}