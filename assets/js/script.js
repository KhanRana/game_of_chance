const choices = ["rock", "paper", "scissors", "lizard", "spock"];

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function(){
            let btn = this.getAttribute("data-type");
            choice(btn, "your-image")[0];
            incrementScore();

            let ncp = npcChoice(choices);
            console.log(ncp);
            choice(ncp, "npc-image")[0];
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

function checkAnswer(){
    // check for a tie round
    if (npcChoice === playerChoice) {
        alert(`You both chose ${npcChoice} - Its a tie`);
    }
    else if ((npcChoice === "rock") && (playerChoice === "scissors" || playerChoice === "lizard")
    || ((npcChoice === "paper") && (playerChoice === "rock" || playerChoice === "spock")) 
    || ((npcChoice === "scissors") && (playerChoice === "paper" || playerChoice === "lizard"))
    || ((npcChoice === "lizrad") && (playerChoice === "paper") || playerChoice === "spock")
    || ((npcChoice === "spock") && (playerChoice === "rock" || playerChoice === "scissors"))) {

        alert (`I chose ${npcChoice}, so I win! ${npcChoice} beats ${playerChoice}`);
    }
    else {
        alert(`I chose ${npcChoice}, so you win! ${playerChoice} beats ${npcChoice}`);
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
/**
 * select an image function
 */
// function select_image(item){
//     if (item === "rock"){
//         img.src = "assets/images/rock.jpeg";
//     }
//     else if (item === "paper"){
//         img.src = "assets/images/paper.jpeg";
//     }
//     else if
//     (item === "scissors"){
//         img.src = "assets/images/scissors.jpeg";
//     }
//     else if
//     (item === "lizard"){
//         img.src = "assets/images/lizard.jpeg";
//     }
//     else if
//     (item === "spock"){
//         img.src = "assets/images/spock.jpeg";
// }
// }

/**
 * select the image to match the selection
 */
// function player_image(){
//     let buttons = document.getElementsByTagName("button");
//     for (let button of buttons) {
//         let img = document.querySelector("#your-image");
//         this.getAttribute("id");
//         button.addEventListener("click", select_image(item));
//         }}
            // if (button.id === "rock"){
            //     img.src = "assets/images/rock.jpeg";
            // }
            // else if (button.id === "paper"){
            //     img.src = "assets/images/paper.jpeg";
            // }
            // else if
            // (button.id === "scissors"){
            //     img.src = "assets/images/scissors.jpeg";
            // }
            // else if
            // (button.id === "lizard"){
            //     img.src = "assets/images/lizard.jpeg";
            // }
            // else if
            // (button.id === "spock"){
            //     img.src = "assets/images/spock.jpeg";
            // }})
    
/**
 * NPC plays the game
 */
// function npcImageSelect(){
//     let choice = Math.floor(Math.random() * 4)
//     let img = document.querySelector("#npc-image");

//     if (choice === 0) {

//     }