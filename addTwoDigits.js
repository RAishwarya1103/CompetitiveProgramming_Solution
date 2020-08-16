function addTwoDigits(n) {
  let output = n
    .toString()
    .split("")
    .reduce((acc, item) => {
      acc = acc + +item;
      return acc;
    }, 0);

  return output;
}

console.log(addTwoDigits(29));
