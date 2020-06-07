// task 1
var studentNames = [];


// task 2
var studentsObject = new Array();


// task 3
var strngArray = ["rabia","anum","fiza","sana","aisha","hareem","seher"];


// task 4
var numArray = [1,2,3,4,5,6,7,8,9,0];

 
// task 5
var booleanArray = [true, false] 



// task 6
var mixedArray = ["hi! ","I've ",2,"sims ","and ",1,"mobile phone"];


// task 7
var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
document.write("<h1>Qualifications:</h1><ol><li>" + qualification[0] + "</li><li>" + qualification[1] + "</li><li>" + qualification[2] + "</li><li>" + qualification[3] + "</li><li>" + qualification[4] + "</li><li>" + qualification[5] + "</li><li>" + qualification[6] + "</li><li>" + qualification[7] + "</li></ol><br/><br>" );



// task 8
studentNames = ["Rabia", "Aisha", "Fiza"];
var scores = [465 , 378 , 309];
var percentage1 = ((scores[0]/500) * 100);
var percentage2 = ((scores[1]/500) * 100);
var percentage3 = ((scores[2]/500) * 100);
document.write("<br><br>Score of " + studentNames[0] + " is " + scores[0] + " Percentage:" + percentage1 + "%</br>");
document.write("Score of " + studentNames[1] + " is " + scores[1] + " Percentage:" + percentage2 + "%</br>");
document.write("Score of " + studentNames[2] + " is " + scores[2] + " Percentage:" + percentage3 + "%</br></br>");



// task 9
var colorNames = ["Black", "Red", "Yellow", "Blue"];
alert(colorNames);

//a
var addColorBeg = prompt("Which color you want to add in beginning?");
colorNames.unshift(addColorBeg);

//b
var addColorEnd = prompt("Which color you want to add at the end?");
colorNames.push(addColorEnd);

//c
colorNames.unshift("Purple", "Maroon");
alert("This is updated array\n" + colorNames);

//d
colorNames.shift();
alert(colorNames);

//e
colorNames.pop();
alert(colorNames);

//f
var askPosition = +prompt("At which index do you want to add any color?");
var askColor = prompt("And which color?");
colorNames.splice(askPosition, 0, askColor);
alert("This is array after adding your color\n" + colorNames);

//g
var deleteIndex = +prompt("At what index do you want to delete color?");
var noOfDelete = +prompt("How many colors do you want to delete?");
colorNames.splice(deleteIndex,--noOfDelete);
alert("This is array after deleting colors\n" + colorNames);



// task 10
var studentsScores = [320, 230, 480, 120];
document.write("<br>Sores of Students: "+studentsScores+"</br></br>");
var sortedScore = studentsScores.sort();
document.write("Ordered scores of Students: "+sortedScore+"</br></br>");

        

// task 11
var cities = ["Karachi", " Lahore", " Islamabad", " Quetta", " Peshawar"];
document.write("Cities list: <br>"+cities+"<br></br>");

var selectedCities = cities.slice(2, 4);
document.write("Selected Cities list: <br>"+selectedCities+"</br></br>");



// task 12
var arr = ["This ", " is ", " my ", " cat"];
document.write("Array:<br>"+arr+"<br>");

var stringArr = arr.join(" ");
document.write("String:<br>"+stringArr+"<br><br>");



// task 13
var hardware = ["keyboard", " mouse", " printer", " monitor"];
document.write("<br>LIFO<br>");
document.write("<br>Out:<br>" + hardware[3]);
document.write("<br>Out:<br>" + hardware[2]);
document.write("<br>Out:<br>" + hardware[1]);
document.write("<br>Out:<br>" + hardware[0]);




// task 14
var hardware = ["keyboard", " mouse", " printer", " monitor"];
document.write("<br><br>FIFO<br>");
document.write("<br>Out:<br>" + hardware[0]);
document.write("<br>Out:<br>" + hardware[1]);
document.write("<br>Out:<br>" + hardware[2]);
document.write("<br>Out:<br>" + hardware[3]);



// task 15
var phoneCompany = ["Apple","Samaung","Motrola","Nokia","Sony","Haier"];
document.write("<h2>Drop down</h2><select><option>"+phoneCompany[0]+"</option><option>"+phoneCompany[1]+"</option><option>"+phoneCompany[2]+"</option><option>"+phoneCompany[3]+"</option><option>"+phoneCompany[4]+"</option><option>"+phoneCompany[5]+"</option></select>");