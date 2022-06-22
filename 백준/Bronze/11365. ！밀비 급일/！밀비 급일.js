//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 메인함수
// const [n, k] = input[0].split(' ').map((num) => parseInt(num));
// const n = parseInt(input[0]);

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'END') {
    break;
  }
  console.log(sol(input[i]));
}

//* 로직함수
function sol(words) {
  let reverse = new Array();
  for (let i = 0; i < words.length; i++) {
    reverse[i] = words[words.length - i - 1];
  }

  return reverse.join('');
}
