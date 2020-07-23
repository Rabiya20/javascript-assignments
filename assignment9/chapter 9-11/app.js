// task 1
var cityName = prompt("Write your City name");
if (cityName == "karachi" || cityName == "Karachi") {
    alert("Welcome to city of lights");
}



// task 2
var gender = prompt("Tell me your Gender");
if (gender == "male") {
    alert("Good Morning Sir.");
}
else {
    alert("Good Morning Ma'am.");
};



// task 3
var trafficLight = prompt("Please tell, Current traffic signal light's color..");
if (trafficLight == "red") {
    alert("Must Stop");
}
else if (trafficLight == "yellow") {
    alert("Ready to Move");
}
else {
    alert("Move now");
};



// task 4
var fuel = +prompt("Enter your Remaining car fuel in Liters");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
};



// task 5
// a 
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
};


// b 
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
};


// c 
var c = 12;
if (c++ === 13) {
    alert("codition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}

if (++c < 14) {
    alert("codition 3 is true");
}
if (c === 14) {
    alert("codition 4 is true");
};



// d 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
};


// e 
if (true) {
    alert("True");
}
if (false) {
    alert("False");
};


// f 
if ("car" < "cat") {
    alert("car is smaller than cat");
};



// task 6
// subject  names
var subject1 = prompt("Write your 1st subject name", "English");
var subject2 = prompt("Write your 2nd subject name", "Urdu");
var subject3 = prompt("Write your 3rd subject name", "Maths");

// total marks 
var totalMarks = 100;

// obtain marks 
var obtainedMarks1 = +prompt("Tell me your obtained marks in " + subject1);
var obtainedMarks2 = +prompt("Tell me your obtained marks in " + subject2);
var obtainedMarks3 = +prompt("Tell me your obtained marks in " + subject3);

// percentage
var percentage1 = (obtainedMarks1 / totalMarks) * 100;
var percentage2 = (obtainedMarks2 / totalMarks) * 100;
var percentage3 = (obtainedMarks3 / totalMarks) * 100;

// overall result 
var grandTotalMarks = totalMarks + totalMarks + totalMarks;
var totalObtain = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var totalPercentage = (totalObtain / grandTotalMarks) * 100;

// show results 
document.write("<h1>Marks Sheet</h1><br>");
document.write("Total marks: " + grandTotalMarks + "</br>");
document.write("Marks Obtained: " + totalObtain + "</br>");
document.write("Percentage: " + totalPercentage + "%</br>");

// calculation
if (totalPercentage >= 80) {
    document.write("<b>Grade: A+</b></br>");
    document.write("Remarks: <b>Superb! Keep it up!</b></br>");
}
else if (totalPercentage >= 70) {
    document.write("<b>Grade: A</b></br>");
    document.write("Remarks: <b>Excellent Work!</b></br>");
}
else if (totalPercentage >= 60) {
    document.write("<b>Grade: B</b></br>");
    document.write("Remarks: <b>You Need to Improve!</b></br>");
}
else if (totalPercentage >= 50) {
    document.write("<b>Grade: C</b></br>");
    document.write("Remarks: <b>Work Hard!</b></br>");
}
else {
    document.write("Try Again for Best!</br></br>");
};



// task 7
var secretNum = 5;
var guessNum = +prompt("Guess Game\nI've a secret number\nGuess any Number from 1 to 10");
// a 
if (guessNum === secretNum) {
    alert("Bingo! Correct answer\nSecret number is: " + secretNum);
}
// b 
else if (guessNum == --secretNum || guessNum == ++secretNum) {
    alert("Close enough to Correct\nSecret number was: " + secretNum);
}
else {
    alert("Try Again");
};



// task 8
var divnum = +prompt("Write any num to Check wether it is divisible by 3 or not?");
if (divnum % 3 === 0) {
    alert(divnum+" is divisible by 3");
}
else {
    alert(divnum+" is not divisible by 3");
};



// task 9
var num = +prompt("Input any number to check weither it is Even or Odd?");
if (num % 2 === 0) {
    alert(num+" is Even");
}
else {
    alert(num+" is Odd");
};



// task 10
var temperature = +prompt("Please tell us about Tempratue of today in your city");
if (temperature >= 40) {
    alert("Its too hot outside.");
}
else if (temperature >= 30 && temperature <= 39) {
    alert("The Weather today is Normal");
}
else if (temperature >= 20 && temperature <= 29) {
    alert("Today Weather is cool");
}
else if (temperature >= 10 && temperature <= 0) {
    alert("OMG! Today's weather is so cool");
}
else {
    alert("Take Care");
};



// task 11
// a 
var num1 = +prompt("Enter any number for Arithematic Operation");
// b 
var num2 = +prompt("Enter 2nd Number for Arithematic Operation");
// c 
var operation = prompt("Write +, -, *, / or % for getting your answer");
// result
if (operation == "+") {

    document.write(num1 + " + " + num2 + " = " + num1+num2);
}
else if (operation == "-") {
    document.write(num1 + " - " + num2 + " = " + num2-num1);
}
else if (operation == "*") {
    document.write(num1 + " * " + num2 + " = " + num1 * num2);
}
else if (operation == "/") {
    document.write(num1 + " / " + num2 + " = " + num1 / num2);
}
else if (operation == "%") {
    document.write(num1 + " % " + num2 + " = " + num1 % num2);
}
else {
    alert("Your input is wrong!");
}

// chapter 9-11 complete