//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
//* 인풋 (커스텀)
// const n = +input[0];
// const nums = input[0].split(' ').map((x) => +x);
const nums = input.map((x) => +x);

//* 함수 콜 (고정)
let answer = solution();
console.log(typeof answer === 'number' ? answer : answer.trimEnd());

//* 로직함수
function solution() {
  let answer = [];
  answer.push(nums.reduce((acc, cur) => (acc += cur), 0) / nums.length);
  answer.push(nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)]);
  return answer.join('\n');
}
