function numberCount(arr, input) {
  return arr.filter((item) => item === input).length;
}

let arr = [2, 3, 4, 3, 2, 1];
let input = 5;
console.log(numberCount(arr, input));
