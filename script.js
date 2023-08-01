let result = document.getElementById('result');

function appendToResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = '';
}

function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        calculateResult();
    }
}


function filterInput() {
    const input = result.value;
    const filteredInput = input.replace(/[^0-9+\-*/().\s]/g, ''); // Replace anything other than numbers and valid operators

    if (input !== filteredInput) {
        result.value = filteredInput;
    }
}


