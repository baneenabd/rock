function getuserinput(){
let userInput=prompt("roc,Paper,Scissors");


return userInput;

}
   function ComputerChoice() {
      const Choices= ['roc','Paper','Scissors'] 
    let randomIndex = Math.floor (Math.random()*3);
    
return Choices[randomIndex];
   }
   // console.log(getcomputerChoice());

function getcomputerChoice(){

   let computerChoice = ComputerChoice();
   return computerChoice;

}
function determineWinner(computerChoice,userInput){

   if (userInput===computerChoice){
      console.log ("its a tie");

   } else if(
      (userInput==="Scissors" && computerChoice==="paper")
      (userInput==="paper" && computerChoice==="rock")
      (userInput==="rock" && computerChoice==="scissors")
   ){
      console.log("you won");
   }else{
      console.log("try again loser")
   }
};

  
 getuserinput();
