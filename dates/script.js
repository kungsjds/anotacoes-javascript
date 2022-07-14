// Create the date object. It takes hardware(PC, cell phone, etc) date by defult.
let date = new Date();

// Return the current date in milliseconds (From 1970 to the current date. (Javascript starts counting from januray 1, 1970))
let another_date = Date.now();
console.log(another_date);

// Some date params. OBS: 0 = January, 11 = December. Months are like arrays, starting from 0.
date = new Date(2022, 0, 4);

//                Y   M  
date = new Date(2022, 5);

//                Y    M   D  H  Min  S              
date = new Date(2022, 11, 30, 5, 30, 15)

date = new Date('2022-12-04 00:00:00');

//              Milliseconds                
date = new Date(225656765647);

res = date;

// toDateString() = Returns summarized date
res = date.toDateString();

// toUTCString() = Convert the date to standard time (GMT = Greenwich Mean Time)
res = date.toUTCString();


let date2 = new Date();

// getFullYear() = Return only the year
res = date2.getFullYear();

// getMonth() = Return only the month number (from 0-January to 11-December)
res = date2.getMonth();

// getDay() = Return only the number of the day of the week (from 0-Sunday to 6-Saturday). The week starts from Sunday(0)
res = date2.getDay();

// getDate() = Return only the day number (1-31/30)
res = date2.getDate();

// getHours() = Return only the hour
res = date2.getHours();

// getMinutes() = Return only the minutes
res = date2.getMinutes();

// getSeconds() = Return only the seconds
res = date2.getSeconds();

// getMilliseconds() = Return only the milliseconds
res = date2.getMilliseconds();

// getTime() = Return the milliseconds from 1970 to the current date. (Javascript starts counting from januray 1, 1970)
res = date2.getTime();

console.log(res);