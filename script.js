const userInput = document.getElementById('user-input');
const outputResult = document.getElementById('results-div');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');


checkButton.addEventListener('click', () => {
    const phoneRegex = /^1?\s?(?:\(\d{3}\)|\d{3})(?:\s|-)?\d{3}(?:\s|-)?\d{4}$/g;

    if (!userInput.value) {
        alert('Please provide a phone number');
        return;
    }

    const phoneNumber = userInput.value.trim();
    userInput.value = ''

    if (phoneRegex.test(phoneNumber)) {
        outputResult.textContent = `Valid US number: ${phoneNumber}`;
    } else {
        outputResult.textContent = `Invalid US number: ${phoneNumber}`;
    }

    return;
});

clearButton.addEventListener('click', () => {
    outputResult.textContent = '';
});

