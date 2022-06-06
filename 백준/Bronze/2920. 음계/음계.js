//* 시스템
function solution(nums) {
  let isAscending = true;
  let isDescending = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      isDescending = false;
    }
    if (nums[i - 1] > nums[i]) {
      isAscending = false;
    }
  }

  if (isAscending) {
    console.log('ascending');
  } else if (isDescending) {
    console.log('descending');
  } else {
    console.log('mixed');
  }
}

//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

//* 인풋 - 커스텀
const input = fs.readFileSync(filePath).toString().split('\n');
// const n = Number(input[0].trim());
const nums = input[0].split(' ').map((num) => Number(num));

//*아웃풋
solution(nums);
