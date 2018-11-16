/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

*/
var john = [];
var mark = [];
var mary = [];
john.push(parseInt(prompt("Enter the value of John's FIRST match")));
john.push(parseInt(prompt("Enter the value of John's SECOND match")));
john.push(parseInt(prompt("Enter the value of John's THIRD match")));
          
mark.push(parseInt(prompt("Enter the value of Mark's FIRST match")));
mark.push(parseInt(prompt("Enter the value of Mark's SECOND match")));
mark.push(parseInt(prompt("Enter the value of Mark's THIRD match")));

var johnAvg = markAvg = maryAvg = 0;
const reducer = (total, amount) => total + amount;
johnAvg = john.reduce(reducer) / john.length;
markAvg = mark.reduce(reducer) / mark.length;

let includeMary = confirm("Do you want to enter Mary's data?");
if (includeMary) {
    mary.push(parseInt(prompt("Enter the value of Mary's FIRST match")));
    mary.push(parseInt(prompt("Enter the value of Mary's SECOND match")));
    mary.push(parseInt(prompt("Enter the value of Mary's THIRD match")));
    maryAvg = mary.reduce(reducer) / mary.length;
}

console.log("John's scores:",john);
console.log("Mark's scores:",mark);
console.log("Mary's scores:",mary);

console.log("John's average",johnAvg);
console.log("Mark's average",markAvg);
console.log("Mary's average",maryAvg);

switch (Math.max(johnAvg,markAvg,maryAvg)) {
    case johnAvg: 
        console.log("John is a winner!");
    case markAvg:
        console.log("Mark is a winner!");
    case maryAvg:
        console.log("Mary is a winnner!");
}



              