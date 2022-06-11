//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀
const nums = input[0].split(' ').map((num) => Number(num));
const x = nums[0];
const y = nums[1];
const w = nums[2];
const h = nums[3];

console.log(solution(nums));

//* 시스템
function solution(nums) {
  let width = w - x < x ? w - x : x;
  let height = h - y < y ? h - y : y;
  let min = width > height ? height : width;
  return min;
}
