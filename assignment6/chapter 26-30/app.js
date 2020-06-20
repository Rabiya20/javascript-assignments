//task 1
var posInt = +prompt("Enter any positive integer with decimal");

//a
document.write("Number: " + posInt + "</br>");

//b
var roundInt = Math.round(posInt);
document.write("Round off value: " + roundInt + "</br>");

//c
var floatInt = Math.floor(posInt);
document.write("Floor value: " + floatInt + "</br>");

//d
var ceilInt = Math.ceil(posInt);
document.write("Ceil value: " + ceilInt + "</br><hr />");




//task 2
var posInt = +prompt("Enter any negative integer with decimal");

//a
document.write("Number: " + posInt + "</br>");

//b
var roundInt = Math.round(posInt);
document.write("Round off value: " + roundInt + "</br>");

//c
var floatInt = Math.floor(posInt);
document.write("Floor value: " + floatInt + "</br>");

//d
var ceilInt = Math.ceil(posInt);
document.write("Ceil value: " + ceilInt + "</br><hr />");




//task 3
var num = +prompt("Enter any number");
var absoluteNum = Math.abs(num);
document.write("The absolute value of " + num + " is: " + absoluteNum + "<hr />");




//task 4
var randomNum = Math.random();
var diceRandom = (randomNum * 6) + 1;
var diceNum = Math.floor(diceRandom);
document.write("Random dice value: " + diceNum +"<hr>");




//task 5
var coinNum = Math.random();
var tossRandom = (coinNum * 2) + 1;
var tossNum = Math.floor(tossRandom);
if (tossNum == 2) {
    document.write(tossNum + "</br>Random coin value: :Heads");
}
else {
    document.write(tossNum + "</br>Random coin value: Tails");
};
document.write("<hr />")




//task 6
var randNum = Math.random();
var randLimit = (randNum * 100) + 1;
var randValue = Math.floor(randLimit);
document.write("Random number between 1 and 100: " + randValue+"<hr>");




//task 7
var weight = prompt("Enter your weight");
var $weight = parseInt(weight);
document.write("The weight of user is " + $weight + " kilograms<hr/>");




//task 8
var randGame = Math.random();
var gameLimit = (randGame * 10) + 1;
var numValue = Math.floor(gameLimit);
var gameNum = +prompt("Enter any number between 1 to 10");
if (gameNum == numValue) {
    alert("Congratulations!");
}
else {
    alert("Try again");
};


// chap 26-30 complete