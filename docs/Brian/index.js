var userScore = 0;
var computerScore = 0;

function play(userChoice){
    var random = Math.random();
    var computerChoice = getComputerChoice(random);
    resetChoiceIcons();
    printComputerChoice(computerChoice);
    printUserChoice(userChoice);
    printResult(computerChoice, userChoice);
    printScore();
    document.getElementById("resultDiv").classList.remove("d-none");
}

function resetChoiceIcons(){
    document.getElementById("computerChoiceIcon").classList.remove("fa-hand-rock", "fa-hand-paper", "fa-hand-scissors");
    document.getElementById("userChoiceIcon").classList.remove("fa-hand-rock", "fa-hand-paper", "fa-hand-scissors");
}

function getComputerChoice(random){
    if(random < 0.34){
        return "Rock";
    }else if(random < 0.67){
        return "Paper";
    }else{
        return "Scissors";
    }
}

function printComputerChoice(computerChoice){
    printChoiceIcon("computerChoiceIcon", computerChoice);
    document.getElementById("computerChoice").innerHTML = computerChoice;
}

function printUserChoice(userChoice){
    printChoiceIcon("userChoiceIcon", userChoice);
    document.getElementById("userChoice").innerHTML = userChoice;
}

function printChoiceIcon(elementId, choice){
    if(choice === "Rock"){
        document.getElementById(elementId).classList.add("fas", "fa-hand-rock", "computer-choice-icon");
    }else if(choice === "Paper"){
        document.getElementById(elementId).classList.add("fas", "fa-hand-paper", "computer-choice-icon");
    }else{
        document.getElementById(elementId).classList.add("fas", "fa-hand-scissors", "computer-choice-icon");
    }
}

function printResult(computerChoice, userChoice){
    if(computerChoice === userChoice){
        document.getElementById("result").innerHTML = "Game is tied!";
    }else if(computerChoice === "Rock" && userChoice === "Scissors" || computerChoice === "Paper" && userChoice === "Rock" || computerChoice === "Scissors" && userChoice === "Paper"){
        document.getElementById("result").innerHTML = "You lose!";
        computerScore += 1;
    }else{
        document.getElementById("result").innerHTML = "You win!";
        userScore += 1;
    }
}

function printScore(){
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("userScore").innerHTML = userScore;
}