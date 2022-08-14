const numberOfVowels = function(data) {
  totalVowels = 0;
  for (let i in data){
    if (data[i] === "a" || data[i] === "a" || data[i] === "e" || data[i] === "i" || data[i] === "o" ||data[i] === "u"){
      totalVowels = totalVowels + 1;
    }
  }
  return totalVowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));