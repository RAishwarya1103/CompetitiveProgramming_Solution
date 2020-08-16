function isLucky(n) {
  let nLen = n.toString().length;
  let firsthalfsum = n
    .toString()
    .substring(0, nLen / 2)
    .split("")
    .reduce((acc, total) => (acc = acc + +total), 0);
  let sechalf = n
    .toString()
    .substring(nLen / 2)
    .split("")
    .reduce((acc, total) => (acc = acc + +total), 0);

  if (firsthalfsum == sechalf) {
    return true;
  }
  return false;
}

let n = 1230;
console.log(isLucky(n));
