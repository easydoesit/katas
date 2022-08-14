const talkingCalendar = function(date) {
  let arr = []; //create an array to store the date as written
  let str = ''; // this string will parce up each part that we need
  let finalDate ='';
  for (let i = 0; i <= date.length; i++){ //loop through the date string
    if (date[i] !== "/" && date[i] <= date.length){ //if we don't see the "/" or go past the end of the string
      str = str + date[i];//add the letter to the new str
    } else { // otherwise we want to skip the letter or end the loop...
      arr.push(Number(str)); //and push the str into arr [year, month, day] to rewrite it later
      str = ''; //clear the string every time we see "/" or the end of the str.
    }
  };
  const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
  let month = ''; // we need to get a friendly language version of the month stored here
  for (let i in months){ // cycle through the months
    if (Number(i) + 1 === arr[1]){ //if the number in months correspond to whats in array
    month = months[i]; // grab the month
    }
  }
    str = arr[2].toString(); // we need to convert the number to a string
    str = str.slice(-1); // so we can slice it and get the last character
    //console.log(str);
    let day = '';
    if (str === 1 ){ // now we check if its 1, 2, 3, or 4 and <4
      day = arr[2] + "st";
    } else if (str === 2){
      day = arr[2] + "nd";
    } else if (str === 3){
      day = arr[2] + "rd";
    } else {
      day = arr[2] + "th";
    }
  finalDate = month + " " + day + ", " + arr[0]; // create the final date with all our info
  return finalDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));