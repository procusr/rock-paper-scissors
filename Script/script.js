function computerPlay(){
var x = Math.floor((Math.random() * 3) + 1)
 if( x === 1) {
         return "Rock";
}else if (x===2) {
	 return "Paper";
}else  { return "Scissors" }
}

function playRound(playerSelection, computerSelection){
if (playerSelection.toUpperCase() ==="ROCK" && computerSelection=="Scissors"){
	       return "You win, Rock beats Scissors";
}
else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection=="Paper"){
        return "You win, Scissors beat paper";
}
else if (playerSelection.toUpperCase() === "PAPER" && computerSelection=="Rock"){
        return "You win, Paper beats Rock ";
}
else if(playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        return " Its a draw";
}
else{
        return "Computer Wins  " +  computerSelection +  "  beats " + playerSelection;
 }
}
function game(){
  var countComputer=0;
  var countPlayer=0;
  for(var i=0; i < 5; i++){
  const userInput = prompt("Enter 'Scissors' 'Rock' or 'Paper': ");
  const playerSelection = userInput.charAt(0).toUpperCase() + userInput.slice(1);
  const computerSelection = computerPlay();
  const count = playRound(playerSelection, computerSelection);
  console.log(count);
  if(count.charAt(0) === "Y"){
    countPlayer++;
  }
  else if (count.charAt(0) === "C"){
    countComputer++;
  }
}
console.log(`Player: ${countPlayer}`);
console.log(`Computer: ${countComputer}`);
if (countPlayer > countComputer){
  console.log("**You won**")
}
else if (countComputer > countPlayer){
  console.log("**Computer Won**")
}
else if (countPlayer==countComputer){
  console.log("**Its a draw **")
}
}
game();
