const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let filteredArray = numbers.filter(function (number) {
  if (number > 50) {
    return number;
  }
})

console.log('filteredArray', filteredArray);

let modifiedArray = numbers.map(function (number) {
  if (number > 50) {
    return number + 5;
  } else {
    return number;
  }
})

console.log('modifiedArray', modifiedArray)



// -----------------WITH ARROW FUNCTIONS-----------------

let filteredArray2 = numbers.filter(number => number > 50);

console.log('filteredArray2', filteredArray2);

let modifiedArray2 = numbers.map(number => number > 50 ? number + 5 : number)

console.log('modifiedArray2', modifiedArray2)