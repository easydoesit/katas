const makeCase = function(input, cases) {
  // create the endStr that we will return at the end of the function
  let endStr = '';
  // create the array that will hold the cases
  const caseType = [];
  //check if the cases are already an array
  //if they are push each individual item into caseType
  if (Array.isArray(cases)){
    for (i in cases){
      caseType.push(cases[i]);
    }
  //if they are not an array push the string into the castType
  } else {
    caseType.push(cases);
  }

  //loop through all the types in Casetype
  for (let all in caseType){

    if (caseType[all] === "camel"){
      let fullStr = input;
      let caps = false;
      for(let i in input){
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
    }

    if (caseType[all] === "pascal"){
      let fullStr = input;
      let caps = false;
      for(let i in input){
        if (fullStr[i] === " " || i <= 0){
          caps = true;
        }
        if (fullStr[i] !== " " && caps === false){
        endStr = endStr + fullStr[i];  
        } 
        if (fullStr[i] !== " " && caps === true){
          endStr = endStr + fullStr[i].toUpperCase();
          caps = false;
        }
      } 
    }

    if (caseType[all] === "snake"){
      let fullStr = input;
      //because snake can mix with other types we have to
      //check if endStr already has a string if it does
      //fullstring needs to take it and we need to clear endStr
      if (endStr){
        fullStr = endStr;
        endStr = ""
      }
      for(let i in input){
        if (fullStr[i] === " "){
        endStr = endStr + "_";  
        } else {
          endStr = endStr + fullStr[i];
        }
      } 
    }

    if (caseType[all] === "kebab"){
      let fullStr = input;
      //because kebab can mix with other types we have to
      //check if endStr already has a string if it does
      //fullstring needs to take it and we need to clear endStr
      if (endStr){
        fullStr = endStr;
        endStr = ""
      }
      for(let i in input){
        if (fullStr[i] === " "){
        endStr = endStr + "-";  
        } else {
          endStr = endStr + fullStr[i];
        }
      } 
    }

    if (caseType[all] === "title"){
      let caps = true;
      let fullStr = input;
      for(let i in input){
        if (fullStr[i] === " " || i <= 0){
          caps = true;
        }
        if (caps === true && fullStr[i] !==  " "){
        endStr = endStr + fullStr[i].toUpperCase();
        caps = false;
        } else {
          endStr = endStr + fullStr[i];
        }
      } 
    }

    if (caseType[all] === "vowel"){
      const vowels = ["a","e","i","o","u"];      
      let fullStr = input;
      for(let i in input){
        let vowelCheck = fullStr[i];
        for (j in vowels){
          if (fullStr[i] === vowels[j]){
            vowelCheck = fullStr[i].toUpperCase()
          } 
        }
        endStr = endStr + vowelCheck;
      } 
    }

    if (caseType[all] === "consonant"){
      const vowels = ["A","E","I","O","U"];      
      let fullStr = input.toUpperCase();
      for(let i in input){
        let vowelCheck = fullStr[i];
        for (j in vowels){
          if (fullStr[i] === vowels[j]){
            vowelCheck = fullStr[i].toLowerCase()
          } 
        }
        endStr = endStr + vowelCheck;
      }  
    }

    if (caseType[all] === "upper"){
      let fullStr = input;
      endStr = fullStr.toUpperCase(); 
    }

    if (caseType[all] === "lower"){
      let fullStr = input;
      endStr = fullStr.toLowerCase(); 
    }

  }
  return endStr;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));