const sumLargestNumbers = function(data) {
  //make 3 number containers
  let largest = 0;
  let secondLargest = 0;
  let holder = 0
  for (let i in data){ //cycle throught the data to get the biggest number
    if (data[i] > largest){
      largest = data[i];  
    } 
  }
  for (let i in data){
    if (data[i] > secondLargest && data[i] < largest){ //compare the numbers to get the second biggest number
      secondLargest = data[i];
      holder = data[i];
    } else {
      secondLargest = holder;
    }
  }
return secondLargest + largest;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));