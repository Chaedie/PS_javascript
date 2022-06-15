//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀
let n = Number(input[0]);
let stack = new Array();

let answer = '';

for (let i = 1; i <= n; i++) {
  let inputs = input[i].split(' ');
  sol(stack, inputs[0].trim(), Number(inputs[1]));
}

console.log(answer);

//* 시스템
function sol(stack, func, value) {
  switch (func) {
    case 'push':
      stack.push(value);
      break;
    case 'pop':
      if (stack.length === 0) answer += -1 + '\n';
      else answer += stack[stack.length - 1] + '\n';
      stack.pop();
      break;
    case 'top':
      if (stack.length === 0) answer += -1 + '\n';
      else answer += stack[stack.length - 1] + '\n';
      break;
    case 'size':
      answer += stack.length + '\n';
      break;
    case 'empty':
      if (stack.length === 0) answer += 1 + '\n';
      else answer += 0 + '\n';
      break;
    default:
      break;
  }
}