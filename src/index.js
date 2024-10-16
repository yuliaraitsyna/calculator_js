import './style.css';
import { buttons } from './model/buttons';
import themeIcon from './img/night-mode.png';
import { Theme } from './model/theme';
import { calculate } from './calculate';

const themeButtonIcon = document.getElementById('theme-icon');
themeButtonIcon.src = themeIcon;

const themeButton = document.getElementById('theme-btn');

themeButton.addEventListener('click', () => {
  const htmlElement = document.documentElement;

  if (htmlElement.getAttribute('data-theme') === Theme.LIGHT) {
    htmlElement.setAttribute('data-theme', Theme.DARK);
  } else {
    htmlElement.setAttribute('data-theme', Theme.LIGHT);
  }
});

const calculatorContainer = document.getElementById('calculator-container');
calculatorContainer.classList.add('calculator-container');

const displayContainer = document.getElementById('display-container');
displayContainer.classList.add('display-container');

const buttonsGrid = document.createElement('div');
buttonsGrid.classList.add('btn-grid');

calculatorContainer.appendChild(displayContainer);
calculatorContainer.appendChild(buttonsGrid);

let currentValue = '';
let previousValue = '';
let operation = '';
let isFloat = false;

const updateDisplay = (value) => {
  displayContainer.value = value || '';
  isFloat = value.includes('.');
};

const handleButtonClick = (btn) => {
  if (!isNaN(btn.value)) {
    currentValue += btn.value;
    updateDisplay(currentValue);
  } else if (btn.value === '.' && !isFloat) {
    currentValue += '.';
    isFloat = true;
  } else if (btn.type === 'operator') {
    if (operation && previousValue) {
      currentValue = calculate(previousValue, operation, currentValue);
    }

    operation = btn.value;
    previousValue = currentValue;
    currentValue = '';
    isFloat = false;
    updateDisplay(previousValue);
  } else if (btn.value === '+/-') {
    if (currentValue && !isNaN(currentValue)) {
      currentValue = calculate(currentValue, '+/-', currentValue);
      updateDisplay(currentValue);
    }
  } else if (btn.value === '%') {
    if (currentValue && !isNaN(currentValue)) {
      currentValue = calculate(currentValue, '%', currentValue);
      updateDisplay(currentValue);
    }
  } else if (btn.value === '=') {
    if (operation && previousValue) {
      currentValue = calculate(previousValue, operation, currentValue);
      previousValue = '';
      operation = '';

      updateDisplay(currentValue);
    }
  } else if (btn.value === 'C') {
    currentValue = '';
    previousValue = '';
    operation = '';
    isFloat = false;

    updateDisplay('');
  }
};

buttons.forEach((btn) => {
  const button = document.createElement('button');

  button.textContent = btn.label;
  button.classList.add(`btn-${btn.type}`);

  if (btn.value === '0') {
    button.classList.add('zero-btn');
  }

  button.addEventListener('click', () => handleButtonClick(btn));

  buttonsGrid.appendChild(button);
});

updateDisplay('');
