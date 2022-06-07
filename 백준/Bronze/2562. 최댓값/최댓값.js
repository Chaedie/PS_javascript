//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

//* 인풋 - 커스텀
const input = fs.readFileSync(filePath).toString().split('\n');
// const n = Number(input[0]);
// const nums = input[1].split(' ').map((num) => Number(num));
// const target = Number(input[2]);
const nums = input.map((num) => Number(num));
//*아웃풋
solution(nums);

//* 시스템
function solution(nums) {
  let max = nums[0];
  let index = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      index = i + 1;
    }
  }
  console.log(max);
  console.log(index);
}
