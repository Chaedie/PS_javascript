//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀
const k = Number(input[0]);

console.log(solution());

//* 시스템
function solution() {
  let answer = '';
  let stack = [];
  let value;

  for (let i = 1; i <= k; i++) {
    value = Number(input[i]);
    if (value === 0) {
      stack.pop();
    } else {
      stack.push(value);
    }
  }

  answer = stack.reduce((acc, cur, i) => acc + cur, 0);
  return answer;
}
