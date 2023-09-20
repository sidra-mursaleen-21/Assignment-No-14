// ARRAYS AND LOOP

// q no 1

// var fruits = ["apple" , "mango" ["pineapple" , "banana"]];

// q no 2

// var num = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ];

// for (var i = 0; i < num.length; i++) {
//   document.write(num[i].join(" ") + "<br>");
// }

// q no 3

// for ( var i = 1 ; i <= 10 ; i++){
//     document.write(i , "<br>");
// }

// q no 4

// var tableNumber = +prompt("Enter a number to show it's multiplication table :");
// var tableLenght = +prompt("Enter the lenght of multiplication table :");

// for ( var i = 1 ; i <= tableLenght ; i++){
//     document.write(tableNumber + " " + "* " + i + " " + "= " + tableNumber*i + "<br>");
// }

// q no 5

// var fruits = ["apple" , "banana" , "mango" , "orange"  , "strawberry"];

// for ( var i = 0 ; i < fruits.length ; i++){
//     console.log(fruits[i]);
// }

// for ( var i = 0 ; i < fruits.length ; i++){
//     console.log("Element at index " + i + " " + "is " + fruits[i]);
// }

// q no 6

// document.write("COUNTING : <br>");

// for ( var i = 1 ; i <= 15 ; i++){
//     document.write(i + " , ");
// }

// document.write("<br>");

// document.write("REVERSE COUNTING : <br>");

// for (var i = 10; i >= 1; i--) {
//   document.write(i + " , ");
// }

// document.write("<br>");

// document.write("EVEN : <br>");

// for (var i = 0; i <= 10; i++) {
//   document.write(i*2 + " , ");
// }

// document.write("<br>");

// document.write("ODD : <br>");

// var num;

// for (var i = 0; i <= 20; i++) {
//     if (i % 2 != 0) {
//       document.write(i + " , ")
//     }
// }

// document.write("<br>");

// document.write("SERIES : <br>");

// for (var i = 1; i <= 10; i++) {
//     document.write(i*2 + "K , ");
// }

// q no 7

// var order = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am :");
// var flag = false;
// var a = ["cake" , "apple pie" , "cookie" , "chips" , "patties"];

// for ( var i = 0 ; i < a.length ; i++){
//     if (order == a[i]){
//         flag = true ;
//         document.write(a[i] + " is available at index " + i + " in our bakery.");
//     }
// }

// if(flag){
//     console.log("match");
// }
// else{
//     document.write("We are sorry. " + order + " is not available in our bakery.");
// }

// q no 8

// var A = [24, 53, 78, 91, 12];
// var max = A[0];

// for ( var i = 0 ; i < A.length ; i++){
//     if ( A[i] > max ){
//         max = A[i];
//     }
// }

// document.write("Array Items : " + A + "<br>");
// document.write("The largest number is " + max);

// q no 9

// var A = [24, 53, 78, 91, 12];
// var min = A[0];

// for ( var i = 0 ; i < A.length ; i++){
//     if ( A[i] < min ){
//         min = A[i];
//     }
// }

// document.write("Array Items : " + A + "<br>");
// document.write("The smallest number is " + min);

// q no 10

// for(var i = 1 ; i <= 20 ; i++){
//     document.write(i*5 + " , ");
// }
