function addBorder(picture) {
  let rowcount = picture.length;
  let colCount = picture[0].length;
  let starrow = picture.reduce((acc) => {
    acc += "*";
    return acc;
  }, "**");
  console.log(starrow);
  //picture = picture.unshift();
}
let picture = ["abc", "ded"];
console.log(addBorder(picture));
