//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀
const n = Number(input[0]);

console.log(solution());

//* 시스템
function solution() {
  let answer = '';
  let strs = [];
  let value;

  for (let i = 1; i <= n; i++) {
    strs = input[i].trim();
    answer += isVPS(strs) + '\n';
  }

  return answer;
}

function isVPS(strs) {
  let answer = '';
  let stack = [];

  for (let i = 0; i < strs.length; i++) {
    if (stack.length === 0 && strs[i] === ')') {
      return 'NO';
    }
    if (stack.length === 0) {
      stack.push(strs[i]);
    } else {
      if (strs[i] === '(') {
        stack.push(strs[i]);
      } else {
        stack.pop();
      }
    }
  }

  if (stack.length === 0) {
    return 'YES';
  }
  return 'NO';
}
