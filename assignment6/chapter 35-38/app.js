// // task 1
// function date() {
//     var now = new Date;
//     document.write(now + "</br>");
// }
// date();

// document.write("</hr>");



// // task 2
// function greeting(firstName, lastName) {
//     var firstName = prompt("Enter your first name");
//     var lastName = prompt("Enter your last name");
//     document.write("Hello " + firstName + " " + lastName + "</br>");
// }
// greeting();

// document.write("</hr>");



// // task 3
// function sum(a, b) {
//     a = +prompt("Enter first number");
//     b = +prompt("Enter second number");
//     return a + b;
// }
// var num1, num2;
// document.write("Sum of 2 numbers is " + sum(num1, num2) + "<br><hr/>");



// // task 4
// document.write("<h2>Calculator:</h2>");

// function calc(n1, n2, sign) {
//     n1 = +prompt("Enter first number");
//     n2 = +prompt("Enter second number");
//     sign = prompt("Enter a sign for operation you want\n+ , - , * , / or %");
//     if(sign=="+"){
//         document.write("n1 is " + n1 + " n2 is " + n2 + "<br>");
//         return n1+n2;
//     }
//     else if(sign=="-"){
//         document.write("n1 is " + n1 + " n2 is " + n2 + "<br>");
//         return n1-n2;
//     }
//     else if(sign=="*"){
//         document.write("n1 is " + n1 + " n2 is " + n2 + "<br>");
//         return n1*n2;
//     }
//     else if(sign=="/"){
//         document.write("n1 is " + n1 + " n2 is " + n2 + "<br>");
//         return n1/n2;
//     }
//     else if(sign=="%"){
//         document.write("n1 is " + n1 + " n2 is " + n2 + "<br>");
//         return n1%n2;
//     }
//     else{
//         alert("You enteres wrong operation");
//     }

// }

// var n1, n2, sign;
// var result = calc(n1, n2, sign);
// document.write("Your result is: " + result + "<br><hr/>");



// // task 5
// function square(sqNum) {
//     sqNum = +prompt("Enter any number to get it's square value");
//     return sqNum * sqNum;
// }
// var sqNum;
// var numSquare = square(sqNum);
// document.write("Square of your given num is: " + numSquare + "<br><hr/>");



// // task 6
// var num = +prompt("Enter any number to find its factorial");
// function factor(fac) {
//     if (fac < 0) {
//         return -1;
//     }
//     else if (fac == 0) {
//         return 1;
//     }
//     else {
//         return (fac * factor(fac - 1));
//     }
// }
// var fact = factor(num);
// document.write("Factorial of "+num+ " is "+fact+"<br><hr>");



// // task 7
// var s = +prompt("Enter a number to start counting");
// var e = +prompt("Enter a number to end counting");

// document.write("Counting:<br>");
// function count(start, end){
//     for(var i = start; i<=end; i++){
//         document.write(i+"<br>");
//     }
//     document.write("<hr>");
// }
// count(s,e);



// // task 8
// var base = +prompt("Enter number of Base");
// var perp = +prompt("Enter number of Perpendicular");
// function hyp(base, perp) {
//     function sq(val){
//         return val*val;
//     }
//     base = sq(base);
//     perp = sq(perp);

//     return base + perp;
// }

// var hypotenuse = hyp(base, perp);
// document.write("Value of Base is: "+base+ " and value of Perpendicular is: "+perp+"<br>");
// document.write("Result of Hypotenuse is: "+ hypotenuse+ "<br><hr/>");



// //task 9
// document.write("Area of Rectangle:<br>");
// var w = +prompt("Enter value of width");
// var h = +prompt("Enter value of height");
// function area(width, height){
//     return width*height;
// }
// // i  - arguments as value
// var area1 = area(3,5);
// document.write("Area of Rectangle using arguments as value is "+area1+"<br>");

// // ii - arguments as variables
// var area2 = area(w,h);
// document.write("Area of Rectangle using arguments as variables is "+area2+"<br><hr>");



// // task 10
// var str = prompt("Enter any word to check whether its palindrom or not")
// function palindrome(str) {
//     var mid = Math.floor((str.length) / 2);
//     for (var i = 0; i < mid; i++) {
//         if (str[i] !== str[(str.length) - 1 - i]) {
//             document.write(str + " is not a Palindrom");
//             break;
//         }
//         else {            
//             document.write(str + " is a Palindrom");
//             break;
//         }
//     }
// }
// palindrome(str);



// task 11
function capitalize(sentence) {
    var splitSentence = sentence.split(" ");
    for (var s = 0; s < splitSentence.length; s++) {
        
    }
}
