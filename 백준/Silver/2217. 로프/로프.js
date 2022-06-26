//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

//* 인풋 (커스텀)
const [n, ...nums] = input.map((num) => +num);

//* 함수 콜 (고정)
let answer = solution(n, nums);
// answer = typeof answer === 'number' ? answer : answer.trim();
// console.log(answer);

//* 로직함수
function solution(n, nums) {
  nums.sort((a, b) => b - a);
  let max = nums[nums.length - 1] * nums.length;

  for (let i = 0; i < n; i++) {
    nums.pop();
    if (nums[nums.length - 1] * nums.length > max) {
      max = nums[nums.length - 1] * nums.length;
    }
  }
  console.log(max);
  return max;
}
