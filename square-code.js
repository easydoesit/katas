const squareCode = function(message) {
  let finalCode = ""; //this is what we return;
  //  we need to get the stringwithoutpsaces and it's length
  let messageNoSpaces = message.replace(/ /g, "");
  let rowLength = Math.ceil(Math.sqrt(messageNoSpaces.length));
  // we need an array to break up the message
  let messageBreak = [];
  // we need str variable to store each row in message break
  let messageStore = "";
    for (let i = 0 ; i <= messageNoSpaces.length ; i++) {
      if (messageStore.length === rowLength || i >= messageNoSpaces.length){
        messageBreak.push(messageStore);
        messageStore = messageNoSpaces[i];
      } else {
        messageStore = messageStore + messageNoSpaces[i];
      }
    }
  
  //we need to be able to build a new string
  let messageScramble = "";
  //in a new Array
  let codeArr = [];
  // for each index of the letters in the array we need to put them in
  // a new row that matches their index
  for (let i in messageBreak){ // count through each of the rows
    for (let j = 0; j < messageBreak[i].length; j++){ //then count through the string in the row
      if (codeArr[j]){ //check to make sure codeArr[j] is not underfined
      codeArr[j] = codeArr[j] + messageBreak[i][j];
      } else {
        codeArr[j]= messageBreak[i][j];
      }
    }
  }
  //for each item in the array add it to the final string
  for (let i in codeArr){
    if (i > 0){
    finalCode = finalCode + " " + codeArr[i];
    } else {
      finalCode = finalCode + codeArr[i];
    }
  } 
  console.log(codeArr);
  return finalCode;

};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));const squareCode = function(message) {
  let finalCode = ""; //this is what we return;
  //  we need to get the stringwithoutpsaces and it's length
  let messageNoSpaces = message.replace(/ /g, "");
  let rowLength = Math.ceil(Math.sqrt(messageNoSpaces.length));
  // we need an array to break up the message
  let messageBreak = [];
  // we need str variable to store each row in message break
  let messageStore = "";
    for (let i = 0 ; i <= messageNoSpaces.length ; i++) {
      if (messageStore.length === rowLength || i >= messageNoSpaces.length){
        messageBreak.push(messageStore);
        messageStore = messageNoSpaces[i];
      } else {
        messageStore = messageStore + messageNoSpaces[i];
      }
    }
  
  //we need to be able to build a new string
  let messageScramble = "";
  //in a new Array
  let codeArr = [];
  // for each index of the letters in the array we need to put them in
  // a new row that matches their index
  for (let i in messageBreak){ // count through each of the rows
    for (let j = 0; j < messageBreak[i].length; j++){ //then count through the string in the row
      if (codeArr[j]){ //check to make sure codeArr[j] is not underfined
      codeArr[j] = codeArr[j] + messageBreak[i][j];
      } else {
        codeArr[j]= messageBreak[i][j];
      }
    }
  }
  //for each item in the array add it to the final string
  for (let i in codeArr){
    if (i > 0){
    finalCode = finalCode + " " + codeArr[i];
    } else {
      finalCode = finalCode + codeArr[i];
    }
  } 
  console.log(codeArr);
  return finalCode;

};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));