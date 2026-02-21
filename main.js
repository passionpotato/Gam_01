const numbersContainer = document.querySelector('.numbers');
const generateBtn = document.getElementById('generate-btn');
const historyList = document.getElementById('history-list');

function generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayNumbers(numbers) {
    numbersContainer.innerHTML = '';
    for (const number of numbers) {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = number;
        numbersContainer.appendChild(numberDiv);
    }
}

function updateHistory(numbers) {
    const listItem = document.createElement('li');
    listItem.textContent = numbers.join(', ');
    historyList.prepend(listItem);
}

function handleGenerateClick() {
    const newNumbers = generateNumbers();
    displayNumbers(newNumbers);
    updateHistory(newNumbers);
}

generateBtn.addEventListener('click', handleGenerateClick);

// Initial generation
handleGenerateClick();
