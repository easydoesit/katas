const camelCase = function(input) {
  let endStr = '';
  let caps = false;
  for(let i in input){
    let fullStr = input;
    if (fullStr[i] === " "){
      caps = true;
    }
    if (fullStr[i] !== " " && caps === false){
    endStr = endStr + fullStr[i];  
    } if (fullStr[i] !== " " && caps === true){
      endStr = endStr + fullStr[i].toUpperCase();
      caps = false;
    }
  } 
  return endStr;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));