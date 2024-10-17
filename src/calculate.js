export const calculate = (value1, operator, value2) => {
  const num1 = parseFloat(value1);
  const num2 = parseFloat(value2);

  if (isNaN(num1) || isNaN(num2)) {
    return 'Invalid input';
  }

  const roundResult = (result) => (parseInt(result * 1e12) / 1e12).toString();

  const isValid = (result) =>
    result < Number.MAX_VALUE && result > -Number.MAX_VALUE;

  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) return 'Error';
      result = num1 / num2;
      break;
    case '+/-':
      result = -num1;
      break;
    case '%':
      result = num1 / 100;
      break;
    default:
      return 'Invalid operator';
  }

  return isValid(result) ? roundResult(result) : 'Out of bounds';
};
