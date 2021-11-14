var todayFullDate = new Date();
var todayTime = todayFullDate.getTime();
var todayMonth = todayFullDate.getMonth() + 1;
var todayDate = todayFullDate.getDate();
var todayDay = todayFullDate.getDay();
var todayHour = todayFullDate.getHours();
var todayYear = todayFullDate.getYear();
var todayFullYear = todayFullDate.getFullYear();

console.log(todayFullDate);
console.log(todayTime);
console.log(todayMonth);
console.log(todayDate);
console.log(todayDay);
console.log(todayHour);
console.log(todayYear);
console.log(todayFullYear);

document.getElementById("theDate").innerHTML = (todayDate) + "/" + (todayMonth) + "/" + (todayFullYear) + "/" + (todayHour);

function stopTime(){
  document.getElementById("theDate")
  var stop = new Date;
}
