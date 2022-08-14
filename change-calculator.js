const calculateChange = function(total, cash) {
  const moneyTypes = //get all the money types as keywords with values
    {
      twentyDollar: 0,
      tenDollar: 0,
      fiveDollar: 0,
      twoDollar: 0,
      oneDollar: 0,
      quarter: 0,
      dime: 0,
      nickel: 0,
      penny: 0
    };
  let finalMoneyTypes = {}; // define the final moneyTypes that we will return
  let change = cash - total; //figure out how much change there is
  if (change / 2000 > 1) { // in each dollar amount we check that the bill is divisible by the total...
    moneyTypes.twentyDollar = Math.floor(change/2000); //the we round down and add the value to the moneyTypes object
    change = change % 2000; //then we remove the amount from the change.
  } 
  if (change / 1000 > 1) {
    moneyTypes.tenDollar = Math.floor(change/1000);
    change = change % 1000;
  }
  if (change / 500 > 1) {
    moneyTypes.fiveDollar = Math.floor(change/500);
    change = change % 500;
  }
  if (change / 200 > 1) {
    moneyTypes.twoDollar = Math.floor(change/200);
    change = change % 200;
  }
  if (change / 100 > 1) {
    moneyTypes.oneDollar = Math.floor(change/100);
    change = change % 100;
  }
  if (change / 25 > 1) {
    moneyTypes.quarter = Math.floor(change/25);
    change = change % 25;
  }
  if (change / 10 > 1) {
    moneyTypes.dime = Math.floor(change/10);
    change = change % 10;
  }
  if (change / 5 > 1) {
    moneyTypes.nickel = Math.floor(change/5);
    change = change % 5;
  }
  if (change / 1 > 1) {
    moneyTypes.penny = change;
  }
  
  let keys = Object.keys(moneyTypes); // we grab the object keys as a variable
  let numbers = Object.values(moneyTypes); //we grab all the values associated with those keys
  
  for (let i = 0; i < keys.length ; i++){ //loop through the keys
    if (numbers[i] > 0){ // check that the values are larger than zero
     let newkey = keys[i]; // if they are add the key to a new variable and...
     let newNumber = numbers[i]; //add the number to a new variable
     finalMoneyTypes[newkey] = newNumber; //our objext finalMoneyTypes gets a new key and value for every value above 0
    }
  }
return finalMoneyTypes;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));const calculateChange = function(total, cash) {
  const moneyTypes = //get all the money types as keywords with values
    {
      twentyDollar: 0,
      tenDollar: 0,
      fiveDollar: 0,
      twoDollar: 0,
      oneDollar: 0,
      quarter: 0,
      dime: 0,
      nickel: 0,
      penny: 0
    };
  let finalMoneyTypes = {}; // define the final moneyTypes that we will return
  let change = cash - total; //figure out how much change there is
  if (change / 2000 > 1) { // in each dollar amount we check that the bill is divisible by the total...
    moneyTypes.twentyDollar = Math.floor(change/2000); //the we round down and add the value to the moneyTypes object
    change = change % 2000; //then we remove the amount from the change.
  } 
  if (change / 1000 > 1) {
    moneyTypes.tenDollar = Math.floor(change/1000);
    change = change % 1000;
  }
  if (change / 500 > 1) {
    moneyTypes.fiveDollar = Math.floor(change/500);
    change = change % 500;
  }
  if (change / 200 > 1) {
    moneyTypes.twoDollar = Math.floor(change/200);
    change = change % 200;
  }
  if (change / 100 > 1) {
    moneyTypes.oneDollar = Math.floor(change/100);
    change = change % 100;
  }
  if (change / 25 > 1) {
    moneyTypes.quarter = Math.floor(change/25);
    change = change % 25;
  }
  if (change / 10 > 1) {
    moneyTypes.dime = Math.floor(change/10);
    change = change % 10;
  }
  if (change / 5 > 1) {
    moneyTypes.nickel = Math.floor(change/5);
    change = change % 5;
  }
  if (change / 1 > 1) {
    moneyTypes.penny = change;
  }
  
  let keys = Object.keys(moneyTypes); // we grab the object keys as a variable
  let numbers = Object.values(moneyTypes); //we grab all the values associated with those keys
  
  for (let i = 0; i < keys.length ; i++){ //loop through the keys
    if (numbers[i] > 0){ // check that the values are larger than zero
     let newkey = keys[i]; // if they are add the key to a new variable and...
     let newNumber = numbers[i]; //add the number to a new variable
     finalMoneyTypes[newkey] = newNumber; //our objext finalMoneyTypes gets a new key and value for every value above 0
    }
  }
return finalMoneyTypes;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));const calculateChange = function(total, cash) {
  const moneyTypes = //get all the money types as keywords with values
    {
      twentyDollar: 0,
      tenDollar: 0,
      fiveDollar: 0,
      twoDollar: 0,
      oneDollar: 0,
      quarter: 0,
      dime: 0,
      nickel: 0,
      penny: 0
    };
  let finalMoneyTypes = {}; // define the final moneyTypes that we will return
  let change = cash - total; //figure out how much change there is
  if (change / 2000 > 1) { // in each dollar amount we check that the bill is divisible by the total...
    moneyTypes.twentyDollar = Math.floor(change/2000); //the we round down and add the value to the moneyTypes object
    change = change % 2000; //then we remove the amount from the change.
  } 
  if (change / 1000 > 1) {
    moneyTypes.tenDollar = Math.floor(change/1000);
    change = change % 1000;
  }
  if (change / 500 > 1) {
    moneyTypes.fiveDollar = Math.floor(change/500);
    change = change % 500;
  }
  if (change / 200 > 1) {
    moneyTypes.twoDollar = Math.floor(change/200);
    change = change % 200;
  }
  if (change / 100 > 1) {
    moneyTypes.oneDollar = Math.floor(change/100);
    change = change % 100;
  }
  if (change / 25 > 1) {
    moneyTypes.quarter = Math.floor(change/25);
    change = change % 25;
  }
  if (change / 10 > 1) {
    moneyTypes.dime = Math.floor(change/10);
    change = change % 10;
  }
  if (change / 5 > 1) {
    moneyTypes.nickel = Math.floor(change/5);
    change = change % 5;
  }
  if (change / 1 > 1) {
    moneyTypes.penny = change;
  }
  
  let keys = Object.keys(moneyTypes); // we grab the object keys as a variable
  let numbers = Object.values(moneyTypes); //we grab all the values associated with those keys
  
  for (let i = 0; i < keys.length ; i++){ //loop through the keys
    if (numbers[i] > 0){ // check that the values are larger than zero
     let newkey = keys[i]; // if they are add the key to a new variable and...
     let newNumber = numbers[i]; //add the number to a new variable
     finalMoneyTypes[newkey] = newNumber; //our objext finalMoneyTypes gets a new key and value for every value above 0
    }
  }
return finalMoneyTypes;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));const calculateChange = function(total, cash) {
  const moneyTypes = //get all the money types as keywords with values
    {
      twentyDollar: 0,
      tenDollar: 0,
      fiveDollar: 0,
      twoDollar: 0,
      oneDollar: 0,
      quarter: 0,
      dime: 0,
      nickel: 0,
      penny: 0
    };
  let finalMoneyTypes = {}; // define the final moneyTypes that we will return
  let change = cash - total; //figure out how much change there is
  if (change / 2000 > 1) { // in each dollar amount we check that the bill is divisible by the total...
    moneyTypes.twentyDollar = Math.floor(change/2000); //the we round down and add the value to the moneyTypes object
    change = change % 2000; //then we remove the amount from the change.
  } 
  if (change / 1000 > 1) {
    moneyTypes.tenDollar = Math.floor(change/1000);
    change = change % 1000;
  }
  if (change / 500 > 1) {
    moneyTypes.fiveDollar = Math.floor(change/500);
    change = change % 500;
  }
  if (change / 200 > 1) {
    moneyTypes.twoDollar = Math.floor(change/200);
    change = change % 200;
  }
  if (change / 100 > 1) {
    moneyTypes.oneDollar = Math.floor(change/100);
    change = change % 100;
  }
  if (change / 25 > 1) {
    moneyTypes.quarter = Math.floor(change/25);
    change = change % 25;
  }
  if (change / 10 > 1) {
    moneyTypes.dime = Math.floor(change/10);
    change = change % 10;
  }
  if (change / 5 > 1) {
    moneyTypes.nickel = Math.floor(change/5);
    change = change % 5;
  }
  if (change / 1 > 1) {
    moneyTypes.penny = change;
  }
  
  let keys = Object.keys(moneyTypes); // we grab the object keys as a variable
  let numbers = Object.values(moneyTypes); //we grab all the values associated with those keys
  
  for (let i = 0; i < keys.length ; i++){ //loop through the keys
    if (numbers[i] > 0){ // check that the values are larger than zero
     let newkey = keys[i]; // if they are add the key to a new variable and...
     let newNumber = numbers[i]; //add the number to a new variable
     finalMoneyTypes[newkey] = newNumber; //our objext finalMoneyTypes gets a new key and value for every value above 0
    }
  }
return finalMoneyTypes;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));