//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

//* 인풋 (커스텀)
const [n, ...nums] = input;

//* 함수 콜 (고정)
let answer = solution(nums);
// answer = typeof answer === 'number' ? answer : answer.trim();
// console.log(answer);

//* 로직함수
function solution(numsStr) {
  for (let i = 0; i < n; i++) {
    let nums = numsStr[i].split(' ').map((num) => +num);
    console.log(`Case #${i + 1}: ${nums[0]} + ${nums[1]} = ${nums[0] + nums[1]}`);
  }
}
