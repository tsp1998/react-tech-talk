function Hello() {
  console.log('Hello World!')
}

Hello();

function addTwoNumbers(number1, number2) {
  const sum = number1 + number2;
  console.log('Addition: ', sum);
}

addTwoNumbers(10, 20);
addTwoNumbers(40, 50);


function checkPrimeNumber(number) {
  let isPrimeNumber = true;
  for (let i = 2; i < parseInt(number / 2) + 1; i++) {
    if (number % i === 0) {
      isPrimeNumber = false;
    }
  }
  return isPrimeNumber;
}


let isPrimeNumber = checkPrimeNumber(10);
console.log('10 Prime Number', isPrimeNumber)

isPrimeNumber = checkPrimeNumber(5);
console.log('5 Prime Number', isPrimeNumber)

isPrimeNumber = checkPrimeNumber(41);
console.log('41 Prime Number', isPrimeNumber)