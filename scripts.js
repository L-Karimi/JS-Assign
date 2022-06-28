// Assignment 1:
// Conditionals & Loops1. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
// 2. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
// 3. Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// 4. Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]
// 5. Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40
// 6. Write a JavaScript program to find leap years from 2000 to 2022

function fizzbuzz() {
  for (var i = 0; i < 101; i++) {
    if (i % 15 == 0) console.log("Fizz");
    else if (i % 3 == 0) console.log("Buzz");
    else if (i % 3 == 0) console.log("FizzBuzz");
    console.log(i);
  }
}

function multiplications() {
  for (var x = 0; x < 101; x++) {
    if (x % 3 == 0 || x % 5 == 0) sum += 1;
  }
  return sum;
}
console.log(x);

function message() {
  for (var z = 0; z < 21; z++) {
    if (z % 2 == 0) {
      console.log("${z} is even");
    } else {
      console.log("${z} is odd");
    }
  }
}

let num = [-2, 4, -5, 6, 0];
let largest = 0;
for (var k = 0; k < num.length; k++) {
  if (num[k] > largest) {
    largest = num[k];
  }
}
console.log(largest);

let largeNum = [10, 20];
let num1 = 0;
for (var p = 0; p < largeNum.length; p++) {
  if (largeNum[p] > num1) {
    num1 = largeNum[p];
  }
}

function leapYear(){
  for(var w=2000;w<2023;w++){
    if (w%4==o){
      console.log("Leap Year")
    }else;
console.log("Not a leap year")
  }
}

