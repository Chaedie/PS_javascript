//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
//* 인풋 (커스텀)
// const n = +input[0];
for (let i = 0; i < input.length; i++) {
  const nums = input[i].split(' ').map((x) => +x);
  if (nums[0] === 0) {
    break;
  }
  let answer = solution(nums);
  console.log(answer === 'number' ? answer : answer.trim());
}

//* 함수 콜 (고정)

//* 로직함수
function solution(nums) {
  nums.sort((a, b) => a - b);
  if (nums[0] ** 2 + nums[1] ** 2 === nums[2] ** 2) {
    return 'right';
  }

  return 'wrong';
}
