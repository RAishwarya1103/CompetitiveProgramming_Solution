function wordCount(board, word) {
  let wordCount = 0;
  let acc = "";
  let acc2 = "";
  let acc3 = "";
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      acc = board[i].slice(j, j + word.length).join("");
      if (acc.length == word.length) {
        if (acc == word) {
          wordCount++;
        }
        acc = "";
      }
      if (i == j) {
        acc2 = acc2 + board[i][j];
        if (acc2.length == word.length) {
          if (acc2 == word) {
            wordCount++;
          }
          acc2 = "";
        }
      }
      if (j == i + 1) {
        acc3 = acc3 + board[i][j];
        if (acc3.length == word.length) {
          if (acc3 == word) {
            wordCount++;
          }
          acc3 = "";
        }
      }
    }
  }
  acc = "";
  for (let i = 0; i < board[0].length; i++) {
    for (let j = 0; j < board.length; j++) {
      acc = acc + board[j][i];
      console.log(acc);
      if (acc.length == word.length) {
        if (acc == word) {
          wordCount++;
        }
        acc = "";
      }
    }
  }
  return wordCount;
}
let board = [
  ["s", "o", "s", "o"],
  ["s", "o", "o", "s"],
  ["s", "s", "s", "s"],
];
let word = "oos";
console.log(wordCount(board, word));
