let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll('.choice')
console.log(choices);
let msg = document.querySelector("#msg")

const userScoreCount = document.querySelector('#user-score')
const compScoreCount = document.querySelector('#comp-score')

const getCompChoice = () => {
    const options = ["rock", "paper","scissor"]
    const randomIdx = Math.floor(Math.random() * 3)
    return options[randomIdx]
}

console.log(getCompChoice());

const drawGame = () => {
    msg.innerText = "match draw"
    msg.style.backgroundColor = "yellow"
    msg.style.color = "white"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScoreCount.innerText = userScore;
        msg.innerText = `you win ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }else{
        compScore++;
        compScoreCount.innerText = compScore;
        msg.innerText = `you lost ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}


// //play game 
// const playGame = (userChoice) => {
//   // generate computer choice
//   const compChoice = getCompChoice()

//   if (userChoice === compChoice) {
//       console.log("match draw");
//   }else{
//     let userWin = true;
//     if (userChoice == "rock") {
//         userWin = compChoice === 'paper' ? false : true;
//     }else if(userChoice === 'paper'){
//         compChoice === 'scissor' ? false : true;
//     }else{
//         compChoice === 'rock' ? false : true;
//     }
//     showWinner(userWin, userChoice, compChoice)
//   }
// }

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = getCompChoice();
  
    if (userChoice === compChoice) {
      //Draw Game
      drawGame();
    } else {
      let userWin = true;
      if (userChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissor" ? true : false;
      } else {
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
    }
  };


choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute('id')
        playGame(userChoice)
    })
})