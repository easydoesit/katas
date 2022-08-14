const urlDecode = function(text) {
  let finalDecode = {}; // this is the final object that will be returned
  let stringPairs = ''; //a place to store each key and value pair as a string
  let valuePairArr = [];//an array to store each Key and value as a string
  
  //loop through the text and seperate all the key and values into valuePairArr
  for (let i in text) { 
    stringPairs = stringPairs + text[i];
    for (let j = 0; j <= stringPairs.length; j++) {
      if(stringPairs[j] === "&" || i  >= text.length -1){
        stringPairs = stringPairs.replace('&',"");
        valuePairArr.push(stringPairs);
        stringPairs = '';
      }
    }
  }
  //loop through each set of key and values and clean up the text
  for (let i in valuePairArr){
    stringPairs = valuePairArr[i];
    stringPairs = stringPairs.replace(/%20/g, " ");
    let stringKeyValues = ''
    let key = "";
    let value = "";
    //loop through the cleaned up string and seperate the key from the value
    //store the key and value in a tempObject that
    //assigns the key and value to the finalDecode object
    for (let j in stringPairs){
      stringKeyValues = stringKeyValues + stringPairs[j];
      for (let k = 0; k <= stringKeyValues.length; k++){
        if (stringKeyValues[k] === "="){
        let stringKey = stringKeyValues.replace("=", ""); 
        key = stringKey;
        stringKeyValues = "";
        }
        if (j >= stringPairs.length -1){
          value = stringKeyValues;
          stringKeyValues = "";
          let tempObject = {[key]: value};
          Object.assign(finalDecode,tempObject);
        }
      }
    }
  }
  return finalDecode;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);