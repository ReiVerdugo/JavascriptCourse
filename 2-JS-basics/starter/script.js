/*
*** CODING CHALLENGE
Mark and John are trying to compare their BMI

Tasks:
1- Store Mark's and John's mass and height in variables.
2- Calculate both their BMI.
3- Create a boolean variable containing info about whether Mark has a higher BMI than John.
4- Print a string to the console containing the variable from step 3.
*/

var markHeight = prompt("Enter Mark's height");
var markMass = prompt("Enter Mark's mass");
var johnHeight = prompt("Enter John's height");
var johnMass = prompt("Enter John's mass");

var markBMI = markMass / markHeight ** 2;
var johnBMI = johnMass / johnHeight ** 2;

var hasMarkHigherBMI = markBMI > johnBMI;

console.log("Is Mark's BMI higher than John's? " + hasMarkHigherBMI);