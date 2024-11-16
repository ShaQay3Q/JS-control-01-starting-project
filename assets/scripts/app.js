const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// // Clear and Focuse on the user entery field
// const clearAndFocus = () => {
// 	userInput.value = ""; // Clear the input field
// 	userInput.focus();
// };

// // clearAndFocus();

// Gets input from input field
function getUserNumberInput() {
	return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
	operationIdentifier,
	prevResult,
	operationNumber,
	newResult
) {
	const logEntry = {
		operation: operationIdentifier,
		prevResult: prevResult,
		number: operationNumber,
		result: newResult,
	};
	logEntries.push(logEntry);
	console.log(logEntries);
}

function calcResult(calcOperator) {
	const enteredNumber = getUserNumberInput();
	if (
		(calcOperator !== "ADD" &&
			calcOperator !== "SUBTRACT" &&
			calcOperator !== "MULTIPLY" &&
			calcOperator !== "DIVIDE") ||
		!enteredNumber
	) {
		return;
	}
	const initialResult = currentResult;
	let mathOp;
	if (calcOperator === "ADD") {
		currentResult += enteredNumber;
		mathOp = "+";
	} else if (calcOperator === "SUBTRACT") {
		currentResult -= enteredNumber;
		mathOp = "-";
	} else if (calcOperator === "MULTIPLY") {
		currentResult *= enteredNumber;
		mathOp = "*";
	} else if (calcOperator === "DIVIDE") {
		mathOp = "/";
		if (enteredNumber) {
			console.log(enteredNumber);
			currentResult /= enteredNumber;
		}
		currentResult = "inf";
		setTimeout(() => {
			currentResult = 0;
			outputResult(currentResult, "");
		}, 2500);
	}
	createAndWriteOutput(mathOp, initialResult, enteredNumber);
	writeToLog(calcOperator, initialResult, enteredNumber, currentResult);
}

function add() {
	calcResult("ADD");
}

function subtract() {
	calcResult("SUBTRACT");
}

function multiply() {
	calcResult("MULTIPLY");
}

function divide() {
	calcResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
