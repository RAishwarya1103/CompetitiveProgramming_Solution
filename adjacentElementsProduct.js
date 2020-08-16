function adjacentElementsProduct(inputArray) {
  let acc = inputArray[0] * inputArray[1];

  for (let i = 0; i < inputArray.length - 1; i++) {
    if (acc < inputArray[i] * inputArray[i + 1]) {
      acc = inputArray[i] * inputArray[i + 1];
    }
  }
  return acc;
}

console.log(adjacentElementsProduct([]));
