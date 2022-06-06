//* 시스템
function solution(a, b) {
  let answer = a / b;
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(parseInt(a / b));
  console.log(a % b);
}

//* 인풋
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

let nums = input.split(' ');

let a = Number(nums[0]);
let b = Number(nums[1]);

//*아웃풋
solution(a, b);
