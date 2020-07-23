// task 1
var A = +prompt("Enter any number");
document.write("<b>Result:</b></br>");
document.write("The value of a is: " + A + "</br>");
document.write("---------------------------------</br></br>");
document.write("The value of ++a is: " + ++A + "</br>");
document.write("Now the value of a is " + A + "</br></br>");
document.write("The value of a++ is: " + A++ + "</br>");
document.write("Now the value of a is: " + A + "</br></br>");
document.write("The value of --a is: " + --A + "</br>");
document.write("Now the value of a is: " + A + "</br></br>");
document.write("The value of a-- is: " + A-- + "</br>");
document.write("Now the value of a is: " + A + "</br></br></br>");



// task 2
var a = 2;
var b = 1;
document.write("a is: " + a + "</br>");
document.write("b is: " + b + "</br>");
var result = --a - --b + ++b + b--;
// *****Explaination of result******
// a                        = 2
// --a                      = 1
// --a - --b                = 1 - 0                  = 1
// --a - --b + ++b          = 1 - 0 + 1              = 2
// --a - --b + ++b + b--    = 1 - 0 + 1 + 1          = 3   
document.write("result is: " + result + "</br></br>");



// task 3
var yourName = prompt("Write your name here");
alert("Hello! Welcome <b>" + yourName + "</b> :)");



// task 4
var tableNum = +prompt("Write a number for any Table", 5);
// task 5
document.write("<b>Table of " + tableNum + " </b></br>");
document.write(tableNum + " X " + 1 + " = " + tableNum*1 + "</br>");
document.write(tableNum + " X " + 2 + " = " + tableNum*2 +"</br>");
document.write(tableNum + " X " + 3 + " = " + tableNum*3 +"</br>");
document.write(tableNum + " X " + 4 + " = " + tableNum*4 +"</br>");
document.write(tableNum + " X " + 5 + " = " + tableNum*5 +"</br>");
document.write(tableNum + " X " + 6 + " = " + tableNum*6 +"</br>");
document.write(tableNum + " X " + 7 + " = " + tableNum*7 +"</br>");
document.write(tableNum + " X " + 8 + " = " + tableNum*8 +"</br>");
document.write(tableNum + " X " + 9 + " = " + tableNum*9 +"</br>");
document.write(tableNum + " X " + 10 + " = " + tableNum*10 +"</br></br></br>");




// task 6
// a 
var subject1 = prompt("Write 1st subject name","English");
var subject2 = prompt("Write 2nd subject name","Urdu");
var subject3 = prompt("Write 3rd subject name","Maths");
// b 
var totalMarks = 100;
// c 
var obtainMark1 = +prompt("Enter your obtained marks in " + subject1);
// d 
var obtainMark2 = +prompt("Enter your obtained marks in " + subject2);
var obtainMark3 = +prompt("Enter your obtained marks in " + subject3);
// e 
var percentage1 = (obtainMark1/totalMarks)*100;
var percentage2 = (obtainMark2/totalMarks)*100;
var percentage3 = (obtainMark3/totalMarks)*100;
var grandTotal = totalMarks+totalMarks+totalMarks;
var grandObtainMarks = obtainMark1+obtainMark2+obtainMark3;
var totalPercentage = (grandObtainMarks/grandTotal)*100;
// result 
document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage%</th></tr>");

document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainMark1 + "</td><td>" + percentage1 + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainMark2 + "</td><td>" + percentage2 + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainMark3 + "</td><td>" + percentage3 + "%</td></tr>");

document.write("<tr><th></th><th>" + grandTotal + "</th><th>" + grandObtainMarks + "</th><th>" + totalPercentage + "%</th></tr></table>");

// chapter 6-9 complete