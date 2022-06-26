//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

//* 인풋 (커스텀)
const nums = input[0].split(' ').map((num) => +num);

//* 함수 콜 (고정)
let answer = solution(nums);
answer = typeof answer === 'number' ? answer : answer.trim();
console.log(answer);

//* 로직함수
function solution(nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  for (let [num, count] of map) {
    if (count === 3) {
      return num * 1000 + 10000;
    }
    if (count === 2) {
      return num * 100 + 1000;
    }
  }

  return Math.max(...nums) * 100;
}
