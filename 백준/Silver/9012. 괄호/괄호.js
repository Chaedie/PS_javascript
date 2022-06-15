//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀
const n = Number(input[0]);

//* 시스템
let answer = '';
for (let i = 1; i <= n; i++) {
  let strs = input[i].trim();
  answer += isVPS(strs) + '\n';
}

console.log(answer);

function isVPS(strs) {
  let stack = [];

  for (let i = 0; i < strs.length; i++) {
    if (stack.length === 0 && strs[i] === ')') {
      return 'NO';
    }
    if (strs[i] === '(') {
      stack.push(strs[i]);
    } else {
      stack.pop();
    }
  }

  if (stack.length === 0) {
    return 'YES';
  }
  return 'NO';
}
