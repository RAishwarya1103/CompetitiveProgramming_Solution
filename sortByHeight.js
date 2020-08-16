function sortByHeight(a) {
  let manHeight = a.filter((x) => x != -1);
  manHeight.sort((a, b) => a - b);
  a = a.map((x) => (x == -1 ? x : "x"));
  a = a.map((x) => {
    if (x == "x") {
      x = manHeight[0];
      manHeight.shift(0);
    }
    return x;
  });
  return a;
}

let a = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(sortByHeight(a));
