/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/


var mark = {
    fullName: "Mark Perez",
    height: 0,
    mass: 0,
    bmi: 0,
    calculateBMI: function() {
        this.bmi = this.mass / this.height ** 2;
    }
}

var john = {
    fullName: 'John Perez',
    height: 0,
    mass: 0,
    bmi: 0
}


mark.height = prompt("Enter Mark's height");
document.write("Mark's height: " + mark.height + "m<br>")
mark.mass = prompt("Enter Mark's mass");
document.write("Mark's mass: " + mark.mass + "kg<br>")
john.height = prompt("Enter John's height");
document.write("John's height: " + john.height + "m<br>")
john.mass = prompt("Enter John's mass");
document.write("John's mass: " + john.mass + "kg<br>")

john.calculateBMI = mark.calculateBMI
john.calculateBMI()
mark.calculateBMI()


document.write("<br> Mark's BMI: " + mark.bmi 
      + "<br>John's BMI: " + john.bmi + "<br>")

if (mark.bmi > john.bmi) {
    console.log("Mark BMI is higher");
    document.write("Mark BMI is higher");
} else if (mark.bmi == john.bmi) {
    console.log("Both BMI are equal")
    document.write("Both BMI are equal")
} else {
    console.log("John BMI is higher")
    document.write(("John BMI is higher"))
}
