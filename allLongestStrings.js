function allLongestStrings(inputArray) {
  let outputArray = inputArray.reduce((acc, item, index) => {
    if (index == 0) {
      acc.push(item);
    }
    let ar = acc.find((x) => x.length < item.length);
    let ar2 = acc.find((x) => x.length == item.length);
    if (ar) {
      acc = [];
    }
    if ((ar || ar2) && index != 0) {
      acc.push(item);
    }
    return acc;
  }, []);
  return outputArray;
}

let inputArray = ["aba", "aa", "ad", "vcd", "aba"];
console.log(allLongestStrings(inputArray));
