const randomNo = 1;
let humanScore = 0;
let computerScore = 0;
let count = 1;
let result = ''

function getComputerChoice(){
    let randomNo = Math.floor(Math.random() * 3)+1;
    if (randomNo == 1){
        return "rock";
    }
    else if(randomNo == 2){
        return "paper";
    }
    else if(randomNo == 3){
        return "scissors";
    }
}
function getHumanChoice(){            
    let playerschoice = prompt("gibs sth");
    return playerschoice.toLowerCase();
}
function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        result = humanChoice+" vs "+computerChoice+": Draw.";
    }
    else if(humanChoice == "rock"){
        if (computerChoice == "scissors"){
            humanScore += 1;
            result = humanChoice+" vs "+computerChoice+": You win!";
        }
        else{
            computerScore += 1;
            result = humanChoice+" vs "+computerChoice+": You lose...";
        }
    }
    else if(humanChoice == "paper"){
        if (computerChoice == "rock"){
            humanScore += 1;
            result = humanChoice+" vs "+computerChoice+": You win!";
        }
        else{
            computerScore += 1;
            result = humanChoice+" vs "+computerChoice+": You lose...";
        }
    }
    else if(humanChoice == "scissors"){
        if (computerChoice == "paper"){
            humanScore += 1;
            result = humanChoice+" vs "+computerChoice+": You win!";
        }
        else{
            computerScore += 1;
            result = humanChoice+" vs "+computerChoice+": You lose...";
        }
    }
}

const rock = document.querySelector("#rock");
rock.onclick = () => {console.log("Round: ", playRound("rock",getComputerChoice()), humanScore, computerScore);
Score.textContent = 'Score: '+ humanScore + ' - '+computerScore;
Round.textContent = result;}

const paper = document.querySelector("#paper");
paper.onclick = () => {console.log("Round: ", playRound("paper",getComputerChoice()), humanScore, computerScore);
Score.textContent = 'Score: '+ humanScore + ' - '+computerScore;
Round.textContent = result;}

const scissors = document.querySelector("#scissors");
scissors.onclick = () => {console.log("Round: ", playRound("scissors",getComputerChoice()), humanScore, computerScore);
Score.textContent = 'Score: '+ humanScore + ' - '+computerScore;
Round.textContent = result;}
