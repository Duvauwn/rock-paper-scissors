//This function returns a random choice for the computer
function computerPlay() {
    let rand = Math.floor(Math.random() * 3) + 1;
    let choice;
    if (rand === 1) {
        choice = "Rock"
        return choice;
    }
    else if (rand === 2) {
        choice = "Paper"
        return choice;
    }
    else {
        choice = "Scissors"
        return choice;
    }
}



//This function takes a string and returns the first letter capitalized
function upper(player) {
    let lower = player.toLowerCase();
    let first = lower.charAt(0);
    let upper = first.toUpperCase();
    let final = lower.replace(first, upper);
    return final;
}


//This function takes inputs and plays a single round
function playRound(playerSelection, computerSelection) {
    let string;

    //Section if player chooses rock
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        string = "You Lose! Paper beats Rock";
        return string;
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        string = "You Win! Rock beats Scissors";
        return string;
    }
    else if (playerSelection === "Rock" && computerSelection === "Rock") {
        string = "Tie! Rock: Play again";
        return string;
    }

    //Section if player chooses paper
    else if (playerSelection === "Paper" && computerSelection === "Paper") {
        string = "Tie! Paper: Play again";
        return string;
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        string = "You Lose! Scissors beats Paper";
        return string;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        string = "You Win! Paper beats Rock";
        return string;
    }

    //Section if player chooses scissors
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        string = "You Win! Scissors beats Paper";
        return string;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        string = "Tie! Scissors: Play again";
        return string;
    }
    else {
        string = "You Lose! Rock beats Scissors";
        return string;
    }
}


//This function will take the playRound function and run it five times
//function game() {
//    for (let i=0; i<5; i++) {
//
//        //Logging the selections from the player and computer
//        playerSelection=upper(prompt("Pick a move: "));
//        console.log("Player: "+playerSelection);
//        computerSelection=computerPlay();
//        console.log("Computer: "+computerSelection);
//
//        console.log(playRound(playerSelection, computerSelection));
//    }
//}

//Calls the game() function to play 5 games
//game()


// The parameters that function playRound() takes
let playerSelection = 'Rock';
let computerSelection = computerPlay();


//Event listeners for buttons

const btn1 = document.querySelector('#rock');
btn1.addEventListener('click', console.log(playRound(playerSelection, computerSelection)));
console.log(btn1);