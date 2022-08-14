const urlEncode = function(text) {
  let str = "";
  const textLength = text.length;
  if (text[textLength -1] === " "){
    text = text.slice(0,text.length -1);
  }
  if (text[0] === " "){
    text = text.slice(1);
  }
  for (let i in text){
    if (text[i] === " "){
      str += "%20";
    } else {
      str += text[i];
    }
  }
  return str;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));