const repeatNumbers = function(data) {
  let str = "";
  const cap = ", "
  for(let i in data){
    let cycle = data[i][1]
    for (let j = 0; j < cycle; j++){
    str = str + data[i][0];
    }
    if (i < data.length - 1){
      str = str + cap;
    }
  }
  return str;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));