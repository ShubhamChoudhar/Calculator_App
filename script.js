const display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function appendToDisplay(value) {
    display.value += value;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert('Invalid input');
        clearDisplay();
    }
}

let memoryValue = 0;

function memoryClear() {
    memoryValue = 0;
}

function memoryRecall() {
    display.value = memoryValue;
}

function memoryAdd() {
    memoryValue += parseFloat(display.value);
}

function memorySubtract() {
    memoryValue -= parseFloat(display.value);
}

function piValue() {
    display.value = Math.PI;
}

function sinFunction() {
    display.value = Math.sin(parseFloat(display.value));
}

function cosFunction() {
    display.value = Math.cos(parseFloat(display.value));
}

function tanFunction() {
    display.value = Math.tan(parseFloat(display.value));
}

function arcsin() {
    display.value = Math.asin(parseFloat(display.value));
}

function sinh() {
    display.value = Math.sinh(parseFloat(display.value));
}

function cosh() {
    display.value = Math.cosh(parseFloat(display.value));
}

function tanh() {
    display.value = Math.tanh(parseFloat(display.value));
}

function log10() {
    display.value = Math.log10(parseFloat(display.value));
}

function square() {
    display.value = Math.pow(parseFloat(display.value), 2);
}

function squareRoot() {
    display.value = Math.sqrt(parseFloat(display.value));
}

function logFunction() {
    display.value = Math.log(parseFloat(display.value));
}

function eFunction() {
    display.value = Math.E;
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function toDegrees(radians) {
    return radians * (180 / Math.PI);
}
