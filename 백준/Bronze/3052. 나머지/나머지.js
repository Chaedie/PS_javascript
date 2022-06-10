//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀
const nums = input.map((num) => Number(num));
// const inputZero = input[0].split(' ').map((num) => Number(num));
// const n = inputZero[0];
// const k = inputZero[1];
// const nums = input[1].split(' ').map((num) => Number(num));

// const score = Number(input[0]);

console.log(solution(nums));

//* 시스템
function solution(nums) {
  let answer = '';
  let reminder = new Set();
  for (let i = 0; i < 10; i++) {
    reminder.add(nums[i] % 42);
  }
  return reminder.size;
}
