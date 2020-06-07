// task 1
var character = prompt("Enter any Alphabet to know it's ASCII code");
var ascii = character.charCodeAt(0);
if (ascii >= 65 && ascii <= 90) {
    alert(character+" is Upper case");
}
else if (ascii >= 97 && ascii <= 122) {
    alert(character+" is lower case");
}
else{
    alert(character+" is not an Alphabet character");
}


// task 2
var a = +prompt("Enter 1st number");
var b = +prompt("Enter 2nd number");
if (a > b) {
    alert("Your input " + a + " is Greater");
}
else if (a < b) {
    alert("Your input " + b + " is Greater");
}
else {
    alert("Your both inputs are equals");
};



// task 3
var c = +prompt("Enter any number to state that whether is is positive, negative or zero");
if (c > 0) {
    alert("Your input number is Positive");
}
else if (c < 0) {
    alert("Your input number is Negative");
}
else {
    alert("Your number is neither positive nor negative, it is " + c);
};



// task 4
var vowel = prompt("Write vowel letter");
if (vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u") {
    alert(vowel+" is a vowel character");
}
else {
    alert(vowel+" is not a vowel character");
}



// task 5
// a 
var password = "mypassword";
// b 
var pass = prompt("Please enter your password");
// c 
if (pass == password) {
    alert("Correct Password!");
}
else {
    alert("Incorrect password!");
};



// task 6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    alert(greeting);
}
else {
    greeting = "Good evening";
    alert(greeting);
}



// task 7
var time = +prompt("Enter current Time of digital clock of 4 digits e.g. 1200")
if (time >= 0000 && time < 1200) {
    alert("Good morning!");
}
else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
}
else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
}
else if (time >= 2100 && time <= 2359) {
    alert("Good night!");
}
else {
    alert("Enter valid digits")
}

 // chapter 12-13 complete