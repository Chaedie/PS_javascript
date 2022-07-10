//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
//* 인풋 (커스텀)
// const n = +input[0];
const nums = input[0].split(' ').map((x) => +x);

//* 함수 콜 (고정)
let answer = solution();
console.log(typeof answer === 'number' ? answer : answer.trimEnd());

//* 로직함수
function solution() {
  return nums.sort((a, b) => a - b).join(' ');
}
