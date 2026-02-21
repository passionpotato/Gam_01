const numbersContainer = document.querySelector('.numbers');
const generateBtn = document.getElementById('generate-btn');
const historyList = document.getElementById('history-list');
const themeBtn = document.getElementById('theme-btn');

// Lotto Logic
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

// Theme Logic
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeBtn.textContent = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Event Listeners
generateBtn.addEventListener('click', handleGenerateClick);
themeBtn.addEventListener('click', toggleTheme);

// Initialization
function init() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    handleGenerateClick();
}

init();
