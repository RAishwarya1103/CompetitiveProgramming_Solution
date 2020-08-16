function productOfNum(input) {
  let zeroCount = input.filter((item) => item == 0).length;
  let product;
  if (zeroCount <= 1) {
    product = input.reduce((acc, item) => {
      acc = item == 0 ? acc : acc * item;
      return acc;
    }, 1);
  } else {
    product = 0;
  }
  let outputArray = input.map((item) => {
    let val;
    if (zeroCount <= 1) {
      if (item != 0) {
        val = zeroCount == 1 ? 0 : product / item;
      } else {
        val = product;
      }
    } else {
      val = 0;
    }
    return val;
  });
  return outputArray;
}

let input = [];
input = [0];
input = [0, 1, 2, 3];
//input = [1, 2, 0, 7, 3, 0, 4];
//input = [1, 2, 3, 4, 5];
console.log(productOfNum(input));
