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

function addTwoDigits_v2(n) {
  let output = Math.floor(n / 10) | n % 10;
  return output;
}

console.log(addTwoDigits(29));
console.log(addTwoDigits_v2(29));
