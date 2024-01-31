function leapYear(year){

    // return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    if(year % 4 ===0 && year % 100 !== 0){
        return console.log("Nam nhuan " + year );
        
    } else 
    return console.log("Ko phai nam nhuan " + year );
}

console.log(leapYear(2104));


