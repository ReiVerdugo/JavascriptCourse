var description, value, type; 
var incomes = document.getElementById("income-table");
var expenses = document.getElementById("expenses-table");
var incomeAmount = 0;
var expensesAmount = 0;
var totalAmount = 0;
var incomeAmountLabel = document.getElementById("income-amount");
var expensesAmountLabel = document.getElementById("expenses-amount");
var totalAmountLabel = document.querySelector('.amount');

document.getElementById('submit').addEventListener('click', function() {
    description = document.getElementById('description').value;
    value = Number(document.getElementById('value').value);
    type = document.getElementById('type').value;
    if (type === "+") {
        addIncome();
    } else {
        addExpense();
    }
});

function addIncome() {
    incomeAmount += value;
    var row = incomes.insertRow(incomes.childElementCount);
    addRow(row);
    incomeAmountLabel.textContent = incomeAmount;
}

function addExpense() {
    expensesAmount += value;
    var row = expenses.insertRow(incomes.childElementCount);
    value = -value
    addRow(row);
    expensesAmountLabel.textContent = expensesAmount;
}

function addRow(row) {
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = description;
    cell2.innerHTML = value;
    updateTotalAmount();
}

function updateTotalAmount() {
    totalAmount = incomeAmount - expensesAmount;
    totalAmountLabel.textContent = totalAmount;
}