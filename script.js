/**
 * Guess The Number Game
 * TODO: Get user value from input and save it to variable numberGuess
 * TODO: Generate a random number 1 to 100 and save it to variable correctNumber
 * TODO: Console whether the guess is too high, too low, or is correct inside playGame function
 * TODO: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * TODO: Complete the showYouWon, showNumberAbove, showNumberBelow
 * TODO: Use the showYouWon... functions within displayResult to display the correct dialog
 * TODO: Save the guess history in a variable called guess
 * TODO: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 

// Variable for store the correct random number 


window.onload = function() {
  getRandomNumber();
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
   
 }
 
/**
 * Functionality for playing the whole game
 */
var RandomNum=Math.floor(Math.random() * 100); 
var UserRandom = new Array();
let x=0;
function playGame(){
  /** Enter Value in Array*/
  if(x<=2){
    
    UserRandom[x] = document.getElementById("number-guess").value;
     /** Compare Rendom number to user input*/
      if(UserRandom[x]>RandomNum){
        showNumberAbove();
        console.log("jada h");
        }
      else if(UserRandom[x]<RandomNum){
        showNumberBelow();
        console.log("kam h");
      }
      else if(UserRandom[x]==RandomNum){
        showYouWon();
        console.log("equal h");
      }
  }
   /** End after 3 chances*/
  else{
    alert("End Chances");
  }
  x++;
  document.getElementById("number-guess").value = "";

   /** Go for display*/
  saveGuessHistory(UserRandom[x]);
}

/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement 
 */
// *CODE GOES BELOW HERE *



/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame(){
  // *CODE GOES BELOW HERE *

  UserRandom=[];
  saveGuessHistory();
  resetResultContent();
  x=0;
  RandomNum=Math.floor(Math.random() * 100); 
  getRandomNumber(RandomNum)
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random 
 */
function getRandomNumber(a){
  // *CODE GOES BELOW HERE *
 
    console.log(RandomNum);
    // localStorage.setItem('RandomNum', RandomNum);
    // var RandomNum = localStorage.getItem('RandomNum');
    
    // console.log(RandomNum);
}

/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory() {
  // *CODE GOES BELOW HERE *  
  var e = "<hr/>";   
  UserRandom.sort();
   for (var y=0; y<UserRandom.length; y++)
   {
     e += "You Guess " + " = " + UserRandom[y] + "<br/>"; 
   }
   document.getElementById("history").innerHTML = e;
   UserRandom.sort();
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
  let index; // TODO
  let list = "<ul class='list-group'>";
  // *CODE GOES BELOW HERE *
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  var dialog=getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
 
}

function showNumberAbove(){
  for(var i=0;i<=UserRandom.length;i++)
  {
      const text = "Your guess is too high!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  dialog=getDialog("warning",text);
  document.getElementById("result").innerHTML = dialog;
    }

}

function showNumberBelow(){
  const text = "Your guess is too low!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  dialog=getDialog("warning",text);
  document.getElementById("result").innerHTML = dialog;
}
