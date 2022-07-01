//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

//* 인풋 (커스텀)
// const [n, ...inputs] = input.map((el) => el.trim());
// const str = input[0].trim();
const [a, b, c] = input[0].split(' ').map((x) => +x);
//* 함수 콜 (고정)
let answer = solution(a, b, c);
answer = typeof answer === 'number' ? answer : answer.trim();
console.log(answer);

//* 로직함수
function solution(a, b, c) {
  return a + b + c;
}
