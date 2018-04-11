var playerScore =0;
var computerScore=0;


//computer generates a random number to be assigned to Rock Paper or scissors  
function computerPlay(){
var x = Math.floor((Math.random() * 3) + 1)
 if( x === 1) {
         return "Rock";
}else if (x===2) {
	 return "Paper";
}else  { return "Scissors" }
}



//plays a round
function playRound(playerSelection, computerSelection){


if (playerSelection ==="Rock" && computerSelection==="Scissors"){
	      document.getElementById("result").innerHTML = "You win, Rock beats Scissors";
        playerScore++;
        document.getElementById("count").innerHTML =`<strong>Computer</strong><span id="tab1">${computerScore}</span></br><strong>Player</strong><span id="tab2">${playerScore}</span>`;
}
else if (playerSelection === "Scissors" && computerSelection==="Paper"){
       document.getElementById("result").innerHTML = "You  win, Scissors beat paper";
        playerScore++; 
        document.getElementById("count").innerHTML=`<strong>Computer</strong><span id="tab1">${computerScore}</span></br><strong>Player</strong><span id="tab2">${playerScore}</span>`;
}
else if (playerSelection === "Paper" && computerSelection==="Rock"){
      document.getElementById("result").innerHTML = "You  win, Paper beat Rock";
       playerScore++;
        document.getElementById("count").innerHTML=`<strong>Computer</strong><span id="tab1">${computerScore}</span></br><strong>Player</strong><span id="tab2">${playerScore}</span>`;
}
else if(playerSelection === computerSelection){
       document.getElementById("result").innerHTML=" Its a draw";
}
else if (computerSelection === "Rock" && playerSelection ==="Scissors"){
  document.getElementById("result").innerHTML= "Computer wins, Rock beats Scissors" ;
        computerScore++;
        document.getElementById("count").innerHTML=`<strong>Computer</strong><span id="tab1">${computerScore}</span></br><strong>Player</strong><span id="tab2">${playerScore}</span>`;
}

else if (computerSelection === "Paper" && playerSelection ==="Rock"){
   document.getElementById("result").innerHTML="Computer wins, Paper beats Rock";
        computerScore++;2
        document.getElementById("count").innerHTML=`<strong>Computer</strong><span id="tab1">${computerScore}</span></br><strong>Player</strong><span id="tab2">${playerScore}</span>`;
}

else if (computerSelection === "Scissors" && playerSelection === "Paper") { 
         document.getElementById("result").innerHTML="Computer wins, Scissors beat paper";
        computerScore++; 
        document.getElementById("count").innerHTML =`<strong>Computer</strong><span id="tab1">${computerScore}</span></br><strong>Player</strong><span id="tab2">${playerScore}</span>`;
}
}

 // event listeners
   
// we use the .forEach method to iterate through each button
document.querySelectorAll('button').forEach(function(button) {

  // and for each one we add a 'click' listener
  button.addEventListener('click', function()  {
    const playerSelection =button.id;
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    final();
  });
  
 });


//winner and loser logic
function final(){

 if (playerScore > 4 && playerScore > computerScore){
  getConfirmation('player');
  }
else if (computerScore > 4 && computerScore > playerScore){
  getConfirmation('computer')
  }
}

//prompt whether to retart or stop the game
function getConfirmation(winner){
               var  restart= confirm(`Game ended !!! ${winner} won! , Would you like to play again ?`)
               if( restart == true ){
                  location.reload();
                  return true;
               }
               else{
                  document.getElementById("greeting").innerHTML="<strong> GoodBye !! </strong>";
                  return false;
               }
            }