//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀
// const inputZero = input[0].split(' ').map((num) => Number(num));
// const n = inputZero[0];
// const k = inputZero[1];
// const nums = input[1].split(' ').map((num) => Number(num));

const score = Number(input[0]);

console.log(solution(score));

//* 시스템
function solution(score) {
  let answer = '';
  if (score >= 90) {
    answer = 'A';
  } else if (score >= 80) {
    answer = 'B';
  } else if (score >= 70) {
    answer = 'C';
  } else if (score >= 60) {
    answer = 'D';
  } else {
    answer = 'F';
  }
  return answer;
}
