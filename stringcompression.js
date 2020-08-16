// Input:
// www.google.com

// Ouput:
// w3.go2gle.com

function stringcompression(input) {
  let inputAr = input.split("");
  let output = "";
  let count = 1;
  for (let i = 1; i <= inputAr.length; i++) {
    if (inputAr[i] === input[i - 1]) {
      count++;
    } else {
      output =
        count == 1
          ? `${output}${input[i - 1]}`
          : `${output}${input[i - 1]}${count}`;
      count = 1;
    }
  }
  return output;
}

let input = "www.google.com";

console.log(stringcompression(input));
