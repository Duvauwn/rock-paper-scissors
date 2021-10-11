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


let string;
//This function takes inputs and plays a single round
function playRound(playerSelection, computerSelection) {

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

//adding buttons as a nodelist

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    let playerSelection = button.innerHTML;
    let computerSelection = computerPlay();

    button.addEventListener('click', () => {
        //Results
        const results = document.querySelector('#results');
        const result = document.createElement('p');

        result.classList.add('result');
        result.textContent = playRound(playerSelection, computerSelection);

        results.appendChild(result);
        //Scores
        const scores = document.querySelector('#scores');
        const score = document.createElement('p');
        //Testing
        let win = 'You win!'
        let lose = 'You Lose!'
        let tie = 'Tie!'
        if (win.test(string) == true) {
            console.log('test pass')
        }
        else if (document.getElementById('content').innerHTML == lose) {
            console.log('test passes as well')
        }
        else if (document.getElementById('content').innerHTML == tie) {
            console.log('third test pass')
        }
        else {
            console.log('failure');
        }

        score.classList.add('score');
        score.textContent = 'Player: ' + ' Computer: ';

        scores.appendChild(score);
    })

})
