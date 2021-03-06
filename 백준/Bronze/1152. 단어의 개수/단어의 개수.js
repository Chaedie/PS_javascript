//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀
// const inputZero = input[0].split(' ');
// const n = parseInt(inputZero[0]);
// const x = parseInt(inputZero[1]);
// let nums = input[1].split(' ').map((num) => parseInt(num));

//* 아웃풋
console.log(sol());
//* 시스템
function sol() {
  let count = 0;
  let words = input[0].trim().split(' ');

  for (let i = 0; i < words.length; i++) {
    if (words[i] !== '') {
      count++;
    }
  }
  return count;
}
