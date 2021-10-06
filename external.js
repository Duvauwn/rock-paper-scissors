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
}

// The parameters that function playRound() takes
const playerSelection=upper("paper")
const computerSelection=computerPlay();
//This function takes a string and returns the first letter capitalized
function upper(player) {
    let lower=player.toLowerCase();
    let first=lower.charAt(0);
    let upper=first.toUpperCase();
    let final=lower.replace(first, upper);
    return final;
}
//Logging the selections from the player and computer
console.log("Player: "+playerSelection);
console.log("Computer: "+computerSelection);


//This function takes inputs and plays a single round
function playRound(playerSelection,computerSelection) {
    let string;

    //Section if player chooses rock
    if (playerSelection==="Rock" && computerSelection==="Paper") {
        string="You Lose! Paper beats Rock";
        return string;
    }
    else if (playerSelection==="Rock" && computerSelection==="Scissors") {
        string="You Win! Rock beats Scissors";
        return string;
    }
    else if (playerSelection==="Rock" && computerSelection==="Rock") {
        string="Tie! Play again";
        return string;
    }

    //Section if player chooses paper
    else if (playerSelection==="Paper" && computerSelection==="Paper") {
        string="Tie! Play again";
        return string;
    }
    else if (playerSelection==="Paper" && computerSelection==="Scissors") {
        string="You Lose! Scissors beats Paper";
        return string;
    }
    else if (playerSelection==="Paper" && computerSelection==="Rock") {
        string="You Win! Paper beats Rock";
        return string;
    }

    //Section if player chooses scissors
    else if (playerSelection==="Scissors" && computerSelection==="Paper") {
        string="You Win! Scissors beats Paper";
        return string;
    }
    else if (playerSelection==="Scissors" && computerSelection==="Scissors") {
        string="Tie! Play again";
        return string;
    }
    else {
        string="You Lose! Rock beats Scissors";
        return string;
    }
}
playRound(playerSelection, computerSelection);

