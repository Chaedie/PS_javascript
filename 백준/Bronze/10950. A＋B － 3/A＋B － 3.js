//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().split('\n');

const n = Number(input[0]);
for (let i = 0; i < n; i++) {
  let nums = input[i + 1].split(' ').map((num) => Number(num));
  solution(nums);
}

//* 시스템
function solution(nums) {
  console.log(nums[0] + nums[1]);
}
