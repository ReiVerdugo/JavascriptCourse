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
document.write("Mark's height: " + markHeight + "m<br>")
var markMass = prompt("Enter Mark's mass");
document.write("Mark's mass: " + markMass + "kg<br>")
var johnHeight = prompt("Enter John's height");
document.write("John's height: " + johnHeight + "m<br>")
var johnMass = prompt("Enter John's mass");
document.write("John's mass: " + johnMass + "kg<br>")

var markBMI = markMass / markHeight ** 2;
var johnBMI = johnMass / johnHeight ** 2;

var hasMarkHigherBMI = markBMI > johnBMI;

document.write("<br> Mark's BMI: " + markBMI 
      + "<br>John's BMI: " + johnBMI)
let alertMessage = "Is Mark's BMI higher than John's? " + hasMarkHigherBMI
document.write("<br><br>",alertMessage)
alert(alertMessage);
