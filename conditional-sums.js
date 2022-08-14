const conditionalSum = function(values, condition) {
  a = 0;
  for (let i in values){
    if (condition === "even"){
      if (values[i] % 2 === 0){
        a = a + values[i];
      } 
    } else if (condition === "odd") {
      if (values[i] % 2 !== 0) {
        a = a + values[i];
      }  
    }
  }
  return a;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));