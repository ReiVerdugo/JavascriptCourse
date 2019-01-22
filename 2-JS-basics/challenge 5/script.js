/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
*/

var john = {
    name : "John",
    calculateTips: function (amounts) {
        var tips, paidAmounts;
        tips = [];
        paidAmounts = [];
        for (var index = 0; index < amounts.length; index++) {
            this.calculateForIndex(index,amounts,tips,paidAmounts)
        }
        console.log(amounts);
        console.log(tips);
        console.log(paidAmounts);
        var result = this.name + " --- <br>+ Restaurant bills: " + amounts + "<br>"
                    + "Tips: " + tips + "<br>"
                    + "Total paid amounts: " + paidAmounts + "<br>";
        document.write(result);
        this.average(tips)
    },
    calculateForIndex: function (index, amounts, tips, paidAmounts) {
        tips[index] = this.tipCalculator(amounts[index])
        paidAmounts[index] = tips[index] + amounts[index]
    },
    tipCalculator: function(amount) {
        if (amount < 50) {
            return amount * 0.2
        } else if (amount >= 50 && amount < 200) {
            return amount * 0.15
        } else {
            return amount * 0.10
        }
    },
    average: function(amounts) {
        var average, sum;
        average = sum = 0
        for (index = 0; index < amounts.length; index++) {
            sum += amounts[index]
        }
        average = sum / amounts.length
        console.log(average);
        document.write("Average tip for " + this.name + ": " + average.toFixed(2) + "<br>");
    }
}

var amounts = [];
for (var index = 1; index <= 5; index++) {
    amounts.push(parseInt(prompt("JOHN Enter the bill of the restaurant number: " + index)));
}

john.calculateTips(amounts)

var mark = john
mark.name = "Mark";
mark.tipCalculator = function (amount) {
     if (amount < 100) {
            return amount * 0.2
        } else if (amount >= 100 && amount < 300) {
            return amount * 0.1
        } else {
            return amount * 0.25
        }
}

amounts = []
for (var index = 1; index <= 4; index++) {
    amounts.push(parseInt(prompt("MARK Enter the bill of the restaurant number: " + index)));
}
mark.calculateTips(amounts)

