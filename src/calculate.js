export const calculate = (value1, operator, value2) => {
  const num1 = parseFloat(value1);
  const num2 = parseFloat(value2);
  const ROUNDING = 1e12;

  if (isNaN(num1) || (operator !== '+/-' && isNaN(num2))) {
    return 'Invalid input';
  }

  const isValid = (result) =>
    result < Number.MAX_SAFE_INTEGER && result > Number.MIN_SAFE_INTEGER;

  let result;

  switch (operator) {
    case '+':
      result = (num1 * ROUNDING + num2 * ROUNDING) / ROUNDING;
      break;
    case '-':
      result = (num1 * ROUNDING - num2 * ROUNDING) / ROUNDING;
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

  if (!isValid(result)) {
    return 'Out of bounds';
  }

  let formattedResult = result.toString();

  if (formattedResult.includes('e')) {
    formattedResult = result.toFixed(12).replace(/\.?0+$/, '');
  }

  return formattedResult;
};
