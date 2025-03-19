function myFunction(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = myFunction(0, 2);
const orangeJuice = myFunction(3, 0);
console.log(appleJuice);
console.log(orangeJuice);
