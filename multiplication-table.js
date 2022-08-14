const multiplicationTable = function(maxValue) {
  let table = []; //make a table
  let str = ""; // make string
  if (maxValue > 1){ //if our max value is greater than 1 continue
    for (let x = 0; x < maxValue; x++){
      table[x] = []; //add a new row
      table[x][0] = x + 1; // each row counts up
      for(let y = 0; y < maxValue; y++){
        table[x][y] = (x +1) * (y+1); //multiply the values to create the table
      }
    }
    for (let i in table){
      for (let j = 0; j < table[i].length ;j++){
        if (j === 0){ // if the row starts at 0 just add the number
          str = str + table[i][j];
        } else if (table[i][j] % maxValue === 0 && j === table[i].length -1){ //when you come to the end of the row add a newline
          str = str + " " + table[i][j] + "\n";
        } else { //otherwise add a number and a space
        str = str + " " + table[i][j];
        }
      }
    }
  } else { // if our value is only 1 we only need 1 value so we grab it and convert to string.
    for (let x = 0; x < maxValue; x++){
      table[x] = [];
      table[x][0] = x + 1;
      str = table[x][0]; //add table to string
      str = str.toString() + "\n"; //convert integer to string - a 1 number table is complete.
    }
  }
  //console.log(table.length);
  return str;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(2));
console.log(multiplicationTable(10));