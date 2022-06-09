//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀
// const inputZero = input[0].split(' ').map((num) => Number(num));
// const n = inputZero[0];
// const k = inputZero[1];
// const nums = input[1].split(' ').map((num) => Number(num));

const a = Number(input[0]);
const b = Number(input[1]);

console.log(solution(a, b));

//* 시스템
function solution(a, b) {
  let answer = '';
  let num = b.toString();
  for (let i = 2; i >= 0; i--) {
    answer += Number(num[i]) * a + '\n';
  }
  answer += a * b;
  return answer;
}
