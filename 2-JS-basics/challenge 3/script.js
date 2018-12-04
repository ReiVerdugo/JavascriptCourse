/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

function calculateTips(amounts) {
    var tips, paidAmounts
    tips = []
    paidAmounts = []
    for (var index = 0; index < amounts.length; index++) {
        calculateForIndex(index,amounts,tips,paidAmounts)
    }
    console.log(amounts)
    console.log(tips)
    console.log(paidAmounts)
    var result = "Restaurant bills: " + amounts + "<br>"
                + "Tips: " + tips + "<br>"
                + "Total paid amounts: " + paidAmounts
    document.write(result)
}

function calculateForIndex(index, amounts, tips, paidAmounts) {
    tips[index] = tipCalculator(amounts[index])
    paidAmounts[index] = tips[index] + amounts[index]
}

function tipCalculator(amount) {
    if (amount < 50) {
        return amount * 0.2
    } else if (amount >= 50 && amount < 200) {
        return amount * 0.15
    } else {
        return amount * 0.10
    }
}

var amounts = []
amounts.push(parseInt(prompt("Enter the bill of the FIRST restaurant")));
amounts.push(parseInt(prompt("Enter the bill of the SECOND restaurant")));
amounts.push(parseInt(prompt("Enter the bill of the THIRD restaurant")));

calculateTips(amounts)


