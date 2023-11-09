let outputElement = document.getElementById("output");
let output = "0";

function appendToOutput(value) {
    if (output === "0") {
        output = value;
    } else {
        output += value;
    }
    outputElement.textContent = output;
}

function clearOutput() {
    output = "0";
    outputElement.textContent = output;
}

function calculate() {
    try {
        output = eval(output).toString();
        outputElement.textContent = output;
    } catch (error) {
        output = "Error";
        outputElement.textContent = output;
    }
}