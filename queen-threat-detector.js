function generateBoard(whiteQueen,blackQueen){
  //generate a table
  let table = [];
  for (let i = 0; i <= 7; i++){
    table[i] =[];
    for(let j = 0; j<= 7;j++){
      if ((i === whiteQueen[0] && j === whiteQueen[1]) || (i === blackQueen[0] && j === blackQueen[1])){
        table[i][j] = 1;
      } else { 
      table[i][j]= 0;
      }
    }
  }
  return table;
}
function queenThreat(generateBoard){
  let threatLvl = false;
  //first check rows and columns
  let x = [];
  let y = []
  for (let i = 0; i < generateBoard.length; i++){
    for(let j = 0; j < generateBoard[i].length; j++){
      if (generateBoard[i][j] === 1){
        x.push(i);
        y.push(j);
      }
    }
  }
  if (x[0] === x[1] || y[0] === y[1]){
    threatLvl = true;
    return threatLvl;
  }  
    // then check angles
    let tile = [];
    console.log(tile.length);
    for (let i = 0; i < generateBoard.length; i++){
      for (let j = 0; j <  generateBoard[i].length; j++){
        if (generateBoard[i][j] === 1){
          //console.log(i + " , " + j);
          tile.push(i , j);
          //console.log(tile);          
        }
      }
    }
      if (Math.abs(tile[0]-tile[2]) === Math.abs(tile[1] - tile[3])){
      threatLvl = true;
      }

  return threatLvl;
}function generateBoard(whiteQueen,blackQueen){
  //generate a table
  let table = [];
  for (let i = 0; i <= 7; i++){
    table[i] =[];
    for(let j = 0; j<= 7;j++){
      if ((i === whiteQueen[0] && j === whiteQueen[1]) || (i === blackQueen[0] && j === blackQueen[1])){
        table[i][j] = 1;
      } else { 
      table[i][j]= 0;
      }
    }
  }
  return table;
}
function queenThreat(generateBoard){
  let threatLvl = false;
  //first check rows and columns
  let x = [];
  let y = []
  for (let i = 0; i < generateBoard.length; i++){
    for(let j = 0; j < generateBoard[i].length; j++){
      if (generateBoard[i][j] === 1){
        x.push(i);
        y.push(j);
      }
    }
  }
  if (x[0] === x[1] || y[0] === y[1]){
    threatLvl = true;
    return threatLvl;
  }  
    // then check angles
    let tile = [];
    console.log(tile.length);
    for (let i = 0; i < generateBoard.length; i++){
      for (let j = 0; j <  generateBoard[i].length; j++){
        if (generateBoard[i][j] === 1){
          //console.log(i + " , " + j);
          tile.push(i , j);
          //console.log(tile);          
        }
      }
    }
      if (Math.abs(tile[0]-tile[2]) === Math.abs(tile[1] - tile[3])){
      threatLvl = true;
      }

  return threatLvl;
}