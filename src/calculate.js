export const calculate = (value1, operator, value2) => {
  const num1 = parseFloat(value1);
  const num2 = parseFloat(value2);

  switch (operator) {
    case '+':
      return (num1 + num2).toString();
    case '-':
      return (num1 - num2).toString();
    case '*':
      return (num1 * num2).toString();
    case '/':
      return num2 !== 0 ? (num1 / num2).toString() : 'Error';
    case '+/-':
      return (-num1).toString();
    case '%':
      return (num1 / 100).toString();
    default:
      return value2;
  }
};
