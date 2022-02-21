const getUserChoice = userInput => {
  // userInput = userInput.toLowerCase();

  if(userInput === "rock" || userInput === "paper" || userInput === "scissors") {
    return userInput;
  } else{
    console.log("Error!")
  };
};



let getComputerChoice = computerChoice => {
  computerChoice = Math.floor(Math.random() * 3);
  switch(computerChoice) {
  case 0:
    return "rock";
    break;
  case 1:
    return "paper";
    break;
  case 2:
    return "scissors";
    break;
  };
};

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "The game was a tie!";
  }else if (userChoice === 'rock') {
    return ""
  }
  console.log(determineWinner);
};

console.log(getUserChoice("paper"));
console.log(getComputerChoice());
console.log(determineWinner());