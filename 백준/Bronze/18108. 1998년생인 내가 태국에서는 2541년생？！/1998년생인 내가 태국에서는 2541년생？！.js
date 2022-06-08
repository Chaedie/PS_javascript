//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().split('\n');

const n = Number(input[0]);
// const nums = input[1].map((num) => Number(num));
// const m = Number(input[2]);
// const targets = input[3].map((num) => Number(num));

solution(n);

//* 시스템
function solution(n) {
  console.log(n - (2541 - 1998));
}
