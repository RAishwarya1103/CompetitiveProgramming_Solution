function addBinaryStrings(a, b) {
  let result = "",
    carryOver = 0;

  while (a || b || carryOver) {
    let sum = +a.slice(-1) + +b.slice(-1) + carryOver;

    if (sum > 1) {
      result = (sum % 2) + result;
      carryOver = 1;
    } else {
      result = sum + result;
      carryOver = 0;
    }

    a = a.slice(0, -1);
    b = b.slice(0, -1);
  }

  return result;
}

console.log(addBinaryStrings("1000", "111"));
