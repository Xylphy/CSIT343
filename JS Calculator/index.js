let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let result = document.getElementById("result");

let btnAddition = document.getElementById("btn-addition");
let btnSubtraction = document.getElementById("btn-subtraction");
let btnMultiplication = document.getElementById("btn-multiplication");
let btnDivision = document.getElementById("btn-division");

let history = document.getElementById("history");
let history_list = [];
let btnClearHistory = document.getElementById("clear-history");

let btnStore = document.getElementById("store-result");
let btnMemoryRecall = document.getElementById("memory-recall");
let btnMemoryClear = document.getElementById("memory-clear");

let memory = null;

let resultingValue;

class Operation {
    constructor(num1, num2, result, operator) {
        this.num1 = num1;
        this.num2 = num2;
        this.result = result;
        this.operator = operator;
    }

    toString() {
        return `${this.num1} ${this.operator} ${this.num2} = ${this.result}`;
    }
}

num1.addEventListener("keyup", function () {
    checkInputs();
});

num2.addEventListener("keyup", function () {
    checkInputs();
});

function checkInputs() {
    if (num1.value == "" || num2.value == "") {
        btnAddition.disabled = true;
        btnSubtraction.disabled = true;
        btnMultiplication.disabled = true;
        btnDivision.disabled = true;
        return false;
    } else {
        btnAddition.disabled = false;
        btnSubtraction.disabled = false;
        btnMultiplication.disabled = false;
        btnDivision.disabled = false;
        return true;
    }
}

function doOperation(operator) {
    if (checkInputs()) {
        let num1Value = parseFloat(num1.value);
        let num2Value = parseFloat(num2.value);
        let resultValue;

        try {
            switch (operator) {
                case "+":
                    resultValue = num1Value + num2Value;
                    break;
                case "-":
                    resultValue = num1Value - num2Value;
                    break;
                case "*":
                    resultValue = num1Value * num2Value;
                    break;
                case "/":
                    if (num2Value === 0) {
                        throw new Error("Division by zero");
                    }
                    resultValue = num1Value / num2Value;
                    break;
            }
            result.innerHTML = `Result: ${resultValue}`;
            history_list.push(
                new Operation(num1Value, num2Value, resultValue, operator)
            );
            resultingValue = resultValue;
        } catch (error) {
            history_list.push(
                new Operation(
                    num1Value,
                    num2Value,
                    `Result: Error: ${error.message}`,
                    operator
                )
            );
            result.innerHTML = `Result: Error: ${error.message}`;
            resultingValue = undefined;
        } finally {
            history.innerHTML =
                history.innerHTML +
                `<br>${history_list[history_list.length - 1].toString()}`;
        }
    }
}

btnAddition.addEventListener("click", function () {
    doOperation("+");
});

btnSubtraction.addEventListener("click", function () {
    doOperation("-");
});

btnMultiplication.addEventListener("click", function () {
    doOperation("*");
});

btnDivision.addEventListener("click", function () {
    doOperation("/");
});

btnStore.addEventListener("click", function () {
    if (memory == null) {
        memory = [];
    }
    if (resultingValue != undefined) {
        memory.push(resultingValue);
        alert(`Stored in memory: ${memory[memory.length - 1]}`);
    }
});

btnMemoryRecall.addEventListener("click", function () {
    if (memory != null && memory.length > 0) {
        num1.value = memory.pop();
    } else {
        alert("Memory is empty.");
    }
});

btnMemoryClear.addEventListener("click", function () {
    memory = null;
    alert("Memory cleared.");
});

btnClearHistory.addEventListener("click", function () {
    history_list = [];
    history.innerHTML = "";
});
