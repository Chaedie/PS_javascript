//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀
const inputZero = input[0].split(' ').map((num) => Number(num));
const n = inputZero[0];
const k = inputZero[1];
const nums = input[1].split(' ').map((num) => Number(num));

console.log(solution(nums));

//* 시스템
function solution(nums) {
  let sums = new Array(n);

  nums.push(0);
  sums[0] = 0;

  for (let i = 0; i < k; i++) {
    sums[0] += nums[i];
  }

  let max = sums[0];

  for (let i = 1; i < n - k + 1; i++) {
    sums[i] = sums[i - 1] - nums[i - 1] + nums[i + k - 1];
    if (sums[i] > max) {
      max = sums[i];
    }
  }
  return max;
}
