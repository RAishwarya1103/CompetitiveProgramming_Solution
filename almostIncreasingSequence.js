function almostIncreasingSequence(sequence) {
  let changeCount = 0;
  let i = 0;

  //   let duplicate = sequence.reduce((acc, item) => {
  //     acc[item] = (acc[item] || 0) + 1;
  //     return acc;
  //   }, {});
  //let items = Object.values(duplicate);
  //   if (items.find((x) => x > 1)) {
  //     return false;
  //   }
  let duplicates = [];

  while (i < sequence.length) {
    if (sequence[i + 1] <= sequence[i]) {
      duplicates.push(sequence[i + 1]);
      changeCount++;
    }
    i++;
    if (changeCount >= 2 || duplicates.length >= 2) {
      return false;
    }
    if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1])
      return false;
  }
  return true;
}

console.log(almostIncreasingSequence([1, 2, 1, 2]));
