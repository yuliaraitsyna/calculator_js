import './style.css';
import { buttons } from './model/buttons';
import themeIcon from './img/night-mode.png';

const themeButtonIcon = document.getElementById('theme-icon');
themeButtonIcon.src = themeIcon;

const calculatorContainer = document.getElementById('calculator-container');
calculatorContainer.classList.add('calculator-container');

const displayContainer = document.createElement('span');
displayContainer.classList.add('display-container');

const buttonsGrid = document.createElement('div');
buttonsGrid.classList.add('btn-grid');

calculatorContainer.appendChild(displayContainer);
calculatorContainer.appendChild(buttonsGrid);

buttons.forEach((btn) => {
  const button = document.createElement('button');

  button.textContent = btn.label;
  button.classList.add(`btn-${btn.type}`);

  if (btn.value === '0') {
    button.classList.add('zero-btn');
  }

  button.addEventListener('click', () => {});

  buttonsGrid.appendChild(button);
});
