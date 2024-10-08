let input = '';

function updateDisplay() {
    document.getElementById('display').innerText = input || '0';
}

function handleButtonClick(value) {
    input += value;
    updateDisplay();
}

function handleClear() {
    input = '';
    updateDisplay();
}

function handleCalculate() {
    try {
        input = eval(input).toString();
    } catch {
        input = 'Error';
    }
    updateDisplay();
}

document.getElementById('clear').addEventListener('click', handleClear);
document.getElementById('equals').addEventListener('click', handleCalculate);
