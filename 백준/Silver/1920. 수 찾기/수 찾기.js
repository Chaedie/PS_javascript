//* 시스템
function solution() {
  let answer = '';
  nums.sort((a, b) => a - b);

  for (let i = 0; i < m; i++) {
    answer += binarySearch(nums, targets[i]) + '\n';
  }
  console.log(answer);
}

function binarySearch(nums, target) {
  let lt = 0;
  let rt = nums.length - 1;
  let mid;

  for (let i = 0; i < n; i++) {
    mid = Math.floor((rt - lt) / 2 + lt);
    if (nums[mid] === target) {
      return 1;
    }
    if (lt >= rt) {
      return 0;
    }
    if (nums[mid] > target) {
      rt = mid - 1;
      continue;
    } else if (nums[mid] < target) {
      lt = mid + 1;
      continue;
    }
  }

  return 0;
}

//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

//* 인풋 - 커스텀
const input = fs.readFileSync(filePath).toString().split('\n');
// const input0 = input[0].trim().split(' ');
// const n = Number(input0[0]);
// const target = Number(input0[1]);
const n = Number(input[0]);
const nums = input[1].split(' ').map((num) => Number(num));
const m = Number(input[2]);
const targets = input[3].split(' ').map((num) => Number(num));

//*아웃풋
solution();
