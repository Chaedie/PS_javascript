//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀, 함수 콜
const nums = input[0].split(' ').map((num) => Number(num));

console.log(sol(nums));

//* 로직함수
function sol(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] * nums[i];
  }
  return sum % 10;
}