export function sum(paramOne, paramTwo) {
  const firstNumber = parseInt(paramOne, 10);
  const secondNumber = parseInt(paramTwo, 10);

  if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
    throw Error('Params should be number.');
  }

  return firstNumber + secondNumber;
}

export function subtract(paramOne, paramTwo) {
  const firstNumber = parseInt(paramOne);
  const secondNumber = parseInt(paramTwo);

  if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
    throw Error('Params must be a number.');
  }

  return firstNumber - secondNumber;
}
