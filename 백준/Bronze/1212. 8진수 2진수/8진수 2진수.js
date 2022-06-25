//* 인풋 - 디폴트
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀, 함수 콜
// const n = +input[0];

const n = input[0];
const answer = solution(n);
console.log(answer.trim());

//* 로직함수
function solution(n) {
  return BigInt(`0o${n}`).toString(2);
}
