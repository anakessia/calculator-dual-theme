const themeToggle = document.getElementById('themeToggle');
const calculator = document.querySelector('.calculator-container');
const expressionDisplay = document.getElementById('expression');
const resultDisplay = document.querySelector('.result');
const buttons = document.querySelectorAll('.btn');

let expression = "";

// Toggles between light and dark mode
themeToggle.addEventListener('change', () => {
  calculator.classList.toggle('dark');
});

// Button actions
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    if (action === "clear") {
      expression = "";
      updateDisplay();
    } else if (action === "backspace") {
      expression = expression.slice(0, -1);
      updateDisplay();
    } else if (action === "calculate") {
      calculateResult();
    } else if (value !== undefined) {
      expression += value;
      updateDisplay();
    }
  });
});

// Updates the calculator display
function updateDisplay() {
  expressionDisplay.textContent = expression || "0";
  resultDisplay.textContent = "";
}

// Performs the calculation
function calculateResult() {
  try {
    const result = eval(expression);
    resultDisplay.textContent = Number(result).toLocaleString();
  } catch {
    resultDisplay.textContent = "Erro";
  }
}
