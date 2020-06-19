// // task 1
// var firstName = prompt("Enter your First Name");
// var lastName = prompt("Enter your Last Name");
// var fullName = firstName + " " + lastName;
// alert("Hello " + fullName);



// //task 2
// var favMob = prompt("Tell me your favourite Mobile Model");
// var mobLength = favMob.length;
// document.write("My favourite phone is: " + favMob + "</br>Length of string: " + mobLength + "<hr />");



// /task 3
// var word = "Pakistani";
// var wordIndex = word.indexOf('n');
// document.write("String: " + word + "</br>Index of 'n': " + wordIndex + "<hr />");



// //task 4
// var word2 = "Hello World";
// var word2_Index = word2.lastIndexOf('l');
// document.write("String: " + word2 + "</br>Last index of 'l': " + word2_Index + "<hr />");



// //task 5
// var char_Index = word.charAt(3);
// document.write("String: " + word + "</br>Character at index 3: " + char_Index + "<hr />");



// //task 6
// var conCat = firstName.concat(lastName);
// document.write(conCat + "<hr />");



// //task 7
// var city = "Hyderabad";
// var city2 = city.replace("Hyder", "Islam");
// document.write("City: " + city + "</br>After replacement: " + city2 + "<hr />");



// //task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var change_messsage = message.replace(/and/g,"&");
// document.write("First Message: "+ message + "</br>After replacement: " + change_messsage + "<hr />");



// //task 9
// var numString = "472";
// var numInteger = Number(numString);
// document.write("Value: " + numString + "</br>Type: " + typeof numString + "</br>Value: " + numInteger + "</br>Type: " + typeof numInteger + "<hr />");



// //task 10
// var word3 = prompt("Write any word");
// var word3_upper = word3.toUpperCase();
// document.write("User input: " + word3 + "</br>Upper case: " + word3_upper + "<hr />");



// //task 11
// var word4 = prompt("Write javascript in this box");
// var word4_frst = word4.slice(0,1);
// var word4_rest = word4.slice(1);
// var word4_frst = word4_frst.toUpperCase();
// var word4_rest =  word4_rest.toLowerCase();
// var word4_titleCase = word4_frst+word4_rest;
// document.write("User input: " + word4 + "</br>Title case: " + word4_titleCase);



// // task 12
// var numNum = 35.36;
// var numStr = numNum.toString();
// var withoutDot = numStr.replace(".","");;
// document.write("Number: " + numNum + "</br>Result: "+ withoutDot +"<hr />");



// // task 13
var userName = prompt("Enter your name");
for (var i = 0; i < userName.length; i++) {
    special = userName.charCodeAt(i);
    if (special === 33 || special === 44 || special === 46 || special === 64) {
        alert("this name conatins specail character(s)");
    }
}



// // task 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var match = "no";
// var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();

// for(var find = 0; find<=A.length; find++){
//     if(A[find]==search){
//         var index = find;
//         match = "yes";
//     }
// }
// if(match=="yes"){
//     document.write(search + " is <b>available</b> at index <b>" + index + "</b> in our bakery");
// }
// else{
//     document.write("We are Sorry. <b>"+ search +"</b> is <b>not available</b> in our bakery");
// }



// // task 15
// var pass = prompt("Enter password:");
// var ascii = pass.charCodeAt(0);
// document.write("Entered password: " + pass + "<br>");

// // 1.   check alphanumeric values
// if (((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) || (ascii >= 48 && ascii <= 57)) {
//     var alphanum = true;
// }

// // 2.   check length
// if (pass.length >= 6) {
//     var len = true;
// }
// else{
//     var len = false;
//     document.write("Password length sould be greater than 6<br>");
// }

// // 3.   check first character
// if (pass[0] >= 0 && pass[0] <= 9) {
//     var startNum = false;
//     document.write("password can not begin from number<br>");
// }
// else {
//     var startNum = true;
// }

// // validation
// if (alphanum == true && len == true && startNum == true) {
//     document.write("Your password is correct<br>");
// }
// else {
//     document.write("Please enter a valid password<br>");
// }



// task 16
var uni = "University of Karachi";
var res = uni.split("\n");
for (var i = 0; i < res.length; i++) {
    alert(res[i]);
}