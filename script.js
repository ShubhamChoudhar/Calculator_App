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

// ... (rest of the functions remain unchanged)
