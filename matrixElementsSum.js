function matrixElementsSum(matrix) {
  let acc = [];
  let ignoreColumn = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!ignoreColumn.includes(j)) {
        if (matrix[i][j] != 0) {
          acc.push(matrix[i][j]);
        } else if (matrix[i][j] == 0) {
          ignoreColumn.push(j);
        }
      }
    }
  }
  return acc.reduce((ac, item) => ac + item);
}

let matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];

console.log(matrixElementsSum(matrix));
