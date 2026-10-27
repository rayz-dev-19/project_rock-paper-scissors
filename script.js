function getComputerChoice() {
    let p = "paper";
    let r = "rock";
    let s = "scissors";
     function btwOneThree(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
     }
      switch(btwOneThree(1, 3)) {

     case 1:
        return p;

      case 2: 
       return r;

     case 3:
        return s;
     }
    }


function getHumanChoice() {
    let choice = prompt("Start","")

    if (choice === null) {
        return "";}

    switch (choice.toLowerCase()) {

        case "rock":
            return "rock";

        case "paper":
            return "paper";  

        case "scissors":
            return "scissors";

        default:
        console.log("Invalid choice! Please type rock, paper, or scissors.");
        return null;
    }
}



function playGame() {
   for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

} 
}

function playRound(humanChoice, computerChoice) {
    
    const human = humanChoice;
    const computer = computerChoice;

    if (!humanChoice) {
        console.log("Round skipped due to invalid input.");
        return;}

    console.log(`You chose: ${humanChoice} | Computer chose: ${computerChoice}`);

    if (human === computer) {
        console.log("A tie!");
    }

    else if
    (human === "paper" && computer === "scissors" ||
    human === "rock" && computer === "paper" ||
    human === "scissors" && computer === "rock") {
         console.log("You lost, +1 to Computer!");
            computerScore += 1;
        } else {
            console.log("You win, +1 to Human!");
            humanScore += 1;
        }

        

}

let humanScore = 0;

let computerScore = 0;

console.log(`Current Score -> Human: ${humanScore} | Computer: ${computerScore}`);

function verdict() {

switch (true) { 

    case (computerScore > humanScore): 
 return "You lost this game, try again.";

case (computerScore < humanScore):
 return "You won this game, Nice!";

default: 
return "it's a tie!";

}
}

playGame();

console.log("--- Final Scores ---");
console.log("Computer scored " + computerScore);
console.log("You scored " + humanScore);
console.log(verdict());