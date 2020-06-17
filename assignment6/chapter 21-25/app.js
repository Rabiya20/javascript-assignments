// task 1
var firstName = prompt("Enter your First Name");
var lastName = prompt("Enter your Last Name");
var fullName = firstName + " " + lastName;
alert("Hello " + fullName);

// //ques no 2
// var favMob = prompt("Tell me your favourite Mobile Model");
// var mobLength = favMob.length;
//     document.write("My favourite phone is: " + favMob + "</br>Length of string: " + mobLength + "<hr />");

// //ques no 3
// var word = "Pakistani";
// var word_Index = word.indexOf('n');
//     document.write("String: " + word + "</br>Index of 'n': " + wordIndex + "<hr />");

// //ques no 4
// var word2 = "Hello World";
// var word2_Index = word2.lastIndexOf('l');
//     document.write("String: " + word2 + "</br>Last index of 'l': " + word2_Index + "<hr />");

// //ques no 5
// var char_Index = word.charAt(3);
// document.write("String: " + word + "</br>Character at index 3: " + char_Index + "<hr />");

// //ques no 6
// var conCat = fullName.concat();
// document.write(conCat + "<hr />");

// //ques no 7
// var city = "Hyderabad";
// var city2 = city.replace("Hyder", "Islam");
//     document.write("City: " + city + "</br>After replacement: " + city2 + "<hr />");

// //ques no 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var change_messsage = message.replace(/and/g,"&");
//     document.write("First Message: "+ message + "</br>After replacement: " + change_messsage + "<hr />");

// //ques no 9
// var numString = "472";
// var numInteger = Number(numString);
//     document.write("Value: " + numString + "</br>Type: " + typeof numString + "</br>Value: " + numInteger + "</br>Type: " + typeof numInteger + "<hr />");

// //ques no 10
// var word3 = prompt("Write any word");
// var word3_upper = word3.toUpperCase();
//     document.write("User input: " + word3 + "</br>Upper case: " + word3_upper + "<hr />");

// //ques no 11
// var word4 = prompt("Write javascript in this box");
// var word4_frst = word4.slice(0,1);
// var word4_rest = word4.slice(1);
// var word4_frst = word4_frst.toUpperCase();
// var word4_rest =  word4_rest.toLowerCase();
// var word4_titleCase = word4_frst+word4_rest;
//     document.write("User input: " + word4 + "</br>Title case: " + word4_titleCase);

// //ques no 12
// var numNum = 35.36;
// var numStr = numNum.toString();
// var withoutDot = numStr.replace(".","");;
// document.write("Number: " + numNum + "</br>Result: "+ withoutDot +"<hr />");

//ques no 13
var userName = prompt("Enter your name");
for(var i=0;i<userName.length; i++){
    if(userName[i]=='!'||userName[i]=='@'||userName[i]=='.'||userName[i]==','){
        alert("Please enter a valid user name!");
    }
}

//ques no 14
