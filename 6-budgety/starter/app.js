var Entry = function(description, value, type) {
    this.description = description;
    this.value = value;
    this.type = type;
};

var incomesTable = document.getElementById("income-table");
var expensesTable = document.getElementById("expenses-table");
var incomeAmount = 0;
var expensesAmount = 0;
var totalAmount = 0;
var incomeAmountLabel = document.getElementById("income-amount");
var expensesAmountLabel = document.getElementById("expenses-amount");
var totalAmountLabel = document.querySelector('.amount');

document.getElementById('submit').addEventListener('click', function() {
    var description, value, type;
    description = document.getElementById('description').value;
    value = Number(document.getElementById('value').value);
    type = document.getElementById('type').value;
    var entry = new Entry(description, value, type);
    if (entry.type === "+") {
        addIncome(entry);
    } else {
        addExpense(entry);
    }
});

function addIncome(entry) {
    incomeAmount += entry.value;
    var row = incomesTable.insertRow(-1);
    addIncomeRow(row, entry);
    updateIncomeAmountLabel(incomeAmount);
}

function updateIncomeAmountLabel(value) {
    var formattedValue = parseFloat(Math.round(value * 100) / 100).toFixed(2);
    var text =  "+ " + formattedValue;
    incomeAmountLabel.textContent = text;
}

function addExpense(entry) {
    expensesAmount += entry.value;
    var row = expensesTable.insertRow(-1);
    addExpenseRow(row, entry);
    updateExpenseAmountLabel(expensesAmount)
}

function updateExpenseAmountLabel(value) {
    var formattedValue = parseFloat(Math.round(value * 100) / 100).toFixed(2);
    var text =  "- " + formattedValue;
    expensesAmountLabel.textContent = text;
}

function addIncomeRow(row,entry) {
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.textContent = entry.description;
    cell1.colSpan = 5
    
    var formattedValue = parseFloat(Math.round(entry.value * 100) / 100).toFixed(2);
    cell2.textContent = formattedValue;
    cell2.className = "income-header"
    cell2.colSpan = 1;
    
    var button = add(incomesTable, entry, row);
    cell3.appendChild(button)
    row.className = "button-cell"
    updateTotalAmount();
}

function addExpenseRow(row, entry) {
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.textContent = entry.description;
    cell1.colSpan = 5

    var formattedValue = parseFloat(Math.round(entry.value * 100) / 100).toFixed(2);
    
    
    cell2.textContent = formattedValue;
    cell2.className = "expense-header"
    cell2.colSpan = 1;
    
    var percentage = ((entry.value * 100) / incomeAmount).toFixed(2);
    cell3.textContent = percentage + "%";
    cell3.className = "percentage";
    
    var button = add(expensesTable, entry, row);
    cell4.appendChild(button)
    row.className = "button-cell"
    updateTotalAmount();
}

function updateTotalAmount() {
    totalAmount = incomeAmount - expensesAmount;
    var formattedValue = parseFloat(Math.round(totalAmount * 100) / 100).toFixed(2);
    var text = formattedValue > 0 ? "+" + formattedValue : formattedValue
    totalAmountLabel.textContent = text;
}

function deleteAmounts(entry) {
    if (entry.type === "+") {
        incomeAmount -= entry.value;
        updateIncomeAmountLabel(incomeAmount)
    } else {
        expensesAmount -= entry.value;
        updateExpenseAmountLabel(expensesAmount)
    }
    updateTotalAmount();
}

function add(table, entry, row) {
    //Create an input type dynamically.   
    var element = document.createElement("button");
    //Assign different attributes to the element. 
    element.textContent = "X"; 
    element.className = "delete-button"
    element.onclick = function() { // Note this is a function
        table.deleteRow(row.rowIndex);
        deleteAmounts(entry);
    };
    return element;
}