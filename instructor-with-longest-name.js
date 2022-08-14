const instructorWithLongestName = function(instructors) {
  let longestName = [{name:'', course:''}];
  let nameLength = 0;
  for (let i in instructors){
    if (instructors[i]['name'].length > nameLength){
      longestName = instructors[i];
      nameLength = instructors[i]['name'].length;
    }
  }
  return longestName;
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));