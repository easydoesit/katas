const numberGuess = function(input){
  let random = Math.round((Math.random() * 100) + 1);
  let answer = input;
  answer = +answer;
  let history = [];

  function checkhistory(_answer) {
    if (!isNaN(answer)) {
      let state = false
      //console.log(history);
      if (!history.includes(answer)){
      history.push(answer);
      } else {
        state = true;
      }
      return state;
    } else {
      return false;
    }
  }
  
  do {
    answer = input;
    answer = +answer;
    //console.log(input);
    //console.log(answer);
    //console.log(random);
    //console.log(history);
    if (random === answer){
      history.push(answer);
      console.log( "You got it! You took " + history.length + " attempts");
      return;
    } 
    //console.log(checkhistory(answer));
    if (typeof answer === 'string' || answer instanceof String || isNaN(answer) || answer == " "){
      console.log("Not a number! Try again!");
      input = prompt("Guess a number: ");
    } else if (checkhistory(answer)){     
      console.log("Already Guessed!");
      input = prompt("Guess a number: ");
    } else if (answer > random){
      console.log("Too High!");
      input = prompt("Guess a number: ");
    } else if (answer < random){
      console.log("Too Low!");
      input = prompt("Guess a number: ");
    }
  } while (random !== answer);
}
let prompt = require("prompt-sync")({sigint: true});
let input = prompt("Guess a number: ");
numberGuess(input);