//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀
const n = Number(input[0]);
let nums = new Set();
const input1 = input[1].split(' ');
const m = Number(input[2]);
const targets = input[3].split(' ').map((num) => Number(num));

for (let i = 0; i < n; i++) {
  nums.add(Number(input1[i]));
}

console.log(solution(m, targets));

//* 시스템
function solution(m, targets) {
  let answer = '';
  for (let i = 0; i < m; i++) {
    if (nums.has(targets[i])) {
      answer += '1 ';
    } else {
      answer += '0 ';
    }
  }
  return answer;
}
