//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
//* 인풋 (커스텀)
const [n, x] = input[0].split(' ').map((x) => +x);
const nums = input[1].split(' ').map((x) => +x);
//* 함수 콜 (고정)
let answer = solution(n, x, nums);
answer = typeof answer === 'number' ? answer : answer.trim();
console.log(answer);

//* 로직함수
function solution(n, x, nums) {
  let result = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] < x) {
      result.push(nums[i]);
    }
  }

  return result.join(' ');
}
