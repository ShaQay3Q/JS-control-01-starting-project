const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Clear and Focuse on the user entery field
// const clearAndFocus = () => {
// 	userInput.value = ""; // Clear the input field
// 	userInput.focus();
// };

// clearAndFocus();

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
	const initialResult = currentResult;
	let mathOp;
	if (calcOperator === "ADD") {
		currentResult += enteredNumber;
		mathOp = "+";
	} else if (calcOperator === "Minus") {
		currentResult -= enteredNumber;
		mathOp = "-";
	} else if (calcOperator === "Multi") {
		currentResult *= enteredNumber;
		mathOp = "*";
	} else {
		mathOp = "/";
		if (userInput !== 0) {
			currentResult /= userInput;
		} else {
			currentResult = "inf";
			setTimeout(() => {
				currentResult = 0;
				outputResult(currentResult, "");
			}, 2500);
		}
	}
	createAndWriteOutput(mathOp, initialResult, enteredNumber);
	writeToLog(calcOperator, initialResult, enteredNumber, currentResult);
}

function add() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult += enteredNumber;
	createAndWriteOutput("+", initialResult, enteredNumber);
	writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

function subtract() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult -= enteredNumber;
	createAndWriteOutput("-", initialResult, enteredNumber);
	writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function multiply() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult *= enteredNumber;
	createAndWriteOutput("*", initialResult, enteredNumber);
	writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult /= enteredNumber;
	createAndWriteOutput("/", initialResult, enteredNumber);
	writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
