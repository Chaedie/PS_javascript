//* 시스템
function solution(n, nums) {
  let min = nums[0];
  let max = nums[0];

  for (let i = 0; i < n; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }

    if (nums[i] > max) {
      max = nums[i];
    }
  }

  console.log(min, max);
}

//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

//* 인풋 - 커스텀
const input = fs.readFileSync(filePath).toString().split('\n');
const n = Number(input[0].trim());
const nums = input[1].split(' ').map((num) => Number(num));

//*아웃풋
solution(n, nums);
