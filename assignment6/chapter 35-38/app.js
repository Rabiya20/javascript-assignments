// task 1
// function hello() {
//     document.write("Hello World</br>");
// }

// hello();
// hello();

// task 2
// function date() {
//     var now = new Date;
//     document.write(now + "</br>");
// }

// date();
// date();
// date();
// document.write("</hr>");

// //ques no 17
// function greeting(firstName, lastName) {
//     var greet = firstName + lastName;
//     var firstName = prompt("Enter your first name");
//     var lastName = prompt("Enter your last name");
//     document.write("Hello " + firstName + " " + lastName + "</br>");
// }
// greeting();
// document.write("</hr>");

// //ques no 18
// function sum(num1, num2) {
//     num1 = +prompt("Enter first number");
//     num2 = +prompt("Enter second number");
//     return num1 + num2;
// }
// var num1, num2;
// var sumOf = sum(num1, num2);
// document.write("Sum of 2 numbers is " + sumOf + "<br><hr/>");

// //ques no 19
// function operation(n1, n2, sign) {
//     n1 = +prompt("Enter first number");
//     n2 = +prompt("Enter secong number");
//     sign = prompt("Enter a sign for operation you want\n+ , - , * , / or %");
//     switch (sign) {
//         case "+":
//             return n1 + n2;
//             break;

//         case "-":
//             return n1 - n2;
//             break;

//         case "*":
//             return n1 * n2;
//             break;

//         case "/":
//             return n1 / n2;
//             break;

//         case "%":
//             return n1 % n2;
//             break;

//         default:
//             alert("something going wrong");
//     }
// }

// var n1, n2, sign;
// var result = operation(n1, n2, sign);
// document.write("Your result is: " + result + "<br><hr/>");

// //ques no 20
// function square(sqNum) {
//     sqNum = +prompt("Enter any number to get it's square value");
//     return sqNum * sqNum;
// }
// var sqNum;
// var numSquare = square(sqNum);
// document.write("Square of your given num is: " + numSquare + "<br><hr/>");

// //ques no 23
// function hyp(base, perp) {
//     function sqBsPr(value) {
//         var value = value * value;
//     }

//     base = sqBsPr(base);
//     perp = sqBsPr(perp);

//     return base + perp;
// }
// var base = +prompt("Enter number of Base");
// var perp = +prompt("Enter number of Perpendicular");

// var hypotenuse = hyp(base, perp);
// alert(hypotenuse);
//document.write("Result of Hypotenuse is: "+ hypotenuse+ "<br><hr/>")