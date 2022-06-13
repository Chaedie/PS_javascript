//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀
const inputZero = input[0].split(' ').map((num) => Number(num));
const n = inputZero[0];
const m = inputZero[1];
const nums = input[1].split(' ').map((num) => Number(num));

console.log(sol(n));

//* 시스템
function sol(num) {
  let sum;
  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        sum = nums[i] + nums[j] + nums[k];
        if (sum <= m && sum > max) {
          max = sum;
        }
      }
    }
  }
  return max;
}
