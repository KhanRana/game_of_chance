const choices = ["rock", "paper", "scissors", "lizard", "spock"];

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function(){
            let btn = this.getAttribute("data-type");
            choice(btn, "your-image")[0];

            let yourChoice = choice(btn, "your-image")[1];
         
            let ncp = npcChoice(choices);
            console.log(ncp);
            choice(ncp, "npc-image")[0];

            let myChoice = choice(ncp, "npc-image")[1];
            console.log(myChoice);

            checkAnswer(yourChoice, myChoice)
        })  
}});

function choice(btn, id) { 
    let img = document.getElementById(id);
    if (btn === "rock"){
    return [img.src = "assets/images/rock.jpeg", "rock"];
}
    else if (btn === "paper"){
     return [img.src = "assets/images/paper.jpeg", "paper"];
}
    else if (btn === "scissors"){
    return [img.src = "assets/images/scissors.jpeg", "scissors"];
}
else if (btn === "lizard"){
    return [img.src = "assets/images/lizard.jpeg", "lizard"];
}
else if (btn === "spock"){
    return [img.src = "assets/images/spock.jpeg", "spock"];
}       
}

/**
 * function to get npc choice
 */
function npcChoice(choice){
    return choice[Math.floor(Math.random() * choices.length)];
}

function checkAnswer(playerChoice, nonPlayer){
    // check for a tie round
    message = ``;
    if (nonPlayer === playerChoice) {
        message = `We both chose ${nonPlayer} - Its a tie`;
        document.getElementById("winner").textContent = message;
    }
    else if ((nonPlayer === "rock") && (playerChoice === "scissors" || playerChoice === "lizard")
    || ((nonPlayer === "paper") && (playerChoice === "rock" || playerChoice === "spock")) 
    || ((nonPlayer === "scissors") && (playerChoice === "paper" || playerChoice === "lizard"))
    || ((nonPlayer === "lizrad") && (playerChoice === "paper") || playerChoice === "spock")
    || ((nonPlayer === "spock") && (playerChoice === "rock" || playerChoice === "scissors"))) {

        message = `I chose ${nonPlayer}, so I win! ${nonPlayer} beats ${playerChoice}`;
        document.getElementById("winner").textContent = message;
        incrementNPCScore()
    }
    else {
        message = `I chose ${nonPlayer}, so you win! ${playerChoice} beats ${nonPlayer}`;
        document.getElementById("winner").textContent = message;
        incrementScore();

    }
}

/**
 * increment player score
 */
function incrementScore() {
    let newScore = parseInt(document.getElementById("your-score").innerText);
    document.getElementById("your-score").textContent = ++newScore;
}

/**
 * increment npc score
 */
function incrementNPCScore() {
    let newScore = parseInt(document.getElementById("npc-score").innerText);
    document.getElementById("npc-score").textContent = ++newScore;

}
