const tempInput = document.getElementById('tempInput');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');

function checkFields() {
  if (tempInput.value && fromUnit.value && toUnit.value) {
    convertBtn.disabled = false;
  } else {
    convertBtn.disabled = true;
  }
}

tempInput.addEventListener('input', checkFields);
fromUnit.addEventListener('change', checkFields);
toUnit.addEventListener('change', checkFields);

function convertTemperature(value, from, to) {
  let result;

  if (from === 'Celsius') {
    if (to === 'Fahrenheit') {
      result = (value * 9/5) + 32;
    } else if (to === 'Kelvin') {
      result = parseFloat(value) + 273.15;
    } else {
      result = value; 
    }
  }

  else if (from === 'Fahrenheit') {
    if (to === 'Celsius') {
      result = (value - 32) * 5/9;
    } else if (to === 'Kelvin') {
      result = ((value - 32) * 5/9) + 273.15;
    } else {
      result = value;
    }
  }

  else if (from === 'Kelvin') {
    if (to === 'Celsius') {
      result = value - 273.15;
    } else if (to === 'Fahrenheit') {
      result = ((value - 273.15) * 9/5) + 32;
    } else {
      result = value; 
    }
  }

  return result;
}

convertBtn.addEventListener('click', () => {
  const tempValue = parseFloat(tempInput.value);
  const from = fromUnit.value;
  const to = toUnit.value;

  if (!isNaN(tempValue)) {
    const convertedValue = convertTemperature(tempValue, from, to);
    resultDiv.textContent = `Converted temperature: ${convertedValue.toFixed(2)} ${to}`;
  } else {
    resultDiv.textContent = 'Please enter a valid number';
  }
});
