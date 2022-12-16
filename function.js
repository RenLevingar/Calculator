// // creates a text variables and symbol
// let text = "";
// let text2 = "";
// let text3 = "";
// let symbol;

// // creates a function that adds text
// function output(a){
//     document.getElementById("output").innerHTML = text += a;
// }

// // creates the output reset
// function funOUT(){
//     text = "";
//     text2 = "";
//     document.getElementById("output").innerHTML = text;
// }
// // creates number output functions
// function fun0(){
//     output("0");
// }
// function fun1(){
//     output(1)
// }
// function fun2(){
//     output(2)
// }
// function fun3(){
//     output(3)
// }
// function fun4(){
//     output(4)
// }
// function fun5(){
//     output(5)
// }
// function fun6(){
//     output(6)
// }
// function fun7(){
//     output(7)
// }
// function fun8(){
//     output(8)
// }
// function fun9(){
//     output(9)
// }
// function funDEC(){
//     output(".")
// }
// function funNEG(){
//     output("-")
// }

// // create the equation functions
// function funDIV(){
//     text2 = text;
//     text = "";
//     document.getElementById("output").innerHTML = text;
//     console.log(text2);
//     equate(symbol);
//     symbol = "divide"
// }
// function funMULT(){
//     text2 = text;
//     text = "";
//     document.getElementById("output").innerHTML = text;
//     console.log(text2);
//     equate(symbol);
//     symbol = "multiply"
// }
// function funSUB(){
//     text2 = text;
//     text = "";
//     document.getElementById("output").innerHTML = text;
//     console.log(text2);
//     equate(symbol);
//     symbol = "subtract"
// }
// function funADD(){
//     text2 = text;
//     text = "";
//     document.getElementById("output").innerHTML = text;
//     console.log(text2);
//     equate(symbol);
//     symbol = "add"
// }

// function funEQU(){
// equate(symbol);
// }

// // creates a function that outputs the result
// function equate(a){
//     if(a == "divide"){
//         text= Number(text2)/Number(text);
//         document.getElementById("output").innerHTML = text;
//     }else if (a == "multiply"){
//         text = Number(text2)*Number(text);
//         document.getElementById("output").innerHTML = text;
//     } else if (a == "subtract"){
//         text = Number(text2)-Number(text);
//         document.getElementById("output").innerHTML = text;
//     } else if (a == "add"){
//         text = Number(text2)+ Number(text);
//         document.getElementById("output").innerHTML = text;
//     }
// }