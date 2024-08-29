
let display = document.getElementById('display');

function append(value) {
  display.textContent += value;
}

function calculate() {
  try {
    const result = eval(display.textContent);
    if (result === Infinity) {
      display.textContent = 'Error';
    } else {
      display.textContent = result;
    }
  } catch (e) {
    display.textContent = 'Error';
  }
}

function clearDisplay() {
  display.textContent = '';
}

function deleteLast() {
  if (display.textContent.length > 0) {
    display.textContent = display.textContent.slice(0, -1);
  }
}

function subtract() {
  append('-');
}

function multiply() {
  append('*');
}

function divide() {
  append('/');
}

function square() {
  append("**2");
}
  



