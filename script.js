
let button = document.body.querySelector("button");


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

    button.innerText = giveText
}

