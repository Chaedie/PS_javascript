//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().split('\n');

const n = Number(input[0]);
// const nums = input[0].split(' ').map((num) => Number(num));

solution(n);

//* 시스템
function solution(n) {
  for (let i = 1; i <= n; i++) {
    let answer = '';
    for (let j = 0; j < i; j++) {
      answer += '*';
    }
    console.log(answer);
  }
}
