const organizeInstructors = function(instructors) {
  let coursenames = [instructors[0].course]; //take in the first course name and add it to a variable for comparing later.
  let myObj = {[instructors[0].course]: [instructors[0].name]}; //create an object with the first course and instructor information.
  let organized ={}; //this is the final object we will return at the end.
  Object.assign(organized, myObj); //assigning the first myObj to the organized that we will return This looks like {courseName: [instructorsName],}
  
  for (let i = 1; i < instructors.length; i++){ //cycle throught the instructors
    let areYouThere = false; //Get a boolean to tell us that the course is true or false inside the coursenames
    for (let j = 0; j < coursenames.length; j++) { //cycle through the coursenames and compare to the instructors
      if (instructors[i].course == coursenames[j]){ //if the instructors.course is the same as the coursenames
      areYouThere = true; //the boolean becomes true
      let instructorName = instructors[i].name //assign a new variable to the instructors name
      organized[coursenames[j]].push(instructorName); //push the intructors name into the appropriate course id
      }
    }
    if (!areYouThere){ //if the instructors.course does not exist
      coursenames.push([instructors[i].course]); //push the coursename into course names so we can check again.
      let myobj = {[instructors[i].course]: [instructors[i].name]};  //create a new object like we did at the start
      Object.assign(organized, myobj);//assign this new object to the organized object. Now it has the coursename and the first instructor it found.
    }
  }
  return organized;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));