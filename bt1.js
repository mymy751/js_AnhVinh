// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

var date = new Date();

var day = date.getDay();

var hour = date.getHours();
var min = date.getMinutes();
var second = date.getSeconds();

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log("Today is: " + days[day]);



var temp;

if(hour <= 12){
    temp = 'AM';
    hour;
} else {
    temp = 'PM';
    hour = hour - 12;
}

console.log("Current time is: " + hour + temp + ":" + min + ":" + second);
