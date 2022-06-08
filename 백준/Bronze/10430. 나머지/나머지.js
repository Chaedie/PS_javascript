//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().split('\n');

// const n = Number(input[0]);
const nums = input[0].split(' ').map((num) => Number(num));
// const m = Number(input[2]);
// const targets = input[3].map((num) => Number(num));
const A = nums[0];
const B = nums[1];
const C = nums[2];

solution();

//* 시스템
function solution() {
  console.log((A + B) % C);
  console.log(((A % C) + (B % C)) % C);
  console.log((A * B) % C);
  console.log(((A % C) * (B % C)) % C);
}
