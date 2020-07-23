// task 1
var currentDate = new Date();
document.write(currentDate + "<hr /><br/>");

// task 2
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = currentDate.getMonth();
document.write("Current month: " + months[currentMonth] + "<hr /><br/>");

// task 3
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
var currentDay = currentDate.getDay();
document.write("Today is " + days[currentDay] + "<hr /><br/>");

// task 4
var day;
var day = days[currentDay];
if (day == days[0] || day == days[6]) {
    document.write("It's Fun Day<hr /><br/>");
}
else {
    document.write("Working Days<hr /><br/>");
}

// task 5
var date;
if (currentDate < 16) {
    document.write("First fifteen days of the month<hr /><br/>");
}
else {
    document.write("Last fifteen days of the month<hr /><br/>");
}

// task 6
var milliSeconds = currentDate.getTime();
var minutes = milliSeconds / (1000 * 60);
document.write("Current Date: " + currentDate + "<br/>");
document.write("Elapsed milliseconds since January 1, 1970: " + milliSeconds + "<br/>");
document.write("Elapsed minutes since January 1, 1970: " + minutes + "<hr /><br/>");

// task 7
var time;
var hours = currentDate.getHours();
if (hours >= 0 && hours < 12) {
    document.write("It's A.M<hr /><br/>");
}
else {
    document.write("It's P.M<hr /><br/>");
}

// task 8
var laterDate = new Date("Dec 31, 2020");
document.write(laterDate + "<hr /><br/>");

// task 9
var ramadan = new Date("Apr 25, 2020");
var ramadanDays = currentDate - ramadan;
var convertDays = ramadanDays / (1000 * 60 * 60 * 24);
var exactDays = Math.floor(convertDays);
document.write(exactDays + " days have passed since 1st Ramadan, 2020<hr /><br/>");

// task 10
var seconds = new Date("Jan 1, 2020");
var passSecs = seconds / (1000 * 60);
document.write("On reference date " + currentDate + ",<br/>");
document.write(passSecs + " seconds had passed since beginning of 2020<hr /></br>");

// task 11
var a = new Date();
document.write("Current date: " + a + "<br/>");

var hourAgo = new Date(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours()-1, a.getMinutes(), a.getSeconds(), a.getMilliseconds());
document.write("1 hour ago, it was " + hourAgo + "<br/><hr>");



// task 12
alert("Current date: " + a);
var yearAgo = new Date(a.getFullYear()-100, a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds());
alert("1 years back, it was " + yearAgo);



// task 13
var age = +prompt("write your age here..");
var byear = a.getUTCFullYear()-age;
document.write("Your age is: "+age+"<br>");
document.write("Your birth year is: "+byear+"<br><hr>");



// task 14
document.write("<h1>K-Electric Bill</h1>");

//a
var cName = prompt("Enter your name");
document.write("Customer Name: <b>"+cName+"</b><br>");

// b
var currMonth = a.getMonth();
document.write("Month: <b>"+months[currMonth]+"</b></br>");

// c 
var units = +prompt("Enter number of units you have used for this month");
document.write("Number of units: <b>"+units+"</b></br>");

// d
var chPunit = 16;
document.write("Charges per unit: <b>"+chPunit+"</b></br>");

// e
var netAmount = units*chPunit;
document.write("Net Amount Payable (within Due Date): <b>"+netAmount.toFixed(2)+"</b></br>");

// f
var late = 350.45;
document.write("Late payment surcharge: <b>"+late+"</b></br>");

// g
var grossAmount = netAmount+late;
document.write("Gross Amount Payable (after Due Date): <b>"+grossAmount.toFixed(2)+"</b></br>");

// chap 31-34 complete 