//This function returns a random choice for the computer
function computerPlay() {
    let rand = Math.floor(Math.random()*3)+1;
    let choice;
    if (rand===1) {
        choice="Rock"
        return choice;
    }
     else if(rand===2) {
        choice="Paper"
        return choice;
    }
     else {
        choice="Scissors"
        return choice;
    }
    console.log(choice);
}

// The parameters that function playRound() takes
const playerSelection="rock";
const computerSelection=computerPlay();

//This function takes inputs and plays a single round
function playRound(playerSelection,computerSelection) {
    let string;
    if (playerSelection>computerSelection) {
        string="You Win! This beats that";
        return string;
    } else if (playerSelection<computerSelection) {
        string="You Lose! This beats that";
        return string;
    } else {
        string="Tie! Play again";
        return string;
    }
}
